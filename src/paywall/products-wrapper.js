import React from 'react';
import {StyleSheet, View} from 'react-native';
import withStyles from '../util/with-styles';

class ProductsWrapper extends React.Component {

  renderProducts() {
    var {styles, productsForSale, Product, selectedProductForSaleIndex, ...props} = this.props;

    return productsForSale.map((product, index) => (
      <Product
        key={product.id}
        product={product}
        index={index}
        isSelected={index == selectedProductForSaleIndex}
        productsForSale={productsForSale}
        {...props}/>
    ))
  }

  renderVertical() {
    var {styles, productsForSale, Product, selectedIndex, ...props} = this.props;

    return (
      <View style={styles.root}>
				{this.renderProducts()}
      </View>
    );
  }

  renderHorizontal() {
    var {styles, productsForSale, Product, selectedIndex, ...props} = this.props;

    return (
      <View style={[styles.root, styles.rootHorizontal]}>
        {this.renderProducts()}
      </View>
    );
  }

  render() {
    var {display} = this.props;

    return (display == 'horizontal') ? this.renderHorizontal() : this.renderVertical();
  }

}

const styles = StyleSheet.create({
  root: {
    paddingLeft: 5,
    paddingRight: 5
  },
  rootHorizontal: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  }
});

export default withStyles(styles, 'ProductsWrapper')(ProductsWrapper);