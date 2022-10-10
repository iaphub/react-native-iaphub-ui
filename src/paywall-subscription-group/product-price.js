import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native';
import withStyles from '../util/with-styles';
import style from '../util/style';

class ProductPrice extends Component {

  render() {
    var {isSelected, product, styles} = this.props;

    return (
      <Text style={[styles.root, style(styles.selectedRoot, isSelected)]}>
        {product.localizedPrice}
      </Text>
    );
  }

}

const styles = StyleSheet.create({
  root: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    marginTop: 10
  },
  // Style when the product is selected
  selectedRoot: {
    color: 'white'
  }
});

export default withStyles(styles, 'ProductPrice')(ProductPrice);