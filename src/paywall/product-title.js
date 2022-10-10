import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native';
import withStyles from '../util/with-styles';
import style from '../util/style';

class ProductTitle extends Component {

  render() {
    var {product, isSelected, styles} = this.props;

    return (
      <Text style={[styles.root, style(styles.selectedRoot, isSelected)]}>
        {product.localizedTitle}
      </Text>
    );
  }

}

const styles = StyleSheet.create({
  root: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
    marginBottom: 5,
    textAlign: 'center'
  },
  // Style when the product is selected
  selectedRoot: {
    color: 'white'
  }
});

export default withStyles(styles, 'ProductTitle')(ProductTitle);