import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import withStyles from '../util/with-styles';
import buildTranslate from '../i18n';

class Restore extends React.Component {

  render() {
    var {styles, lang, i18n, isRestoreLoading, onRestore} = this.props;
    var translate = buildTranslate('Restore', lang, i18n);

    return (
			<View style={styles.root}>
        <TouchableOpacity style={styles.content} onPress={onRestore}>
				  <Text style={styles.text}>{translate('restorePurchases')}</Text>
          {isRestoreLoading && <ActivityIndicator size="small" style={styles.activityIndicator} color={styles.activityIndicator[styles.activityIndicator.length - 1].color} />}
        </TouchableOpacity>
			</View>
		)
  }

}

const styles = StyleSheet.create({
	root: {
    padding: 20
	},
  content: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 13,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  },
  activityIndicator: {
    marginLeft: 5,
    color: '#ffffff'
  }
});

export default withStyles(styles, 'Restore')(Restore);