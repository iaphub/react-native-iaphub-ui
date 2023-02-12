import React, {Component} from 'react';
import {StyleSheet, Platform, Text, View} from 'react-native';
import withStyles from '../util/with-styles';
import style from '../util/style';
import buildTranslate from '../i18n';

class ActiveProduct extends Component {

  render() {
    var {styles, theme, lang, i18n, product, index, isSelected, onPress, TouchableProduct, ProductTitle} = this.props;
    var translate = buildTranslate('ActiveProduct', lang, i18n);
    var text = (product.type.indexOf("subscription") != -1) ? translate('activeSubscription') : translate('activeProduct');
    var showAutoRenewal = false;

    if (product.type == "renewable_subscription") {
      showAutoRenewal = true;
    }
    if (product.subscriptionState == 'paused') {
      text = translate('subscriptionPaused');
      showAutoRenewal = false;
    }
    else if (['grace_period', 'retry_period'].indexOf(product.subscriptionState) != -1) {
      text = translate('subscriptionCannotBeRenewed');
      showAutoRenewal = false;
    }
    return (
      <TouchableProduct style={styles.root} theme={theme} isSelected={isSelected} onPress={() => onPress(product, index)}>
        {product.platform == Platform.OS &&
          <View style={[styles.title, style(styles.selectedTitle, isSelected)]}>
            <ProductTitle {...this.props} styles={null}/>
          </View>
        }
        <View style={styles.description}>
          <Text style={[styles.descriptionText, style(styles.selectedDescriptionText, isSelected)]}>
            {text}
          </Text>
          {showAutoRenewal &&
            <View style={[styles.bubble, style(styles.selectedBubble, isSelected)]}>
              <Text style={[styles.bubbleText, style(styles.selectedBubbleText, isSelected)]}>
                {product.isSubscriptionRenewable ? translate('autoRenewalActive') : translate('autoRenewalDisabled')}
              </Text>
            </View>
          }
        </View>
      </TouchableProduct>
    );
  }

}

const styles = StyleSheet.create({
  root: {
    minHeight: 70,
    margin: 10,
    marginBottom: 0,
    flexDirection: 'row'
  },
  title: {
    width: 120,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.15)'
  },
  description: {
    flex: 1,
    padding: 10,
    paddinLeft: 5,
    paddinRight: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  descriptionText: {
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',
    flexWrap: 'wrap'
  },
  bubble: {
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
    borderRadius: 20,
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 5
  },
  bubbleText: {
    fontSize: 13,
    color: 'black',
  },
  // Style when the subscription is selected
  selectedDescriptionText: {
    color: 'white'
  },
  selectedBubbleText: {
    color: 'white'
  }
});

export default withStyles(styles, 'ActiveProduct')(ActiveProduct);