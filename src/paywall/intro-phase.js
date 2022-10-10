import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import withStyles from '../util/with-styles';
import buildTranslate from '../i18n';
import getSubscriptionDuration from '../util/get-subscription-duration';
import getSubscriptionPriceDuration from '../util/get-subscription-price-duration';

class IntroPhase extends React.Component {

  getPhaseText() {
    var {introPhase, lang, i18n} = this.props;
    var translate = buildTranslate('IntroPhase', lang, i18n);

    if (introPhase.type == 'trial') {
      return translate('freeTrial', {duration: getSubscriptionDuration(introPhase.cycleDuration, introPhase.cycleCount, false, lang, i18n)});
    }
    else if (introPhase.type == 'intro') {
      return translate('introPrice', {
        priceDuration: getSubscriptionPriceDuration(introPhase.localizedPrice, introPhase.cycleDuration, true, lang, i18n),
        duration: getSubscriptionDuration(introPhase.cycleDuration, introPhase.cycleCount, true, lang, i18n)
      });
    }
  }

  render() {
    var {styles, key, introPhase} = this.props;

    if (!introPhase) return null;
    return (
      <View style={styles.root} key={key}>
        <Text style={styles.text}>{this.getPhaseText()}</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  root: {
    padding: 10,
    backgroundColor: '#D9485A',
    borderRadius: 3,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 10,
    maxWidth: 170,
    justifyContent: 'center'
  },
  text: {
    color: 'white',
    fontSize: 11,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center'
  }
});

export default withStyles(styles, 'IntroPhase')(IntroPhase);