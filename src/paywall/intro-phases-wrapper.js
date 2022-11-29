import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import withStyles from '../util/with-styles';
import buildTranslate from '../i18n';

class IntroPhasesWrapper extends React.Component {

  render() {
    var {styles, selectedProduct, lang, i18n, IntroPhase} = this.props;
    var translate = buildTranslate('IntroPhasesWrapper', lang, i18n);

    if (!selectedProduct || !selectedProduct.subscriptionIntroPhases || !selectedProduct.subscriptionIntroPhases.length) return null;
    return (
      <View style={styles.root}>
        <Text style={styles.title}>{translate('title')}</Text>
        <View style={styles.phases}>
          {selectedProduct.subscriptionIntroPhases.map((phase, index) => (
            <IntroPhase {...this.props} introPhase={phase} key={index} styles={null} style={null}/>
          ))}
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  root: {
    paddingTop: 10
  },
  title: {
    color: 'white',
    fontSize: 14,
    marginLeft: 10,
    marginBottom: 5,
    marginTop: 5
  },
  phases: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  }
});

export default withStyles(styles, 'IntroPhasesWrapper')(IntroPhasesWrapper);