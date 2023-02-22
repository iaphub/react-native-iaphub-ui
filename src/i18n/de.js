export default {
	/*
	 * PayWall component
	 */
	Paywall: {
		restoreSuccessTitle: () => `Wiederherstellung`,
		restoreSuccessMessage: () => `Ihre Einkäufe wurden erfolgreich wiederhergestellt.`,
		restoreEmptyMessage: () => `Keine zu wiederherstellenden Einkäufe wurden festgestellt`,
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
		buyErrorMessagePlayStoreOutdated: () => `Das Abrechnungssystem ist derzeit nicht verfügbar. Ihre Play Store-App ist veraltet. Bitte aktualisieren Sie sie und versuchen Sie es erneut.`,
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
		playStoreOutdated: () => `Das Abrechnungssystem ist derzeit nicht verfügbar. Ihre Play Store-App ist veraltet. Bitte aktualisieren Sie sie und versuchen Sie es erneut.`,
		networkError: () => `Netzwerkfehler, bitte versuchen Sie es später erneut.`,
		unexpectedError: (opts) => `Unerwarteter Fehler, bitte versuchen Sie es später erneut (${opts.code}).`,
		startMissingError: () => `IAPHUB wurde nicht ordnungsgemäß gestartet.`,
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
		subscriptionTermsDescription: (opts) => {
			if (opts.platform == 'android') {
				return `Ihr Abonnement wird automatisch zum gleichen Preis und für die gleiche Dauer verlängert, bis Sie es jederzeit im Play Store kündigen.`;
			}
			return `Ihr Abonnement wird automatisch zum gleichen Preis und für die gleiche Dauer verlängert, bis Sie es jederzeit im App Store kündigen.`;
		},
		subscriptionTermsFreeTrialTitle: (opts) => {
			if (opts.platform == 'android') {
				return `Während des kostenlosen Testzeitraums wird keine Gebühr erhoben. Jederzeit über den Play Store kündbar.`;
			}
			return `Während des kostenlosen Testzeitraums wird keine Gebühr erhoben. Jederzeit über den App Store kündbar.`;
		},
		subscriptionTermsFreeTrialDescription: (opts) => {
			if (opts.platform == 'android') {
				return `Die Zahlung wird erst nach Ablauf Ihres kostenlosen Testzeitraums eingeleitet und Ihr Abonnement wird automatisch zum gleichen Preis und für die gleiche Dauer verlängert, bis Sie es jederzeit im Play Store kündigen.`;
			}
			return `Die Zahlung wird erst nach Ablauf Ihres kostenlosen Testzeitraums eingeleitet und Ihr Abonnement wird automatisch zum gleichen Preis und für die gleiche Dauer verlängert, bis Sie es jederzeit im App Store kündigen.`;
		}
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