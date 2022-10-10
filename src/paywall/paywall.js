import React from 'react';
import {StyleSheet, View, Alert, ScrollView, Platform} from 'react-native';
import withStyles from '../util/with-styles';
import buyWithAlert from '../util/buy-with-alert';
import buildTranslate from '../i18n';

class Paywall extends React.Component {

  static getDerivedStateFromProps(props, state) {
    if (state.productSelected == false) {
      var activeProduct = null;
      var selectedIndex = 0;

      if (props.productsForSale && props.productsForSale.length) {
        selectedIndex = props.defaultSelectedProductIndex || 0;
        activeProduct = props.productsForSale[selectedIndex];
      }
      if (!activeProduct) {
        selectedIndex = 0;
        activeProduct = props.productsForSale[0];
      }
      return {activeProduct : activeProduct, selectedIndex: selectedIndex};
    }
    return null;
  }

  constructor(props) {
    super(props);
    this.state = {
      productSelected: false,
      activeProduct: null,
      selectedIndex: null,
      isBuyLoading: false,
      isRestoreLoading: false,
      isProductsRefreshing: false
    };
  }

  onProductPress = (activeProduct, index) => {
    if (this.state.isBuyLoading || this.state.isRestoreLoading) return;
    this.setState({
      productSelected: true,
      activeProduct: activeProduct,
      selectedIndex: index
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
    var {isBuyLoading, isRestoreLoading, activeProduct} = this.state;
    var {onBuyStart, onBuyEnd, lang, i18n} = this.props;
    var transaction = null;

    if (isBuyLoading || isRestoreLoading) return;
    this.setState({isBuyLoading: true});
    try {
      transaction = await buyWithAlert(() => onBuyStart(activeProduct), lang, i18n);
      onBuyEnd(null, transaction);
    }
    catch (err) {
      onBuyEnd(err, null);
    }
    // Update state
    this.setState({isBuyLoading: false});
  }

  onRestore = async () => {
    var {isBuyLoading, isRestoreLoading} = this.state;
    var {onRestoreStart, onRestoreEnd, lang, i18n} = this.props;
    var translate = buildTranslate('Paywall', lang, i18n);

    if (isBuyLoading || isRestoreLoading) return;
    this.setState({isRestoreLoading: true});
    var error = null;
    var alertTitle = translate('restoreSuccessTitle');
    var alertMessage = translate('restoreSuccessMessage');
    // Start restore
    try {
      await onRestoreStart();
    }
    // Catch any error
    catch (err) {
      error = err;
      alertTitle = translate('restoreErrorTitle');
      alertMessage = translate('restoreErrorMessage');
    }
    // Update state
    this.setState({isRestoreLoading: false});
    // Show alert
    Alert.alert(alertTitle, alertMessage, [
      {
        text: translate('ok'),
        onPress: () => onRestoreEnd(error)
      }
    ]);
  }

  onShowManageSubscriptions = async (product) => {
    var {onShowManageSubscriptions, lang, i18n} = this.props;
    var translate = buildTranslate('Paywall', lang, i18n);

    // Show alert if the product is managed by a different platform
    if (product.platform != Platform.OS) {
      Alert.alert(translate('manageSubscriptionsErrorTitleDifferentPlatform', product), translate('manageSubscriptionsErrorMessageDifferentPlatform', product), [
        {
          text: translate('ok')
        }
      ]);
    }
    // Otherwise call the event
    else {
      onShowManageSubscriptions(product);
    }
  }

  renderActiveSubscription = () => {
    var {ActiveSubscription, style, styles, ...props} = this.props;

    if (!ActiveSubscription) return null;
    return (
      <ActiveSubscription {...this.state} {...props} onShowManageSubscriptions={this.onShowManageSubscriptions}/>
    )
  }

  renderProducts = () => {
    var {ProductsWrapper, style, styles, ...props} = this.props;

    if (!ProductsWrapper) return null;
    return (
      <ProductsWrapper onProductPress={this.onProductPress} {...this.state} {...props}/>
    )
  }

  renderEmptyProductsForSale = () => {
    var {ProductsEmpty, style, styles, ...props} = this.props;

    if (!ProductsEmpty) return null;
    return (
      <ProductsEmpty {...this.state} {...props} onRefreshProducts={this.onRefreshProducts}/>
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
      <Buy {...this.state} {...props} onBuy={this.onBuy}/>
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
    var {productsForSale} = this.props;

    return (
      <ScrollView alwaysBounceVertical={false}>
        {this.renderActiveSubscription()}
        {(!productsForSale || !productsForSale.length) && this.renderEmptyProductsForSale()}
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