import React, {Component} from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import withStyles from '../util/with-styles';

class Loading extends Component {

  static defaultProps = {
    size: 'large',
		color: '#ffffff'
	};

  render() {
    var {isLoading, styles, size, color} = this.props;

    if (!isLoading) return null;
    return (
      <View style={styles.root}>
        <ActivityIndicator size={size} color={color} style={styles.root}/>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default withStyles(styles, 'Loading')(Loading);