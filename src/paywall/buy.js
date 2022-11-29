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
    var {styles, onBuy, onShowManageSubscriptions, isBuyLoading, lang, i18n, selectedProduct, selectedActiveProductIndex, activeProducts, activityIndicatorColor} = this.props;
		if (!selectedProduct) return null;
		var translate = buildTranslate('Buy', lang, i18n);
		var buttonText = translate('continue');
		var onPress = onBuy;
		var hideButton = false;

		// Check if it is an active product selected
		if (selectedActiveProductIndex != null) {
			// If the selected active product is a non-consumable or non-renewing subscription, do not show any button
			if (["non_consumable", "subscription"].indexOf(selectedProduct.type) != -1) {
				hideButton = true;
			}
			// Otherwise show the manage subscription button
			buttonText = translate('manageSubscription');
			onPress = onShowManageSubscriptions;
		}
		// Check if it is a product for sale replacing an existing subscription
		else if (activeProducts && activeProducts.find((product) => product.group == selectedProduct.group)) {
			buttonText = translate('replaceSubscription');
		}

		if (hideButton) {
			return null;
		}
    return (
			<View style={styles.root}>
				<Ripple onPress={() => onPress && onPress(selectedProduct)}>
					<View style={styles.button}>
						{!isBuyLoading && <Text style={styles.text}>{buttonText}</Text>}
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