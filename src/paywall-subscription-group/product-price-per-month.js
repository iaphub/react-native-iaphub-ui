import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native';
import withStyles from '../util/with-styles';
import style from '../util/style';
import getSubscriptionPriceDuration from '../util/get-subscription-price-duration';

class ProductPricePerMonth extends Component {

  render() {
    var {product, isSelected, styles, lang, i18n} = this.props;

    if (!product.subscriptionDuration) return null;

    var durations = {"P7D": 0.25, "P1W": 0.25, "P1M": 1, "P3M": 3, "P6M": 6, "P1Y": 12};
    var price = Math.round((product.price / durations[product.subscriptionDuration]) * 100) / 100;
    var currency = product.localizedPrice.match(/[^0-9.]+/);
    var localizedPrice = isNaN(product.localizedPrice) ? currency + price : price + currency;
    var formattedPrice = getSubscriptionPriceDuration(localizedPrice, "P1M", true, lang, i18n);

    return (
      <Text style={[styles.root, style(styles.selectedRoot, isSelected)]}>
        {formattedPrice}
      </Text>
    );
  }

}

const styles = StyleSheet.create({
  root: {
    fontSize: 14,
    color: '#000000',
    textAlign: 'center',
    marginTop: 5
  },
  // Style when the product is selected
  selectedRoot: {
    color: 'white'
  }
});

export default withStyles(styles, 'ProductPricePerMonth')(ProductPricePerMonth);