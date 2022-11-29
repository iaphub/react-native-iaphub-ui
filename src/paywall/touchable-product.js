import React, {Component} from 'react';
import {StyleSheet, Platform} from 'react-native';
import Ripple from 'react-native-material-ripple';
import withStyles from '../util/with-styles';
import style from '../util/style';

class TouchableProduct extends Component {

  render() {
    var {onPress, isSelected, styles, children} = this.props;

    return (
      <Ripple style={[styles.root, style(styles.selectedRoot, isSelected)]} onPress={onPress}>
        {children}
      </Ripple>
    );
  }

}

const styles = StyleSheet.create({
  root: {
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

export default withStyles(styles, 'TouchableProduct')(TouchableProduct);