import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native';
import withStyles from '../util/with-styles';
import style from '../util/style';
import getSubscriptionPriceDuration from '../util/get-subscription-price-duration';

class ProductPrice extends Component {

  renderText() {
    var {product, lang, i18n} = this.props;

    if (product.type == "renewable_subscription") {
      return getSubscriptionPriceDuration(product.localizedPrice, product.subscriptionDuration, true, lang, i18n);
    }
    return product.localizedPrice;
  }

  render() {
    var {isSelected, styles} = this.props;

    return (
      <Text style={[styles.root, style(styles.selectedRoot, isSelected)]}>
        {this.renderText()}
      </Text>
    );
  }

}

const styles = StyleSheet.create({
  root: {
    fontSize: 14,
    color: '#000000',
    textAlign: 'center'
  },
  // Style when the product is selected
  selectedRoot: {
    color: 'white'
  }
});

export default withStyles(styles, 'ProductPrice')(ProductPrice);