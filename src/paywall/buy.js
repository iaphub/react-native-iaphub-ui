import React from 'react';
import {StyleSheet, View, Text, ActivityIndicator, Platform} from 'react-native';
import Ripple from 'react-native-material-ripple';
import withStyles from '../util/with-styles';
import buildTranslate from '../i18n';

class Buy extends React.Component {

	static defaultProps = {
		activityIndicatorColor: '#ffffff'
	};

  render() {
    var {styles, onBuy, isBuyLoading, lang, i18n, activeProduct, activityIndicatorColor} = this.props;
    var translate = buildTranslate('Buy', lang, i18n);

		if (!activeProduct) return null;
    return (
			<View style={styles.root}>
				<Ripple onPress={() => onBuy && onBuy()}>
					<View style={styles.button}>
						{!isBuyLoading && <Text style={styles.text}>{translate('continue')}</Text>}
						{isBuyLoading && <ActivityIndicator size="small" color={activityIndicatorColor} />}
					</View>
				</Ripple>
			</View>
		)
  }

}

const styles = StyleSheet.create({
	root: {
		flex: 1,
		minHeight: 60,
		justifyContent: 'flex-end'
	},
	button: {
		margin: 10,
    padding: 10,
		borderRadius: 40,
		backgroundColor: '#0294FF',
		alignItems: 'center',
		justifyContent: 'center',
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
	text: {
		fontSize: 16,
		color: 'white',
		textTransform: 'uppercase'
	}
});

export default withStyles(styles, 'Buy')(Buy);