import React from 'react';
import {StyleSheet, Text} from 'react-native';
import PropTypes from 'prop-types';
import Paywall from '../paywall';
import DefaultProduct from './product';
import DefaultProductTitle from './product-title';
import DefaultProductPrice from './product-price';
import DefaultProductPricePerMonth from './product-price-per-month';
import DefaultProductContentSingleMonthlySubscription from './product-content-single-monthly-subscription';
import DefaultProductContent from './product-content';
import buildTranslate from '../i18n';
import withStyles from '../util/with-styles';

class PaywallSubscriptionGroup extends React.Component {

  static propTypes = {
		ProductPricePerMonth: PropTypes.element
	};

  render() {
    var {styles, Product, ProductContentSingleMonthlySubscription, ProductContent, ProductTitle, ProductPrice, ProductPricePerMonth, ...props} = this.props;
    var translate = buildTranslate('PaywallSubscriptionGroup', this.props.lang, this.props.i18n);
    var sameGroup = true;

    // Check all subscriptions belong to the same group
    if (this.props.productsForSale) {
      this.props.productsForSale.reduce((previousProduct, product) => {
        if (previousProduct && previousProduct.group != product.group) {
          sameGroup = false;
        }
        return product;
      }, null);
      if (!sameGroup) {
        return <Text style={styles.error}>{translate('errorDifferentSubscriptionGroup')}</Text>
      }
    }
    // If everything is fine, display the paywall
    return (
			<Paywall
        {...props}
        style={styles.root}
				Product={(Product === undefined) ? DefaultProduct : Product}
        ProductContent={(ProductContent === undefined) ? DefaultProductContent : ProductContent}
        ProductContentSingleMonthlySubscription={(ProductContentSingleMonthlySubscription === undefined) ? DefaultProductContentSingleMonthlySubscription : ProductContentSingleMonthlySubscription}
        ProductTitle={(ProductTitle === undefined) ? DefaultProductTitle : ProductTitle}
        ProductPrice={(ProductPrice === undefined) ? DefaultProductPrice : ProductPrice}
        ProductPricePerMonth={(ProductPricePerMonth === undefined) ? DefaultProductPricePerMonth : ProductPricePerMonth}
			/>
    );
  }

}

const styles = StyleSheet.create({
  root: {},
  error: {
    color: 'red',
    textAlign: 'center'
  }
});

export default withStyles(styles, 'PaywallSubscriptionGroup')(PaywallSubscriptionGroup);