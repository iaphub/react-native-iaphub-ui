import React, {Component} from 'react';
import {StyleSheet, Platform, Text, View} from 'react-native';
import Ripple from 'react-native-material-ripple';
import withStyles from '../util/with-styles';
import buildTranslate from '../i18n';

class ActiveSubscription extends Component {

  render() {
    var {styles, lang, i18n, activeProducts, onShowManageSubscriptions} = this.props;
    var translate = buildTranslate('ActiveSubscription', lang, i18n);

    if (!activeProducts || !activeProducts.length) return null;
    var product = activeProducts.find((product) => product.type == "renewable_subscription");
    if (!product) return null;
    var text = translate('activeSubscription');
    var button = translate('manage');

    if (product.subscriptionState == 'paused') {
      text = translate('subscriptionPaused');
    }
    else if (['grace_period', 'retry_period'].indexOf(product.subscriptionState) != -1) {
      text = translate('subscriptionCannotBeRenewed');
      button = translate('update');
    }
    return (
      <View style={styles.root}>
        <Text style={styles.text}>{text}</Text>
        <View style={styles.button}>
          <Ripple onPress={() => onShowManageSubscriptions(product)}>
            <Text style={styles.buttonText}>{button}</Text>
          </Ripple>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  root: {
    margin: 10,
    marginBottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    padding: 10,
    fontWeight: 'bold',
    flexWrap: 'wrap',
    flex: 1
  },
  button: {
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 10
  },
  buttonText: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#0294FF'
  }
});

export default withStyles(styles, 'ActiveSubscription')(ActiveSubscription);