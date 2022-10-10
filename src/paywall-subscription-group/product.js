import React, {Component} from 'react';
import {StyleSheet, Platform} from 'react-native';
import Ripple from 'react-native-material-ripple';
import withStyles from '../util/with-styles';
import style from '../util/style';

class Product extends Component {

  render() {
    var {product, index, onProductPress, isSelected, styles, ProductTitle, ProductPrice, ProductPricePerMonth} = this.props;

    return (
      <Ripple style={[styles.root, style(styles.selectedRoot, isSelected)]} onPress={() => onProductPress(product, index)}>
        {ProductTitle && <ProductTitle {...this.props} styles={null}/>}
        {ProductPrice && <ProductPrice {...this.props} styles={null}/>}
        {ProductPricePerMonth && <ProductPricePerMonth {...this.props} styles={null}/>}
      </Ripple>
    );
  }

}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 10,
    marginHorizontal: 5,
    marginTop: 10,
    backgroundColor: 'white',
    borderRadius: 3,
    ...Platform.select({
      ios: {
        shadowOpacity: 1,
        shadowRadius: 2,
        shadowOffset: {height: 1, width: 1},
        shadowColor: '#000000'
      },
      android: {
        elevation: 2
      }
    })
  },
  // Style when the product is selected
  selectedRoot: {
    backgroundColor: '#0294FF'
  }
});

export default withStyles(styles, 'Product')(Product);