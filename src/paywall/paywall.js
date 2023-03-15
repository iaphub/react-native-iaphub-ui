import React from 'react';
import {StyleSheet, View, Alert, ScrollView, Platform} from 'react-native';
import withStyles from '../util/with-styles';
import buyWithAlert from '../util/buy-with-alert';
import showAlert from '../util/show-alert';
import buildTranslate from '../i18n';

class Paywall extends React.Component {

  static getDerivedStateFromProps(props, state) {
    if (state.hasSelectedProduct == false) {
      var selectedProduct = null;
      var selectedProductForSaleIndex = 0;
      var selectedActiveProductIndex = null;

      if (props.productsForSale && props.productsForSale.length > props.defaultSelectedProductIndex) {
        selectedProductForSaleIndex = props.defaultSelectedProductIndex || 0;
        selectedProduct = props.productsForSale[selectedProductForSaleIndex];
      }
      if (!selectedProduct && props.productsForSale && props.productsForSale.length >= 1) {
        selectedProductForSaleIndex = 0;
        selectedProduct = props.productsForSale[0];
      }
      if (props.activeProducts && props.activeProducts.length) {
        selectedProductForSaleIndex = null;
        selectedActiveProductIndex = 0;
        selectedProduct = props.activeProducts[0];
      }

      return {selectedProduct : selectedProduct, selectedProductForSaleIndex: selectedProductForSaleIndex, selectedActiveProductIndex: selectedActiveProductIndex};
    }
    return null;
  }

  constructor(props) {
    super(props);
    this.state = {
      selectedActiveProductIndex: null,
      selectedProductForSaleIndex: null,
      selectedProduct: null,
      hasSelectedProduct: false,
      isBuyLoading: false,
      isRestoreLoading: false,
      isProductsRefreshing: false
    };
  }

  onActiveProductPress = (product, index) => {
    if (this.state.isBuyLoading || this.state.isRestoreLoading) return;
    this.setState({
      hasSelectedProduct: true,
      selectedProduct: product,
      selectedProductForSaleIndex: null,
      selectedActiveProductIndex: index
    });
  }

  onProductForSalePress = (product, index) => {
    if (this.state.isBuyLoading || this.state.isRestoreLoading) return;
    this.setState({
      hasSelectedProduct: true,
      selectedProduct: product,
      selectedProductForSaleIndex: index,
      selectedActiveProductIndex: null
    });
  }

  onRefreshProducts = async () => {
    var {isProductsRefreshing} = this.state;
    var {onRefreshProducts} = this.props;

    if (isProductsRefreshing) return;
    this.setState({isProductsRefreshing: true});
    var startTime = Date.now();
    await onRefreshProducts();
    // Wait at least 2secs for the activity indicator to show up nicely
    var waitTime = Date.now() - startTime;
    var minimumWaitTime = 2000;
    if (waitTime < minimumWaitTime) {
      await new Promise((resolve) => setTimeout(resolve, minimumWaitTime - waitTime));
    }

    this.setState({isProductsRefreshing: false});
  }

  onBuy = async () => {
    var {isBuyLoading, isRestoreLoading, selectedProduct} = this.state;
    var {onBuyStart, onBuyEnd, lang, i18n, showBuySuccessAlert, showBuyErrorAlert, alert} = this.props;
    var transaction = null;

    if (isBuyLoading || isRestoreLoading) return;
    this.setState({isBuyLoading: true});
    try {
      transaction = await buyWithAlert(() => onBuyStart(selectedProduct), lang, i18n, showBuySuccessAlert, showBuyErrorAlert, alert);
      onBuyEnd(null, transaction, selectedProduct);
    }
    catch (err) {
      onBuyEnd(err, null, selectedProduct);
    }
    // Update state
    this.setState({isBuyLoading: false});
  }

