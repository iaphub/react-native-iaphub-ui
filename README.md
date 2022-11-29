<a href="https://www.iaphub.com" title="IAPHUB">
  <img width=882px src="https://www.iaphub.com/img/github/github-rn-ad.png" alt="IAPHUB">
</a>
<br/>
<br/>

As you know we're on a mission to make in-app purchase as easy as possible.<br/>
The [react-native-iaphub](https://github.com/iaphub/react-native-iaphub) is already doing that pretty well but we've decided to make things even easier!

Our React Native component ***react-native-iaphub-ui*** is providing all the UI necessary to sell in-app purchases!<br/>
You'll be able to display a beautiful paywall that is highly customizable and includes (so far) the translations in 6 languages (English, Spanish, French, German, Portuguese, Japanese).

## Install component

```bash
npm install react-native-iaphub-ui --save
npm install react-native-iaphub --save // Peer dependency
```

## Initialize IAPHUB

In order to initialize the IAPHUB SDK, you must render the `IaphubDataProvider` component in the main tree on your app (it should be executed when starting the app).

```jsx
import {IaphubDataProvider} from 'react-native-iaphub-ui';

<IaphubDataProvider
  appId="5e4890f6c61fc971cf46db4d"
  apiKey="SDp7aY220RtzZrsvRpp4BGFm6qZqNkNf"
  lang="en"
  userId="9b30a87b-40c2-4435-8a0a-265145f2870f"
  allowAnonymousPurchase={false}>
    {/* App Code */}
</IaphubDataProvider>
```

#### Properties of the component:

| Prop  | Type | Description |
| :------------ |:---------------:| :-----|
| appId | `String` | The app id is available on the settings page of your app |
| apiKey | `String` | The (client) api key is available on the settings page of your app |
| lang | `String` | Language ISO code (Possible values: 'en', 'es', 'de', 'fr', 'pt', 'jp') |
| userId | `Boolean` | ***Optional***, user ID of the logged user |
| allowAnonymousPurchase | `Boolean` | ***Optional***, if you want to allow purchases when the user isn't logged in (false by default) |
| userTags | `Object` | ***Optional***, user tags |
| deviceParams | `Object` | ***Optional***, device params |
| i18n | `Object` |  ***Optional***, i18n data (if you want to provide your own translations) |
| alert | `Function` |  ***Optional***, customize alert (React native Alert.alert by default) |
| showBuySuccessAlert | `Boolean` |  ***Optional***, show alert when a purchase is successful (true by default) |
| showBuyErrorAlert | `Boolean` |  ***Optional***, show alert when a purchase fails (true by default) |
| onError | `Function` | ***Optional***, event triggered when an error occurs (***err*** provided as argument) |
| onPurchase | `Function` | ***Optional***, event triggered when a purchase is successful (***transaction*** provided as argument) |

## Access IAPHUB data

Whenever it is needed, you can access the IAPHUB data (such as the active subscriptions or the products for sale) by using the `IaphubDataConsumer` component.<br/>
The component requires a callback for its children that will be executed with the IAPHUB data.<br/>
The component will also be automatically re-rendered everytime the data is updated.

```jsx
import {IaphubDataConsumer} from 'react-native-iaphub-ui';

<IaphubDataConsumer>
  {(iaphubData) => /* Render here anything that needs the IAPHUB data */}
</IaphubDataConsumer>
```

## Render paywall

You can render at any time a beautiful paywall by using the `Paywall` component.<br/>
The component requires the IAPHUB data. You should use the `IaphubDataConsumer` component in order to get it.

```jsx
import {IaphubDataConsumer, Paywall} from 'react-native-iaphub-ui';

<IaphubDataConsumer>
  {(iaphubData) => <Paywall {...paywallProps} />}
</IaphubDataConsumer>
```

#### Preview of the component (the image and title isn't part of the component):

<img height="400px" src="https://www.iaphub.com/img/github/github-iaphub-ui.png"/>
<br/>

#### Properties of the component

| Prop  | Type | Description |
| :------------ |:---------------:| :-----|
| style | `Object` | Style |
| isLoading | `Boolean` | Display a spinner when the data is loading |
| activeProducts | `Array` | List of active products |
| productsForSale | `Array` | List of products for sale |
| err | `Object/String` | Customize the error message when the list of products for sale is empty by providing the error code  |
| lang | `String` | Language ISO code (Possible values: 'en', 'es', 'fr', 'pt', 'jp') ('en' by default) |
| i18n | `Object` | i18n data (if you want to provide your own translations) |
| defaultSelectedProductIndex | `Number` | Index of the product selected by default (0 by default) |
| theme | `Object` | Theme object to customize the styles of the components (see style customization below) |
| display | `String` | Orientation of the products for sale list (Possible values: 'horizontal', 'vertical') ('horizontal' by default) |
| alert | `Function` | Customize alert (React native Alert.alert by default) |
| showBuySuccessAlert | `Boolean` | Show alert when a purchase is successful (true by default) |
| showBuyErrorAlert | `Boolean` | Show alert when a purchase fails (true by default) |
| showRestoreSuccessAlert | `Boolean` | Show alert when a restore is successful (true by default) |
| showRestoreErrorAlert | `Boolean` | Show alert when a restore fails (true by default) |
| onBuyStart | `Function` | Event triggered when the user clicks on the buy button (***product*** provided as argument) |
| onBuyEnd | `Function` | Event triggered when the user purchase is done (***err***, ***transaction*** provided as arguments) |
| onRestoreStart | `Function` | Event triggered when the user clicks on the restore button |
| onRestoreEnd | `Function` | Event triggered when the user restore is done |
| onShowManageSubscriptions | `Function` | Event triggered when the user clicks on the button to manage the subscriptions |
| onRefreshProducts | `Function` | Event triggered when the user clicks on the button to refresh the products (when the loading previously failed) |

## Render paywall optimized for a subscription group

A [subscription group](https://www.iaphub.com/docs/getting-started/create-subscription-groups) is needed when you offer the same subscription with different durations.<br/>
Since it is a pretty common practice we've developped a separate `PaywallSubscriptionGroup` component optimized to display a subscription group.<br/>

⚠ If the data provided doesn't have one (and only) subscription group, an error message will be displayed.

```jsx
import {IaphubDataConsumer, PaywallSubscriptionGroup} from 'react-native-iaphub-ui';

<IaphubDataConsumer>
  {(iaphubData) => <PaywallSubscriptionGroup {...paywallProps} />}
</IaphubDataConsumer>
```

#### Preview of the component (the image and title isn't part of the component):

<img height="400px" src="https://www.iaphub.com/img/github/github-iaphub-ui-group.png" height="400px"/>
<br/>

#### Properties of the component

The component has the same properties as the `Paywall` component.

## Customize the paywall's style

You can customize any style of the component by using the `theme` property.<br/>
You simply have to provide an object containing the name and style of the component you're looking to customize.<br/>
You can find all the components and styles in our codebase [here](https://github.com/iaphub/react-native-iaphub-ui/tree/master/src/paywall).

```jsx
<Paywall
  theme={{
    Product: {
      root: {
        backgroundColor: 'red'
      }
    }
  }}
/>
```

## Advanced paywall customization

If customizing the style isn't enough, you can easily replace any component of the paywall.<br/>
We recommend copying the component you're looking to replace in our [codebase]((https://github.com/iaphub/react-native-iaphub-ui/tree/master/src/paywall)) first and then modify it as much as you want.<br/>
The [PaywallSubscriptionGroup](https://github.com/iaphub/react-native-iaphub-ui/tree/master/src/paywall-subscription-group) is a good example of how we've customized the `Paywall` component to optimize it for a subscription group.

#### Example modifying the product title component:

```jsx
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import withStyles from 'react-native-iaphub-ui/src/util/with-styles';
import style from 'react-native-iaphub-ui/src/util/style';

class CustomProductTitle extends Component {

  render() {
    var {product, isSelected, styles} = this.props;

    return (
      <Text style={[styles.root, style(styles.selectedRoot, isSelected)]}>
        {product.localizedTitle}
      </Text>
    );
  }

}

const styles = StyleSheet.create({
  // Root style
  root: {
    fontSize: 22,
    color: 'black',
    marginBottom: 10,
    textAlign: 'left'
  },
  // Root style when the product is selected
  selectedRoot: {
    color: 'white'
  }
});

export default withStyles(styles, 'ProductTitle')(CustomProductTitle);
```

```jsx
import CustomProductTitle from './custom-product-title';

<Paywal {...props} ProductTitle={CustomProductTitle}/>
```

## Translations

We're currently supporting 6 languages (English, Spanish, French, German, Portuguese, Japanese), if you need another language please open a new issue and we'll do our best to implement the language you've requested.