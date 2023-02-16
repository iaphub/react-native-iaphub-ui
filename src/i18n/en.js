export default {
	/*
	 * PayWall component
	 */
	Paywall: {
		restoreSuccessTitle: () => `Restore successful`,
		restoreSuccessMessage: () => `Your purchases have been restored successfully!`,
		restoreEmptyMessage: () => `No purchases to restore have been detected`,
		restoreErrorTitle: () => `Restore failed`,
		restoreErrorMessage: () => `We were not able to restore your purchases, please try again later.`,
		buySuccessTitle: () => `Purchase successful`,
		buySuccessMessage: () => `Your purchase has been processed successfully!`,
		buySuccessNextRenewalTitle: () => `Subscription change successful`,
		buySuccessNextRenewalMessage: () => `Your subscription will be changed on the next renewal date.`,
		buyDeferredPaymentTitle: () => `Payment pending`,
		buyDeferredPaymentMessage: () => `Please wait, the payment is pending.`,
		buyErrorTitle: () => `Error`,
		buyErrorMessage: () => `We were not able to process your purchase, please try again later.`,
		buyErrorMessageReceiptFailed: () => `We're having trouble validating your transaction, give us some time, we'll retry to validate your transaction as soon as possible.`,
		buyErrorMessageProductNotAvailable: () => `The product is currently not available for purchase.`,
		buyErrorMessageAnonymousPurchaseNotAllowed: () => `Please log in to your account before making any purchase.`,
		buyErrorMessageTransactionNotFound: () => `We were not able to process your purchase, please try again later.`,
		buyErrorMessageNetworkError: () => `Network error, please try again later.`,
		buyErrorMessageBillingUnavailable: () => `Billing system currently unavailable on your device, please try again later.`,
		buyErrorMessageCrossPlatformConflict: (opts) => `It seems like you already have a subscription on a different platform (${opts.platform}), please use the same platform to change your subscription or wait for your current subscription to expire.`,
		buyErrorMessageProductAlreadyPurchased: () => `Product already owned, if you do not have access to the product please restore your purchases.`,
		buyErrorMessageUserConflict: () => `Product owned by a different user, please use the account with which you originally bought the product or restore your purchases.`,
		buyErrorMessageProductChangeNextRenewal: () => `Subscription change already effective, your subscription will be updated on the next renewal date.`,
		manageSubscriptionsErrorTitleDifferentPlatform: () => `Error`,
		manageSubscriptionsErrorMessageDifferentPlatform: (opts) => `Your subscription has been purchased on a different platform (${opts.platform}), please use the same platform to manage your subscription.`,
		ok: () => `OK`
	},
	/*
	 * PaywallSubscriptionGroup component
	 */
	PaywallSubscriptionGroup: {
		errorDifferentSubscriptionGroup: () => `Error: If you're selling multiple subscriptions, they must belong to the same subscription group.`
	},
	/*
	 * ActiveProduct component
	 */
	ActiveProduct: {
		activeProduct: () => `You have an active product`,
		activeSubscription: () => `You have an active subscription`,
		subscriptionPaused: () => `You have a paused subscription`,
		subscriptionCannotBeRenewed: () => `The renewal of your subscription failed. Update your payment method to renew.`,
		autoRenewalActive: () => `Auto-renewal active`,
		autoRenewalDisabled: () => `Auto-renewal disabled`
	},
	/*
	 * ProductsError component
	 */
	ProductsError: {
		noProducts: () => `No products for sale, please try again later.`,
		billingUnavailable: () => `Billing system currently unavailable on your device, please try again later.`,
		playStoreOutdated: () => `The billing system is currently unavailable. Your Play Store app is outdated, please update it and try again.`,
		networkError: () => `Network error, please try again later.`,
		tryAgain: () => `Try again`
	},
	/*
	 * SubscriptionDuration component
	 */
	SubscriptionDuration: {
		// day
		day: () => `day`,
		// week
		week: () => `week`,
		// month
		month: () => `month`,
		// year
		year: () => `year`,
		// ${1} day
		xDay: (opts) => `${opts.count} day`,
		// ${3} days
		xDays: (opts) => `${opts.count} days`,
		// ${1} week
		xWeek: (opts) => `${opts.count} week`,
		// ${3} weeks
		xWeeks: (opts) => `${opts.count} weeks`,
		// ${1} month
		xMonth: (opts) => `${opts.count} month`,
		// ${3} months
		xMonths: (opts) => `${opts.count} months`,
		// ${1} year
		xYear: (opts) => `${opts.count} year`,
		// ${1} years
		xYears: (opts) => `${opts.count} years`
	},
	/*
	 * SubscriptionPriceDuration component
	 */
	SubscriptionPriceDuration: {
		// ${$4.99}/${month}
		cycle: (opts) => `${opts.price}/${opts.duration}`,
		// ${$4.99} for ${3 months}
		cycles: (opts) => `${opts.price} for ${opts.duration}`
	},
	/*
	 * IntroPhasesWrapper component
	 */
	IntroPhasesWrapper: {
		title: () => `Subscribe now and enjoy the following:`
	},
	/*
	 * IntroPhase component
	 */
	IntroPhase: {
		// ${1 month} free trial
		freeTrial: (opts) => `${opts.duration} free trial`,
		// ${$4.99/month} for the first ${6 months}
		introPrice: (opts) => `${opts.priceDuration} for the first ${opts.duration}`
	},
	/*
	 * SubscriptionTerms component
	 */
	SubscriptionTerms: {
		subscriptionTermsTitle: () => `Recurring billing. Cancel anytime.`,
		subscriptionTermsDescription: (opts) => {
			if (opts.platform == 'android') {
				return `Your subscription will auto-renew for the same price and duration until you cancel at any time from the Play Store.`;
			}
			return `Your subscription will auto-renew for the same price and duration until you cancel at any time from the App Store.`;
		},
		subscriptionTermsFreeTrialTitle: (opts) => {
			if (opts.platform == 'android') {
				return `You won't be charged during the free trial period.\nCancel at any time from the Play Store.`;
			}
			return `You won't be charged during the free trial period.\nCancel at any time from the App Store.`;
		},
		subscriptionTermsFreeTrialDescription: (opts) => {
			if (opts.platform == 'android') {
				return `The payment will only be initiated after your free trial period ends and your subscription will auto-renew for the same price and duration until you cancel at any time from the Play Store.`;
			}
			return `The payment will only be initiated after your free trial period ends and your subscription will auto-renew for the same price and duration until you cancel at any time from the App Store.`;
		}
	},
	/*
	 * Restore component
	 */
	Restore: {
		restorePurchases: () => `Restore purchases`
	},
	/*
	 * Buy component
	 */
	Buy: {
		continue: () => `Continue`,
		replaceSubscription: () => `Replace subscription`,
		manageSubscription: () => `Manage subscription`
	}
}