  onRestore = async () => {
    var {isBuyLoading, isRestoreLoading} = this.state;
    var {onRestoreStart, onRestoreEnd, lang, i18n, showRestoreSuccessAlert, showRestoreEmptyAlert, showRestoreErrorAlert} = this.props;
    var translate = buildTranslate('Paywall', lang, i18n);

    if (isBuyLoading || isRestoreLoading) return;
    this.setState({isRestoreLoading: true});
    var error = null;
    var alertTitle = translate('restoreSuccessTitle');
    var alertMessage = translate('restoreSuccessMessage');
    var displayAlert = true;
    var response = null;
    var isEmptyRestore = false;
    // Start restore
    try {
      response = await onRestoreStart();
      if (response && response.newPurchases && !response.newPurchases.length && response.transferredActiveProducts && !response.transferredActiveProducts.length) {
        alertMessage = translate('restoreEmptyMessage');
        isEmptyRestore = true;
      }
    }
    // Catch any error
    catch (err) {
      error = err;
      alertTitle = translate('restoreErrorTitle');
      alertMessage = translate('restoreErrorMessage');
    }
    // Hide alert depending on config
    if (isEmptyRestore) {
      if (showRestoreEmptyAlert == false) {
        displayAlert = false;
      }
    }
    else {
      if (!error && showRestoreSuccessAlert == false) {
        displayAlert = false;
      }
      if (error && showRestoreErrorAlert == false) {
        displayAlert = false;
      }
    }
    // Update state
    this.setState({isRestoreLoading: false});
    // Show alert
    if (displayAlert) {
      await this.showAlert({title: alertTitle, description: alertMessage, button: translate('ok')});
    }
    // Call restore end
    onRestoreEnd(error, response);
  }

  onShowManageSubscriptions = async (product) => {
    var {onShowManageSubscriptions, lang, i18n} = this.props;
    var translate = buildTranslate('Paywall', lang, i18n);

    // Show alert if the product is managed by a different platform
    if (product.platform != Platform.OS) {
      this.showAlert({
        title: translate('manageSubscriptionsErrorTitleDifferentPlatform', product),
        description: translate('manageSubscriptionsErrorMessageDifferentPlatform', product),
        button: translate('ok')
      });
    }
    // Otherwise call the event
    else {
      onShowManageSubscriptions(product);
    }
  }

  showAlert = async (opts) => {
    var {alert} = this.props;

    if (alert) {
      await alert(opts);
    }
    else {
      await showAlert(opts);
    }
  }

  renderActiveProducts = () => {
    var {ActiveProductsWrapper, style, styles, ...props} = this.props;

    if (!ActiveProductsWrapper) return null;
    return (
      <ActiveProductsWrapper onProductPress={this.onActiveProductPress} {...this.state} {...props}/>
    )
  }

  renderProducts = () => {
    var {ProductsWrapper, style, styles, ...props} = this.props;

    if (!ProductsWrapper) return null;
    return (
      <ProductsWrapper onProductPress={this.onProductForSalePress} {...this.state} {...props}/>
    )
  }

  renderProductsError = () => {
    var {ProductsError, style, styles, ...props} = this.props;

    if (!ProductsError) return null;
    return (
      <ProductsError {...this.state} {...props} onRefreshProducts={this.onRefreshProducts}/>
    )
  }

  renderIntroPhases = () => {
    var {IntroPhasesWrapper, style, styles, ...props} = this.props;

    if (!IntroPhasesWrapper) return null;
    return (
      <IntroPhasesWrapper {...this.state} {...props}/>
    )
  }

  renderSubscriptionTerms = () => {
    var {SubscriptionTerms, style, styles, ...props} = this.props;

    if (!SubscriptionTerms) return null;
    return (
      <SubscriptionTerms {...this.state} {...props}/>
    )
  }

  renderRestore = () => {
    var {Restore, style, styles, ...props} = this.props;

    if (!Restore) return null;
    return (
      <Restore {...this.state} {...props} onRestore={this.onRestore}/>
    )
  }
  
  renderBuy = () => {
    var {Buy, style, styles, ...props} = this.props;

    if (!Buy) return null;
    return (
      <Buy {...this.state} {...props} onBuy={this.onBuy} onShowManageSubscriptions={this.onShowManageSubscriptions}/>
    )
  }

  renderLoading = () => {
    var {Loading, style, styles, ...props} = this.props;

    if (!Loading) return null;
    return (
      <Loading {...this.state} {...props}/>
    )
  }

  renderContent() {
    var {productsForSale, activeProducts, err} = this.props;

    return (
      <ScrollView alwaysBounceVertical={false}>
        {this.renderActiveProducts()}
        {(!productsForSale || !productsForSale.length) && (!activeProducts || !activeProducts.length || err) && this.renderProductsError()}
        {(productsForSale && productsForSale.length > 0) && this.renderProducts()}
        {this.renderIntroPhases()}
        {this.renderSubscriptionTerms()}
        {this.renderRestore()}
      </ScrollView>
    )
  }

  render() {
    var {styles, isLoading} = this.props;

    return (
      <View style={styles.root}>
        <View style={styles.content}>
          {isLoading && this.renderLoading()}
          {!isLoading && this.renderContent()}
          {!isLoading && this.renderBuy()}
        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center'
  },
  content: {
    flex: 1,
    width: '100%',
    maxWidth: 480
  }
});

export default withStyles(styles, 'Paywall')(Paywall);