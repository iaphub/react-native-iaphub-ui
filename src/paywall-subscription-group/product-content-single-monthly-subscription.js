import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import withStyles from '../util/with-styles';
import style from '../util/style';

class ProductSingle extends Component {

  render() {
    var {styles, ProductPricePerMonth} = this.props;

    return (
      <View style={[styles.root]} >
        {ProductPricePerMonth && <ProductPricePerMonth {...this.props} styles={{
          price: {fontSize: 22, fontWeight: 'bold'},
          delimiter: {fontSize: 18, marginLeft: 4, marginRight: 4},
          duration: {fontSize: 18}
        }}/>}
      </View>
    );
  }

}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    height: 70,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default withStyles(styles, 'ProductSingle')(ProductSingle);