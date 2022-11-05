import React from 'react';
import {StyleSheet, Text, View, Image, SafeAreaView, ActivityIndicator, StatusBar} from 'react-native';
import {Observer} from 'mobx-react';
import {PaywallSubscriptionGroup} from 'react-native-iaphub-ui';
import store from './store';

class App extends React.Component {

  componentDidMount() {
    store.init();
  }

  renderPaywall() {
    return (
      <PaywallSubscriptionGroup
        lang="en"
        defaultSelectedProductIndex={1}
        activeProducts={store.activeProducts}
        productsForSale={store.productsForSale}
        onBuyStart={(product) => store.buy(product.sku)}
        onRestoreStart={() => store.restore()}
        showManageSubscriptions={(product) => store.showManageSubscriptions(product.sku)}
        onRefreshProducts={() => store.refreshProducts()}
        />
    )
  }

  renderContent = () => {
    return (
      <View style={styles.root}>
        <SafeAreaView style={{flex: 1}}>
          <StatusBar barStyle="light-content" />
          <Text style={styles.title}>Get membership</Text>
          <View style={styles.imageWrapper}>
            <Image source={require('../gift.png')} style={styles.image}/>
          </View>
          {store.isLoaded && this.renderPaywall()}
          {!store.isLoaded && <ActivityIndicator size="large" color="#ffffff"/>}
        </SafeAreaView>
      </View>
    );
  }

  render() {
    return (
      <Observer>
        {this.renderContent}
      </Observer>
    )
  }

}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#111566'
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
