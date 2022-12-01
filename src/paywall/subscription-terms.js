import React from 'react';
import {StyleSheet, View, Text, Platform} from 'react-native';
import withStyles from '../util/with-styles';
import buildTranslate from '../i18n';

class SubscriptionTerms extends React.Component {

  render() {
    var {styles, lang, i18n, selectedProduct, activeProducts, selectedActiveProductIndex} = this.props;
    var translate = buildTranslate('SubscriptionTerms', lang, i18n);

    if (!selectedProduct) return null;
    // Do not display the terms if the selected product isn't a renewable subscription
    if (selectedProduct.type != "renewable_subscription") return null;
    // Do not display the terms if it is for an active product
    if (selectedActiveProductIndex != null) return null;
    // Do not display the terms if the selected product is a subscription to be replaced
    if (activeProducts.find((product) => product.group == selectedProduct.group)) return null;

    var store = (Platform.OS == 'android') ? "Play Store" : "App Store";
    var title = translate('subscriptionTermsTitle', {platform: Platform.OS, store: store});
    var description = translate('subscriptionTermsDescription', {platform: Platform.OS, store: store});

    return (
			<View style={styles.root}>
				{(title && title != "") && <Text style={styles.title}>{title}</Text>}
        {(description && description != "") && <Text style={styles.description}>{description}</Text>}
			</View>
		)
  }

}

const styles = StyleSheet.create({
	root: {
    padding: 10,
    paddingBottom: 0,
    marginTop: 5
	},
  title: {
    fontSize: 13,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 2,
    textAlign: 'center'
  },
  description: {
    fontSize: 13,
    color: 'white',
    textAlign: 'center'
  }
});

export default withStyles(styles, 'SubscriptionTerms')(SubscriptionTerms);