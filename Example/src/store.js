import {makeAutoObservable, configure} from "mobx"
import Iaphub from 'react-native-iaphub';
import {buyWithAlert} from 'react-native-iaphub-ui';

configure({enforceActions: "never"});

class Store {

  isLoaded = false;
	productsForSale = null;
	activeProducts = null;
  err = null;

  constructor() {
    makeAutoObservable(this)
  }

	// Init IAPHUB
	async init() {
		// Init iaphub
		Iaphub.start({
			// The app id is available on the settings page of your app
			appId: "5e4890f6c61fc971cf46db4d",
			// The (client) api key is available on the settings page of your app
			apiKey: "SDp7aY220RtzZrsvRpp4BGFm6qZqNkNf",
      userId: "8888",
      // Allow anonymous purchases
      allowAnonymousPurchase: true
		});
		// Listen to user updates and refresh productsForSale/activeProducts
		Iaphub.addEventListener('onUserUpdate', async () => {
			await this.refreshProducts();
		});
		Iaphub.addEventListener('onBuyRequest', async (opts) => {
      await buyWithAlert(() => Iaphub.buy(opts.sku)); 
		});
    // Load products
    await this.refreshProducts();
    // Mark as loaded
    this.isLoaded = true;
	}

  async buy(sku) {
    await Iaphub.buy(sku);
  }

  async restore() {
    var response = await Iaphub.restore();

    return response;
  }

  async showManageSubscriptions(sku = null) {
    await Iaphub.showManageSubscriptions({sku: sku});
  }
 
	// Refresh products
	async refreshProducts() {
		try {
      this.activeProducts = [
        {
          id: "5e5198930c48ed07aa275fd9",
          type: "renewable_subscription",
          sku: "membership_1",
          group: "3e5198930c48ed07aa275fd8",
          groupName: "subscription_group_1",
          localizedTitle: "Membership 1 month",
          localizedDescription: "Become a member of the community",
          localizedPrice: "$9.99",
          price: 9.99,
          currency: "USD",
          subscriptionDuration: "P1M",
          subscriptionIntroPhases: [],
          subscriptionState: 'active',
          isSubscriptionRenewable: true,
          platform: 'android'
        }
      ];
      this.productsForSale = [
        {
          id: "5e5198930c48ed07aa275fd9",
          type: "renewable_subscription",
          sku: "membership_1",
          group: "3e5198930c48ed07aa275fd8",
          groupName: "subscription_group_1",
          localizedTitle: "Basic",
          localizedDescription: "Become a member of the community",
          localizedPrice: "$9.99",
          price: 9.99,
          currency: "USD",
          subscriptionDuration: "P1M",
          subscriptionIntroPhases: [
            {
              type: "trial",
              price: 0,
              currency: "USD",
              localizedPrice: "FREE",
              cycleDuration: "P1M",
              cycleCount: 1,
              payment: "upfront"
            },
            {
              type: "intro",
              price: 4.99,
              currency: "USD",
              localizedPrice: "$4.99",
              cycleDuration: "P1M",
              cycleCount: 3,
              payment: "as_you_go"
            }
          ]
        },
        {
          id: "5e5198930c48ed07aa275fd8",
          type: "renewable_subscription",
          sku: "membership_6months",
          group: "3e5198930c48ed07aa275fd8",
          groupName: "subscription_group_1",
          localizedTitle: "Premium",
          localizedDescription: "Become a member of the community",
          localizedPrice: "$39.99",
          price: 39.99,
          currency: "USD",
          subscriptionDuration: "P6M",
          subscriptionIntroPhases: [
            {
              type: "trial",
              price: 0,
              currency: "USD",
              localizedPrice: "FREE",
              cycleDuration: "P1M",
              cycleCount: 2,
              payment: "upfront"
            },
            {
              type: "intro",
              price: 4.99,
              currency: "USD",
              localizedPrice: "$4.99",
              cycleDuration: "P1M",
              cycleCount: 3,
              payment: "as_you_go"
            }
          ]
        },
        {
          id: "5e5198930c48ed07aa275fd7",
          type: "renewable_subscription",
          sku: "membership_12months",
          group: "3e5198930c48ed07aa275fd8",
          groupName: "subscription_group_1",
          localizedTitle: "Pro",
          localizedDescription: "Become a member of the community",
          localizedPrice: "$69.99",
          price: 69.99,
          currency: "USD",
          subscriptionDuration: "P1Y",
          subscriptionIntroPhases: [
            {
              type: "trial",
              price: 0,
              currency: "USD",
              localizedPrice: "FREE",
              cycleDuration: "P1M",
              cycleCount: 1,
              payment: "upfront"
            },
            {
              type: "intro",
              price: 4.99,
              currency: "USD",
              localizedPrice: "$4.99",
              cycleDuration: "P1M",
              cycleCount: 3,
              payment: "as_you_go"
            }
          ]
        }
      ];
		}
    catch (err) {
			this.err = err;
		}
	}

}

export default new Store();