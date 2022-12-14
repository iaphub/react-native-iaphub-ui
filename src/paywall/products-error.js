import React from 'react';
import {StyleSheet, View, Text, ActivityIndicator, Platform} from 'react-native';
import Ripple from 'react-native-material-ripple';
import withStyles from '../util/with-styles';
import buildTranslate from '../i18n';

class ProductsError extends React.Component {

	static defaultProps = {
		activityIndicatorColor: '#000000'
	};

  render() {
		var {styles, lang, i18n, activityIndicatorColor, isProductsRefreshing, err, onRefreshProducts} = this.props;
    var errCode = (err && typeof err == "object") ? err.code : err;
		var translate = buildTranslate('ProductsError', lang, i18n);
    var description = translate('noProducts');

    if (errCode == "billing_unavailable") {
      description = translate('billingUnavailable');
    }
    else if (errCode) {
      description = translate('networkError');
    }
    return (
			<View style={styles.root}>
				<Text style={styles.text}>{description}</Text>
				<View style={styles.button}>
          {!isProductsRefreshing && <Ripple onPress={() => onRefreshProducts()}>
            <Text style={styles.buttonText}>{translate('tryAgain')}</Text>
          </Ripple>}
					{isProductsRefreshing && <ActivityIndicator size="small" color={activityIndicatorColor} />}
        </View>
			</View>
		)
  }

}

const styles = StyleSheet.create({
	root: {
		margin: 10,
		padding: 15,
    paddingBottom: 10,
		justifyContent: 'center',
		alignItems: 'center',
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
	text: {
		color: 'black',
		fontWeight: 'bold',
    textAlign: 'center'
	},
	button: {
    justifyContent: 'center',
    marginTop: 5,
    paddingLeft: 10,
    paddingRight: 10,
    height: 40,
    //backgroundColor: 'red'
  },
  buttonText: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#0294FF'
  }
});

export default withStyles(styles, 'ProductsError')(ProductsError);