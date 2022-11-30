import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import withStyles from '../util/with-styles';
import style from '../util/style';
import getSubscriptionDuration from '../util/get-subscription-duration';

class ProductTitle extends Component {

  render() {
    var {product, isSelected, styles, lang, i18n} = this.props;
    if (!product.subscriptionDuration) return null;
    var duration = getSubscriptionDuration(product.subscriptionDuration, 1, false, lang, i18n);
    var durationCount = duration ? duration.split(" ")[0] : "";
    var durationUnit = duration ? duration.split(" ")[1] : "";

    return (
      <View style={styles.root}>
        <Text style={[styles.count, style(styles.selectedCount, isSelected)]}>{durationCount}</Text>
        <Text style={[styles.unit, style(styles.selectedUnit, isSelected)]}>{durationUnit}</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  count: {
    fontWeight: 'bold',
    fontSize: 28,
    color: 'black',
    textAlign: 'center',
    //marginBottom: 2
  },
  unit: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
    marginBottom: 5
  },
  // Style when the product is selected
  selectedCount: {
    color: 'white'
  },
  selectedUnit: {
    color: 'white'
  }
});

export default withStyles(styles, 'ProductTitle')(ProductTitle);