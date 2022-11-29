export default {
	/*
	 * PayWall component
	 */
	Paywall: {
		restoreSuccessTitle: () => `Restauration`,
		restoreSuccessMessage: () => `Vos achats ont été restaurés avec succès!`,
		restoreErrorTitle: () => `Restauration`,
		restoreErrorMessage: () => `La restauration de vos achats a échoué`,
		buySuccessTitle: () => `Achat effectué`,
		buySuccessMessage: () => `Votre achat a été effectué avec succès!`,
		buySuccessNextRenewalTitle: () => `Changement d'abonnement effectué`,
		buySuccessNextRenewalMessage: () => `Votre abonnement sera changé à votre prochaine date de renouvellement.`,
		buyDeferredPaymentTitle: () => `Paiement en cours...`,
		buyDeferredPaymentMessage: () => `Merci de patienter, votre paiement est en cours de validation.`,
		buyErrorTitle: () => `Erreur`,
		buyErrorMessage: () => `Votre paiement a échoué, veuillez réessayer plus tard.`,
		buyErrorMessageReceiptFailed: () => `Nous n'avons pu valider votre transaction, donnez-nous un peu de temps et nous allons réessayer de valider votre transaction au plus vite.`,
		buyErrorMessageProductNotAvailable: () => `Ce produit n'est actuellement pas disponible.`,
		buyErrorMessageAnonymousPurchaseNotAllowed: () => `Veuillez vous connecter pour pouvoir effectuer un achat.`,
		buyErrorMessageTransactionNotFound: () => `Votre paiement a échoué, veuillez réessayer plus tard.`,
		buyErrorMessageNetworkError: () => `Erreur réseau, veuillez réessayer plus tard.`,
		buyErrorMessageBillingUnavailable: () => `Les achats ne sont actuellement pas supportés sur votre téléphone, veuillez réessayer plus tard.`,
		buyErrorMessageCrossPlatformConflict: (opts) => `Il semblerait que vous ayez déjà un abonnement actif sur une autre plateforme (${opts.platform}), veuillez utiliser la même plateforme pour changer votre abonnement ou attendez que celui-ci expire.`,
		buyErrorMessageProductAlreadyPurchased: () => `Achat déjà effectué, si vous n'avez pas accès au produit veuillez restaurer vos achats.`,
		buyErrorMessageUserConflict: () => `Produit détenu par un autre utilisateur, veuillez vous connecter au compte que vous utilisiez durant l'achat ou restaurez vos achats.`,
    buyErrorMessageProductChangeNextRenewal: () => `Le changement de votre abonnement a déjà été effectué, l'abonnement sera changé à votre prochaine date de renouvellement.`,
		manageSubscriptionsErrorTitleDifferentPlatform: () => `Erreur`,
		manageSubscriptionsErrorMessageDifferentPlatform: (opts) => `Votre abonnement a été acheté sur une autre plateforme (${opts.platform}), veuillez utiliser la même plateforme pour accéder à votre abonnement`,
		ok: () => `OK`
	},
	/*
	 * PaywallSubscriptionGroup component
	 */
	PaywallSubscriptionGroup: {
		errorDifferentSubscriptionGroup: () => `Erreur: Si vous vendez plusieurs abonnements, ils doivent appartenir au même groupe.`
	},
	/*
	 * ActiveProduct component
	 */
	ActiveProduct: {
		activeProduct: () => `Vous avez un produit actif`,
		activeSubscription: () => `Vous avez un abonnement actif`,
		subscriptionPaused: () => `Vous avez un abonnement en pause`,
		subscriptionCannotBeRenewed: () => `Le renouvellement de votre abonnement a échoué. Veuillez mettre à jour votre méthode de paiement.`,
		autoRenewalActive: () => `Renouvellement automatique`,
		autoRenewalDisabled: () => `Renouvellement automatique désactivé`
	},
	/*
	 * ProductsError component
	 */
	ProductsError: {
		noProducts: () => `Aucun produit en vente, veuillez réessayer plus tard.`,
		billingUnavailable: () => `Les achats ne sont actuellement pas supportés sur votre téléphone, veuillez réessayer plus tard.`,
		networkError: () => `Erreur réseau, veuillez réessayer plus tard.`,
		tryAgain: () => `Réessayer`
	},
	/*
	 * SubscriptionDuration component
	 */
	SubscriptionDuration: {
		// day
		day: () => `jour`,
		// week
		week: () => `semaine`,
		// month
		month: () => `mois`,
		// year
		year: () => `an`,
		// ${1} day
		xDay: (opts) => `${opts.count} jour`,
		// ${3} days
		xDays: (opts) => `${opts.count} jours`,
		// ${1} week
		xWeek: (opts) => `${opts.count} semaine`,
		// ${3} weeks
		xWeeks: (opts) => `${opts.count} semaines`,
		// ${1} month
		xMonth: (opts) => `${opts.count} mois`,
		// ${3} months
		xMonths: (opts) => `${opts.count} mois`,
		// ${1} year
		xYear: (opts) => `${opts.count} an`,
		// ${1} years
		xYears: (opts) => `${opts.count} ans`
	},
	/*
	 * SubscriptionPriceDuration component
	 */
	SubscriptionPriceDuration: {
		// ${$4.99}/${month}
		cycle: (opts) => `${opts.price}/${opts.duration}`,
		// ${$4.99} for ${3 months}
		cycles: (opts) => `${opts.price} pour ${opts.duration}`
	},
	/*
	 * IntroPhasesWrapper component
	 */
	IntroPhasesWrapper: {
		title: () => `Souscrivez maintenant et profitez de:`
	},
	/*
	 * IntroPhase component
	 */
	IntroPhase: {
		// ${1 month} free trial
		freeTrial: (opts) => `Essai gratuit de ${opts.duration}`,
		// ${$4.99/month} for the first ${6 months}
		introPrice: (opts) => `${opts.priceDuration} pendant ${opts.duration}`
	},
	/*
	 * SubscriptionTerms component
	 */
	SubscriptionTerms: {
		subscriptionTermsTitle: () => `Achat récurrent. Annulez à tout moment.`,
		subscriptionTermsDescription: (opts) => `En cliquant sur Continuer, votre paiement sera effectué avec l'${opts.store} et votre abonnement se renouvellera automatiquement au même prix et à la même durée jusqu'à ce que vous l'annuliez à tout moment depuis l'${opts.store}.`
	},
	/*
	 * Restore component
	 */
	Restore: {
		restorePurchases: () => `Restaurer mes achats`
	},
	/*
	 * Buy component
	 */
	Buy: {
		continue: () => `Continuer`,
		replaceSubscription: () => `Replacer abonnement`,
		manageSubscription: () => `Gérer abonnement`
	}
}