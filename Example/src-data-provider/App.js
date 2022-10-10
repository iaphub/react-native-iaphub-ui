import React from 'react';
import {StyleSheet, Text, View, Image, SafeAreaView} from 'react-native';
import {IaphubDataProvider, IaphubDataConsumer, PaywallSubscriptionGroup} from 'react-native-iaphub-ui';

class App extends React.Component {

  renderPaywall() {
    return (
      <View style={{flex: 1}}>
        <Text style={styles.title}>Get membership</Text>
        <View style={styles.imageWrapper}>
          <Image source={require('../gift.png')} style={styles.image}/>
        </View>
        <IaphubDataConsumer>
          {(paywallProps) => <PaywallSubscriptionGroup style={styles.paywall} {...paywallProps} />}
        </IaphubDataConsumer>
      </View>
    )
  }

  onError(err) {
    console.log("IAPHUB Error: ", err);
  }

  onPurchase(transaction) {
    console.log("IAPHUB transaction: ", transaction);
  }

  render() {
    // Render IaphubDataProvider at the root of your app on app start
    return (
      <View style={styles.root}>
        <SafeAreaView style={{flex: 1}}>
          <IaphubDataProvider
            appId="5e4890f6c61fc971cf46db4d"
            apiKey="SDp7aY220RtzZrsvRpp4BGFm6qZqNkNf"
            userId="42"
            lang="en"
            allowAnonymousPurchase={true}
            onError={this.onError}
            onPurchase={this.onPurchase}>
              {this.renderPaywall()}
          </IaphubDataProvider>
        </SafeAreaView>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#111566'
  },
  paywall: {
    flex: 1
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
    color: 'white',
    textTransform: 'uppercase'
  },
  imageWrapper: {
    alignItems: 'center'
  },
  image: {
    width: 250,
    height: 198,
    marginBottom: 20
  }
});

export default App;