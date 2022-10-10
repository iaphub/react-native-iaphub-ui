export default {
	/*
	 * PayWall component
	 */
	Paywall: {
		restoreSuccessTitle: () => `正常に復元されました`,
		restoreSuccessMessage: () => `購入が正常に復元されました。`,
		restoreErrorTitle: () => `復元に失敗しました`,
		restoreErrorMessage: () => `購入を復元できませんでした。しばらくしてからもう一度お試しください。`,
		buySuccessTitle: () => `正常に購入できました`,
		buySuccessMessage: () => `購入は正常に処理されました！`,
		buySuccessNextRenewalTitle: () => `サブスクリプションの変更が成功しました`,
		buySuccessNextRenewalMessage: () => `サブスクリプションは、次回の更新日に変更されます。`,
		buyDeferredPaymentTitle: () => `支払い保留中`,
		buyDeferredPaymentMessage: () => `お待ちください。支払いは保留中です。`,
		buyErrorTitle: () => `エラー`,
		buyErrorMessage: () => `購入を処理できませんでした。しばらくしてからもう一度お試しください。`,
		buyErrorMessageReceiptFailed: () => `トランザクションの検証で問題が発生しました。しばらくお待ちください。できるだけ早くトランザクションの検証を再試行します。`,
		buyErrorMessageProductNotAvailable: () => `この製品は現在購入できません。`,
		buyErrorMessageAnonymousPurchaseNotAllowed: () => `購入を行う前に、アカウントにログインしてください。`,
		buyErrorMessageTransactionNotFound: () => `購入を処理できませんでした。しばらくしてからもう一度お試しください。`,
		buyErrorMessageNetworkError: () => `ネットワーク エラーです。後でもう一度お試しください。`,
		buyErrorMessageBillingUnavailable: () => `お使いのデバイスでは課金システムを現在ご利用いただけません。しばらくしてからもう一度お試しください。`,
		buyErrorMessageCrossPlatformConflict: (opts) => `既に別のプラットフォーム (${opts.platform}) でサブスクリプションをお持ちのようです。同じプラットフォームを使用してサブスクリプションを変更するか、現在のサブスクリプションが期限切れになるまでお待ちください。`,
		buyErrorMessageProductAlreadyPurchased: () => `商品は既に所有されています。製品にアクセスできない場合は、購入を復元してください。`,
		buyErrorMessageUserConflict: () => `商品が別のユーザーに所有されています。最初に製品を購入したアカウントを使用するか、購入を復元してください。`,
		buyErrorMessageProductChangeNextRenewal: () => `サブスクリプションの変更は既に有効です。サブスクリプションは次の更新日に更新されます。`,
		manageSubscriptionsErrorTitleDifferentPlatform: () => `エラー`,
		manageSubscriptionsErrorMessageDifferentPlatform: (opts) => `サブスクリプションは別のプラットフォーム (${opts.platform}) で購入されました。同じプラットフォームを使用してサブスクリプションを管理してください。`,
		ok: () => `OK`
	},
	/*
	 * PaywallSubscriptionGroup component
	 */
	PaywallSubscriptionGroup: {
		errorDifferentSubscriptionGroup: () => `エラー: 複数のサブスクリプションを販売している場合、それらは同じサブスクリプション グループに属している必要があります。`
	},
	/*
	 * ActiveSubscription component
	 */
	ActiveSubscription: {
		activeSubscription: () => `アクティブなサブスクリプションがあります。`,
		subscriptionPaused: () => `サブスクリプションを一時停止しています。`,
		subscriptionCannotBeRenewed: () => `サブスクリプションの更新に失敗しました。\nお支払い方法を更新して更新してください。`,
		manage: () => `対処`,
		update: () => `アップデート`
	},
	/*
	 * ProductsEmpty component
	 */
	ProductsEmpty: {
		description: () => `販売する商品はありません。しばらくしてからもう一度お試しください。`,
		tryAgain: () => `再試行`
	},
	/*
	 * SubscriptionDuration component
	 */
	SubscriptionDuration: {
		// day
		day: () => `日`,
		// week
		week: () => `週`,
		// month
		month: () => `月`,
		// year
		year: () => `年`,
		// ${1} day
		xDay: (opts) => `${opts.count}日`,
		// ${3} days
		xDays: (opts) => `${opts.count}日`,
		// ${1} week
		xWeek: (opts) => `${opts.count}週間`,
		// ${3} weeks
		xWeeks: (opts) => `${opts.count}週間`,
		// ${1} month
		xMonth: (opts) => `${opts.count}ヶ月`,
		// ${3} months
		xMonths: (opts) => `${opts.count}ヶ月`,
		// ${1} year
		xYear: (opts) => `${opts.count}年`,
		// ${1} years
		xYears: (opts) => `${opts.count}年`
	},
	/*
	 * SubscriptionPriceDuration component
	 */
	SubscriptionPriceDuration: {
		// ${$4.99}/${month}
		cycle: (opts) => `${opts.price}/${opts.duration}`,
		// ${$4.99} for ${3 months}
		cycles: (opts) => `${opts.duration} か月間 ${opts.price}`
	},
	/*
	 * IntroPhasesWrapper component
	 */
	IntroPhasesWrapper: {
		title: () => `今すぐサブスクライブして、以下をお楽しみください:`
	},
	/*
	 * IntroPhase component
	 */
	IntroPhase: {
		// ${1 month} free trial
		freeTrial: (opts) => `${opts.duration}無料トライアル`,
		// ${$4.99/month} for the first ${6 months}
		introPrice: (opts) => `最初の${opts.duration}間は${opts.priceDuration}`,
	},
	/*
	 * SubscriptionTerms component
	 */
	SubscriptionTerms: {
		subscriptionTermsTitle: () => `定期請求。いつでもキャンセルできます。`,
		subscriptionTermsDescription: (opts) => `[続行] をタップすると、${opts.store} での支払いが請求され、サブスクリプションは、${opts.store} からいつでもキャンセルしない限り、同じ価格と期間で自動更新されます。`
	},
	/*
	 * Restore component
	 */
	Restore: {
		restorePurchases: () => `購入を復元`
	},
	/*
	 * Buy component
	 */
	Buy: {
		continue: () => `続行`
	}
}