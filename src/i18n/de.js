export default {
	/*
	 * PayWall component
	 */
	Paywall: {
		restoreSuccessTitle: () => `Wiederherstellung`,
		restoreSuccessMessage: () => `Ihre Einkäufe wurden erfolgreich wiederhergestellt.`,
		restoreErrorTitle: () => `Wiederherstellung`,
		restoreErrorMessage: () => `Die Wiederherstellung Ihrer Einkäufe ist fehlgeschlagen.`,
		buySuccessTitle: () => `Kauf getätigt`,
		buySuccessMessage: () => `Ihr Kauf wurde erfolgreich getätigt.`,
		buySuccessNextRenewalTitle: () => `Abonnementänderung vorgenommen`,
		buySuccessNextRenewalMessage: () => `Ihr Abonnement wird am nächsten Verlängerungsdatum geändert.`,
		buyDeferredPaymentTitle: () => `Zahlung läuft`,
		buyDeferredPaymentMessage: () => `Bitte warten Sie, Ihr Abonnement wird validiert.`,
		buyErrorTitle: () => `Fehler`,
		buyErrorMessage: () => `Ihre Zahlung ist fehlgeschlagen. Bitte versuchen Sie es später.`,
		buyErrorMessageReceiptFailed: () => `Wir konnten Ihre Transaktion nicht validieren, geben Sie uns etwas Zeit und wir werden erneut versuchen, Ihre Transaktion so schnell wie mōglich zu validieren.`,
		buyErrorMessageProductNotAvailable: () => `Dieses Produkt ist derzeit nicht verfügbar.`,
		buyErrorMessageAnonymousPurchaseNotAllowed: () => `Bitte loggen Sie sich an um einen Kauf tätigen zu können.`,
		buyErrorMessageTransactionNotFound: () => `Ihre Zahlung ist fehlgeschlagen. Bitte versuchen Sie es später.`,
		buyErrorMessageNetworkError: () => `Netzwerkfehler, bitte versuchen Sie es später erneut.`,
		buyErrorMessageBillingUnavailable: () => `Einkäufe werden derzeit auf Ihrem Telefon nicht unterstützt. Bitte versuchen Sie es später.`,
		buyErrorMessageCrossPlatformConflict: (opts) => `Anscheinend haben Sie bereits ein aktives Abonnement auf einer anderen Plattform (${opts.platform}), bitte verwenden Sie dieselbe Plattform, um Ihr Abonnement zu ändern, oder warten Sie, bis es abläuft`,
		buyErrorMessageProductAlreadyPurchased: () => `Kauf bereits getätigt Wenn Sie keinen Zugriff auf das Produkt haben, stellen Sie bitte Ihre Einkäufe wieder her.`,
		buyErrorMessageUserConflict: () => `Produkt, das einem anderen Benutzer gehört, melden Sie sich bitte bei dem Konto an, das Sie während des Kaufs verwendet haben, oder stellen Sie Ihre Einkäufe wieder her.`,
		buyErrorMessageProductChangeNextRenewal: () => `Die Änderung Ihres Abonnements wurde  bereits vorgenommen, das Abonnement wird an  Ihrem nächsten Verlängerungsdatum geändert.`,
		manageSubscriptionsErrorTitleDifferentPlatform: () => `Fehler`,
		manageSubscriptionsErrorMessageDifferentPlatform: (opts) => `Ihr Abonnement wurde auf einer anderen Plattform erworben (${opts.platform}) verwenden Sie bitte dieselbe Plattform, um auf Ihr Abonnement zuzugreifen`,
		ok: () => `OK`
	},
	/*
	 * PaywallSubscriptionGroup component
	 */
	PaywallSubscriptionGroup: {
		errorDifferentSubscriptionGroup: () => `Fehler: Wenn Sie mehrere Abonnements verkaufen, müssen diese zur selben Gruppe gehören.`
	},
	/*
	 * ActiveProduct component
	 */
	ActiveProduct: {
		activeProduct: () => `Sie haben ein aktives Produkt`,
		activeSubscription: () => `Sie haben ein aktives Abonnement`,
		subscriptionPaused: () => `Sie haben ein pausiertes Abonnement`,
		subscriptionCannotBeRenewed: () => `Ihre Abonnementverlängerung ist fehlgeschlagen. Bitte aktualisieren Sie Ihre Zahlungsmethode.`,
		autoRenewalActive: () => `Automatische Erneuerung`,
		autoRenewalDisabled: () => `Automatische Verlängerung deaktiviert`
	},
	/*
	 * ProductsError component
	 */
	ProductsError: {
		noProducts: () => `Kein Produkt im Angebot, bitte versuchen Sie es später.`,
		billingUnavailable: () => `Einkäufe werden derzeit auf Ihrem Telefon nicht unterstützt. Bitte versuchen Sie es später.`,
		networkError: () => `Netzwerkfehler, bitte versuchen Sie es später erneut.`,
		tryAgain: () => `Versuchen Sie es nochmal`
	},
	/*
	 * SubscriptionDuration component
	 */
	SubscriptionDuration: {
		// day
		day: () => `Tag`,
		// week
		week: () => `Woche`,
		// month
		month: () => `Monat`,
		// year
		year: () => `Jahr`,
		// ${1} day
		xDay: (opts) => `${opts.count} Tag`,
		// ${3} days
		xDays: (opts) => `${opts.count} Tage`,
		// ${1} week
		xWeek: (opts) => `${opts.count} Woche`,
		// ${3} weeks
		xWeeks: (opts) => `${opts.count} Wochen`,
		// ${1} month
		xMonth: (opts) => `${opts.count} Monat`,
		// ${3} months
		xMonths: (opts) => `${opts.count} Monate`,
		// ${1} year
		xYear: (opts) => `${opts.count} Jahr`,
		// ${1} years
		xYears: (opts) => `${opts.count} Jahre`
	},
	/*
	 * SubscriptionPriceDuration component
	 */
	SubscriptionPriceDuration: {
		// ${$4.99}/${month}
		cycle: (opts) => `${opts.price}/${opts.duration}`,
		// ${$4.99} for ${3 months}
		cycles: (opts) => `${opts.price} für ${opts.duration}`
	},
	/*
	 * IntroPhasesWrapper component
	 */
	IntroPhasesWrapper: {
		title: () => `Abonnieren Sie jetzt und genießen Sie:`
	},
	/*
	 * IntroPhase component
	 */
	IntroPhase: {
		// ${1 month} free trial
		freeTrial: (opts) => `${opts.duration} kostenlose Testversion`,
		// ${$4.99/month} for the first ${6 months}
		introPrice: (opts) => `${opts.priceDuration} für ${opts.duration}`
	},
	/*
	 * SubscriptionTerms component
	 */
	SubscriptionTerms: {
		subscriptionTermsTitle: () => `Wiederkerender Kauf, jederzeit kündbar.`,
		subscriptionTermsDescription: (opts) => `Wenn Sie auf „Weiter“ klicken, wird Ihre Zahlung im ${opts.store} ausgeführt und Ihr Abonnement verlängert sich zum gleichen Preis und für die gleiche Dauer. Sie können es jederzeit im ${opts.store} kündigen.`
	},
	/*
	 * Restore component
	 */
	Restore: {
		restorePurchases: () => `Meine Einkäufe wiederherstellen`
	},
	/*
	 * Buy component
	 */
	Buy: {
		continue: () => `Fortsetzen`,
		replaceSubscription: () => `Abonnement ersetzen`,
		manageSubscription: () => `Abonnement verwalten`
	}
}