import React from 'react';
import PropTypes from 'prop-types';
import Iaphub from 'react-native-iaphub';
import isEqual from 'lodash.isequal';
import buyWithAlert from '../util/buy-with-alert';

export default class IaphubData extends React.Component {

  static propTypes = {
    appId: PropTypes.string.isRequired,
    apiKey: PropTypes.string.isRequired,
		lang: PropTypes.string.isRequired,
    userId: PropTypes.string,
    userTags: PropTypes.object,
    deviceParams: PropTypes.object,
    allowAnonymousPurchase: PropTypes.bool,
    onError: PropTypes.func,
    onPurchase: PropTypes.func
	};

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      activeProducts: [],
      productsForSale: []
    };
  }

  componentDidMount() {
    this.start(this.props);
  }

  componentDidUpdate(prevProps) {
    // Update user id
    if (this.props.userId != prevProps.userId) {
      // Login
      if (this.props.userId) {
        this.login(this.props.userId);
      }
      // Logout
      else if (prevProps.userId) {
        this.logout();
      }
    }
    // Update user tags
    if (!isEqual(this.props.userTags, prevProps.userTags)) {
      this.setUserTags(this.props.userTags);
    }
    // Update device params
    if (!isEqual(this.props.deviceParams, prevProps.deviceParams)) {
      this.setDeviceParams(this.props.deviceParams);
    }
  }

  componentWillUnmount() {
    Iaphub.removeEventListener(this.onErrorListener);
    Iaphub.removeEventListener(this.buyRequestListener);
    Iaphub.removeEventListener(this.userUpdateListener);
  }

  async start(props) {
    try {
      await Iaphub.start({
        appId: props.appId,
        apiKey: props.apiKey,
        userId: props.userId,
        allowAnonymousPurchase: props.allowAnonymousPurchase
      });
      // Listen for errors
      this.onErrorListener = Iaphub.addEventListener('onError', (err) => {
        if (typeof this.props.onError == 'function') {
          this.props.onError(err);
        }
      });
      // Listen for buy request
      this.buyRequestListener = Iaphub.addEventListener('onBuyRequest', async (opts) => {
        try {
          var transaction = await buyWithAlert(() => Iaphub.buy(opts.sku), this.props.lang);
          this.onPurchase(transaction);
        }
        catch(err) {
          // No need to do anything here
        }
      });
      // Listen for user updates
      this.userUpdateListener = Iaphub.addEventListener('onUserUpdate', () => {
        this.refreshProducts();
      });
      // Set tags if defined
      if (props.userTags) {
        await Iaphub.setUserTags(props.userTags);
      }
      // Set device params if defined
      if (props.deviceParams) {
        await Iaphub.setDeviceParams(props.deviceParams);
      }
      // Refresh products
      await this.refreshProducts();
    }
    catch(err) {
      this.setState({isLoading: false, err: err});
    }
  }

  login = async (userId) => {
    try {
      await Iaphub.login(userId);
      await this.refreshProducts();
    }
    catch(err) {
      // No need to do anything here
    }
  }

  logout = async () => {
    try {
      await Iaphub.logout();
      await this.refreshProducts();
    }
    catch(err) {
      // No need to do anything here
    }
  }

  setUserTags = async (tags) => {
    try {
      await Iaphub.setUserTags(tags);
      await this.refreshProducts();
    }
    catch(err) {
      // No need to do anything here
    }
  }

  setDeviceParams = async (params) => {
    try {
      await Iaphub.setDeviceParams(params);
      await this.refreshProducts();
    }
    catch(err) {
      // No need to do anything here
    }
  }

  manageSubscriptions = async () => {
    try {
      await Iaphub.showManageSubscriptions();
    }
    catch(err) {
      // No need to do anything here
    }
  }

  onPurchase = (transaction) => {
    if (typeof this.props.onPurchase == 'function') {
      this.props.onPurchase(transaction);
    }
  }

  onBuyStart = async (product) => {
    var transaction = await Iaphub.buy(product.sku);

    return transaction;
  }

  onBuyEnd = (err, transaction) => {
    if (transaction != null) {
      this.onPurchase(transaction);
    }
  }

  onRestoreStart = async () => {
    await Iaphub.restore();
  }

  refreshProducts = async () => {
    try {
      var products = await Iaphub.getProducts({includeSubscriptionStates: ['retry_period', 'paused']});
      this.setState({activeProducts: products.activeProducts, productsForSale: products.productsForSale, isLoading: false, err: null});
    }
    catch(err) {
      this.setState({isLoading: false, err: err});
    }
  }

  render() {
    var {children, lang} = this.props;
    var {isLoading, err, activeProducts, productsForSale} = this.state;

    return (typeof children == 'function') ? children({
      lang,
      isLoading,
      err,
      activeProducts,
      productsForSale,
      onBuyStart: this.onBuyStart,
      onBuyEnd: this.onBuyEnd,
      onRestoreStart: this.onRestoreStart,
      onRefreshProducts: this.refreshProducts,
      onShowManageSubscriptions: this.manageSubscriptions
    }) : null;
  }

}