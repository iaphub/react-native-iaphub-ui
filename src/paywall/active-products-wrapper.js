import React from 'react';
import {StyleSheet, View} from 'react-native';
import withStyles from '../util/with-styles';

class ActiveProductsWrapper extends React.Component {

  render() {
    var {ActiveProduct, activeProducts, selectedActiveProductIndex, onProductPress, style, styles, ...props} = this.props;

    if (!ActiveProduct || !activeProducts) return null;
    return (
      <View>
        {activeProducts.map((product, index) => (
          <ActiveProduct
            {...this.state}
            {...props}
            isSelected={index == selectedActiveProductIndex}
            product={product}
            index={index}
            key={product.id}
            onPress={onProductPress}/>
        ))}
      </View>
    )
  }

}

const styles = StyleSheet.create({
  root: {
    
  }
});

export default withStyles(styles, 'ActiveProductsWrapper')(ActiveProductsWrapper);