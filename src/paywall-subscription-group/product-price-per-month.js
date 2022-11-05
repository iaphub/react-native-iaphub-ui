import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
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
    var split = formattedPrice.split("/");

    if (split.length != 2) return null;
    return (
      <View style={[styles.root, style(styles.selectedRoot, isSelected)]}>
        <Text style={[styles.text, style(styles.selectedText, isSelected), styles.price]}>{split[0]}</Text>
        <Text style={[styles.text, style(styles.selectedText, isSelected), styles.delimiter]}>/</Text>
        <Text style={[styles.text, style(styles.selectedText, isSelected), styles.duration]}>{split[1]}</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5
  },
  text: {
    fontSize: 14,
    color: '#000000'
  },
  price: {

  },
  delimiter: {

  },
  duration: {

  },
  // Style when the product is selected
  selectedRoot: {
    
  },
  selectedText: {
    color: 'white'
  }
});

export default withStyles(styles, 'ProductPricePerMonth')(ProductPricePerMonth);