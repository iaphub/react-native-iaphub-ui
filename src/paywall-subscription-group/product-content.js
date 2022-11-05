import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import withStyles from '../util/with-styles';
import style from '../util/style';

class ProductMultiple extends Component {

  render() {
    var {styles, ProductTitle, ProductPrice, ProductPricePerMonth} = this.props;

    return (
      <View style={[styles.root]} >
        {ProductTitle && <ProductTitle {...this.props} styles={null}/>}
        {ProductPrice && <ProductPrice {...this.props} styles={null}/>}
        {ProductPricePerMonth && <ProductPricePerMonth {...this.props} styles={null}/>}
      </View>
    );
  }

}

const styles = StyleSheet.create({
  root: {
    flex: 1
  }
});

export default withStyles(styles, 'ProductMultiple')(ProductMultiple);