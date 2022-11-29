import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import withStyles from '../util/with-styles';

class Product extends Component {

  render() {
    var {product, index, onProductPress, isSelected, styles, TouchableProduct, ProductTitle, ProductPrice} = this.props;

    return (
      <TouchableProduct style={styles.root} isSelected={isSelected} onPress={() => onProductPress(product, index)}>
        {ProductTitle && <ProductTitle {...this.props} styles={null} style={{marginBottom: 5}}/>}
        {ProductPrice && <ProductPrice {...this.props} styles={null}/>}
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