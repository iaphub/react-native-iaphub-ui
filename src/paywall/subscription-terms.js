import React from 'react';
import {StyleSheet, View, Text, Platform} from 'react-native';
import withStyles from '../util/with-styles';
import buildTranslate from '../i18n';

class SubscriptionTerms extends React.Component {

  render() {
    var {styles, lang, i18n, productsForSale} = this.props;
    var translate = buildTranslate('SubscriptionTerms', lang, i18n);

    if (!productsForSale || !productsForSale.length) return null;
    var product = productsForSale.find((product) => product.type == "renewable_subscription");
    if (!product) return null;
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

export default withStyles(styles)(SubscriptionTerms);