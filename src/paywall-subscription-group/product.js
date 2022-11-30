import React, {Component} from 'react';
import {StyleSheet, Platform} from 'react-native';
import withStyles from '../util/with-styles';

class Product extends Component {

  render() {
    var {product, index, onProductPress, styles, TouchableProduct, ProductContentSingleMonthlySubscription, ProductContent, productsForSale} = this.props;
    var isSingle = productsForSale.length == 1 && product.subscriptionDuration == "P1M";

    return (
      <TouchableProduct {...this.props} styles={null} style={styles.root} onPress={() => onProductPress(product, index)}>
        {isSingle ? <ProductContentSingleMonthlySubscription {...this.props} styles={null}/> : <ProductContent {...this.props} styles={null}/>}
      </TouchableProduct>
    );
  }

}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 10,
    marginHorizontal: 5,
    marginTop: 10
  }
});

export default withStyles(styles, 'Product')(Product);