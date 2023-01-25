export default {
	/*
	 * PayWall component
	 */
	Paywall: {
		restoreSuccessTitle: () => `Ripristino riuscito`,
    restoreSuccessMessage: () => `I tuoi acquisti sono stati ripristinati con successo!`,
    restoreEmptyMessage: () => `Nessun acquisto da ripristinare rilevato`,
    restoreErrorTitle: () => `Ripristino non riuscito`,
    restoreErrorMessage: () => `Non siamo riusciti a ripristinare i tuoi acquisti, riprova più tardi.`,
    buySuccessTitle: () => `Acquisto riuscito`,
    buySuccessMessage: () => `Il tuo acquisto è stato elaborato con successo!`,
    buySuccessNextRenewalTitle: () => `Cambio abbonamento riuscito`,
    buySuccessNextRenewalMessage: () => `Il tuo abbonamento verrà cambiato alla prossima data di rinnovo.`,
    buyDeferredPaymentTitle: () => `Pagamento in sospeso`,
    buyDeferredPaymentMessage: () => `Attendi, il pagamento è in sospeso.`,
    buyErrorTitle: () => `Errore`,
    buyErrorMessage: () => `Non siamo riusciti a elaborare il tuo acquisto, riprova più tardi.`,
    buyErrorMessageReceiptFailed: () => `Stiamo avendo problemi a convalidare la tua transazione, dacci un po' di tempo, riproveremo a convalidare la tua transazione il prima possibile.`,
    buyErrorMessageProductNotAvailable: () => `Il prodotto non è attualmente disponibile per l'acquisto.`,
    buyErrorMessageAnonymousPurchaseNotAllowed: () => `Effettua il login al tuo account prima di effettuare qualsiasi acquisto.`,
    buyErrorMessageTransactionNotFound: () => `Non siamo riusciti a elaborare il tuo acquisto, riprova più tardi.`,
    buyErrorMessageNetworkError: () => `Errore di rete, riprova più tardi.`,
    buyErrorMessageBillingUnavailable: () => `Sistema di fatturazione attualmente non disponibile sul tuo dispositivo, riprova più tardi.`,
    buyErrorMessageCrossPlatformConflict: (opts) => `Sembra che tu abbia già un abbonamento su una piattaforma diversa (${opts.platform}), utilizza la stessa piattaforma per cambiare il tuo abbonamento o attendi che il tuo abbonamento attuale scada.`,
    buyErrorMessageProductAlreadyPurchased: () => `Prodotto già posseduto, se non hai accesso al prodotto ripristina i tuoi acquisti.`,
    buyErrorMessageUserConflict: () => `Prodotto posseduto da un utente diverso, utilizzare l'account con cui è stato acquistato originariamente o ripristinare gli acquisti.`,
    buyErrorMessageProductChangeNextRenewal: () => `Cambio abbonamento già effettivo, il tuo abbonamento verrà aggiornato alla prossima data di rinnovo.`,
    manageSubscriptionsErrorTitleDifferentPlatform: () => `Errore`,
    manageSubscriptionsErrorMessageDifferentPlatform: (opts) => `Il tuo abbonamento è stato acquistato su una piattaforma diversa (${opts.platform}), utilizzare la stessa piattaforma per gestire il tuo abbonamento.`,
    ok: () => `OK`
	},
	/*
	 * PaywallSubscriptionGroup component
	 */
	PaywallSubscriptionGroup: {
		errorDifferentSubscriptionGroup: () => `Errore: Se si vendono più abbonamenti, devono appartenere allo stesso gruppo di abbonamenti.`
	},
	/*
	 * ActiveProduct component
	 */
	ActiveProduct: {
    activeProduct: () => `Hai un prodotto attivo`,
    activeSubscription: () => `Hai un abbonamento attivo`,
    subscriptionPaused: () => `Hai un abbonamento in pausa`,
    subscriptionCannotBeRenewed: () => `Il rinnovo dell'abbonamento non è riuscito. Aggiorna il metodo di pagamento per rinnovare.`,
    autoRenewalActive: () => `Rinnovo automatico attivo`,
    autoRenewalDisabled: () => `Rinnovo automatico disattivato`
	},
	/*
	 * ProductsError component
	 */
	ProductsError: {
    noProducts: () => `Nessun prodotto in vendita, riprova più tardi.`,
    billingUnavailable: () => `Sistema di fatturazione attualmente non disponibile sul tuo dispositivo, riprova più tardi.`,
    networkError: () => `Errore di rete, riprova più tardi.`,
    tryAgain: () => `Riprova`
	},
	/*
	 * SubscriptionDuration component
	 */
	SubscriptionDuration: {
    // day
    day: () => `giorno`,
    // week
    week: () => `settimana`,
    // month
    month: () => `mese`,
    // year
    year: () => `anno`,
    // ${1} day
    xDay: (opts) => `${opts.count} giorno`,
    // ${3} days
    xDays: (opts) => `${opts.count} giorni`,
    // ${1} week
    xWeek: (opts) => `${opts.count} settimana`,
    // ${3} weeks
    xWeeks: (opts) => `${opts.count} settimane`,
    // ${1} month
    xMonth: (opts) => `${opts.count} mese`,
    // ${3} months
    xMonths: (opts) => `${opts.count} mesi`,
    // ${1} year
    xYear: (opts) => `${opts.count} anno`,
    // ${1} years
    xYears: (opts) => `${opts.count} anni`
	},
	/*
	 * SubscriptionPriceDuration component
	 */
	SubscriptionPriceDuration: {
    // ${$4.99}/${month}
    cycle: (opts) => `${opts.price}/${opts.duration}`,
    // ${$4.99} for ${3 months}
    cycles: (opts) => `${opts.price} per ${opts.duration}`
	},
	/*
	 * IntroPhasesWrapper component
	 */
	IntroPhasesWrapper: {
		title: () => `Iscriviti ora e goditi i seguenti:`
	},
	/*
	 * IntroPhase component
	 */
	IntroPhase: {
		// ${1 month} free trial
		freeTrial: (opts) => `${opts.duration} di prova gratuita`,
		// ${$4.99/month} for the first ${6 months}
		introPrice: (opts) => `${opts.priceDuration} per i primi ${opts.duration}`
	},
	/*
	 * SubscriptionTerms component
	 */
	SubscriptionTerms: {
		subscriptionTermsTitle: () => `Fatturazione ricorrente.\nPuoi annullare in qualsiasi momento.`,
		subscriptionTermsDescription: (opts) => {
      if (opts.platform == 'android') {
        return `Toccando Continua, verrà addebitato il pagamento sul Play Store e la tua sottoscrizione si rinnoverà automaticamente allo stesso prezzo e durata fino a quando non la annullerai in qualsiasi momento dal Play Store.`;
      }
      return `Toccando Continua, verrà addebitato il pagamento sull'${opts.store} e la tua sottoscrizione si rinnoverà automaticamente allo stesso prezzo e durata fino a quando non la annullerai in qualsiasi momento dall'${opts.store}`;
    }
	},
	/*
	 * Restore component
	 */
	Restore: {
		restorePurchases: () => `Ripristina acquisti`
	},
	/*
	 * Buy component
	 */
	Buy: {
		continue: () => `Continua`,
		replaceSubscription: () => `Sostituisci sottoscrizione`,
		manageSubscription: () => `Gestisci sottoscrizione`
	}
}