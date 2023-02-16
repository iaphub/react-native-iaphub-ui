export default {
	/*
	 * PayWall component
	 */
	Paywall: {
		restoreSuccessTitle: () => `Restaurado con éxito`,
		restoreSuccessMessage: () => `¡Tus compras se han restaurado correctamente!`,
		restoreEmptyMessage: () => `No se han detectado compras para restaurar`,
		restoreErrorTitle: () => `Error al restaurar`,
		restoreErrorMessage: () => `No hemos podido restaurar tus compras. Inténtalo de nuevo más tarde.`,
		buySuccessTitle: () => `Compra realizada correctamente`,
		buySuccessMessage: () => `¡Tu compra se ha procesado correctamente!`,
		buySuccessNextRenewalTitle: () => `Cambio de suscripción realizado correctamente`,
		buySuccessNextRenewalMessage: () => `Tu suscripción se cambiará en la próxima fecha de renovación.`,
		buyDeferredPaymentTitle: () => `Pago pendiente`,
		buyDeferredPaymentMessage: () => `Espera, el pago está pendiente.`,
		buyErrorTitle: () => `Error`,
		buyErrorMessage: () => `No hemos podido procesar tu compra. Inténtalo de nuevo más tarde.`,
		buyErrorMessageReceiptFailed: () => `Estamos teniendo problemas para validar tu transacción. Danos algo de tiempo y volveremos a intentar validar tu transacción lo antes posible.`,
		buyErrorMessageProductNotAvailable: () => `El producto no está disponible para comprarlo actualmente.`,
		buyErrorMessageAnonymousPurchaseNotAllowed: () => `Inicia sesión en tu cuenta antes de realizar cualquier compra.`,
		buyErrorMessageTransactionNotFound: () => `No hemos podido procesar tu compra. Inténtalo de nuevo más tarde.`,
		buyErrorMessageNetworkError: () => `Error de red. Inténtalo de nuevo más tarde.`,
		buyErrorMessageBillingUnavailable: () => `El sistema de facturación no está disponible actualmente en tu dispositivo. Inténtalo de nuevo más tarde.`,
		buyErrorMessageCrossPlatformConflict: (opts) => `Parece que ya tienes una suscripción en una plataforma diferente (${opts.platform}). Usa la misma plataforma para cambiar tu suscripción o espera a que caduque tu suscripción actual.`,
		buyErrorMessageProductAlreadyPurchased: () => `Ya tienes este producto. Si no tienes acceso al producto, restaura tus compras.`,
		buyErrorMessageUserConflict: () => `Producto propiedad de un usuario diferente, utilice la cuenta con la que compró originalmente el producto o restaure sus compras.`,
		buyErrorMessageProductChangeNextRenewal: () => `El cambio de suscripción se ha realizado correctamente. Tu suscripción se actualizará en la próxima fecha de renovación.`,
		manageSubscriptionsErrorTitleDifferentPlatform: () => `Error`,
		manageSubscriptionsErrorMessageDifferentPlatform: (opts) => `Tu suscripción se compró en una plataforma diferente (${opts.platform}). Usa la misma plataforma para administrar tu suscripción.`,
		ok: () => `VALE`
	},
	/*
	 * PaywallSubscriptionGroup component
	 */
	PaywallSubscriptionGroup: {
		errorDifferentSubscriptionGroup: () => `Error: si vendes varias suscripciones, estas deben pertenecer al mismo grupo de suscripción.`
	},
	/*
	 * ActiveProduct component
	 */
	ActiveProduct: {
		activeProduct: () => `Tienes un producto activo`,
		activeSubscription: () => `Tienes una suscripción activa`,
		subscriptionPaused: () => `Tienes una suscripción en pausa`,
		subscriptionCannotBeRenewed: () => `Se ha producido un error con la renovación de tu suscripción. Actualiza tu método de pago para renovar.`,
		autoRenewalActive: () => `Renovación Automática`,
		autoRenewalDisabled: () => `Renovación automática inhabilitada`
	},
	/*
	 * ProductsError component
	 */
	ProductsError: {
		noProducts: () => `No hay productos a la venta. Inténtalo de nuevo más tarde.`,
		billingUnavailable: () => `El sistema de facturación no está disponible actualmente en tu dispositivo. Inténtalo de nuevo más tarde.`,
		networkError: () => `Error de red. Inténtalo de nuevo más tarde.`,
		tryAgain: () => `Intentar otra vez`
	},
	/*
	 * SubscriptionDuration component
	 */
	SubscriptionDuration: {
		// day
		day: () => `día`,
		// week
		week: () => `semana`,
		// month
		month: () => `mes`,
		// year
		year: () => `año`,
		// ${1} day
		xDay: (opts) => `${opts.count} día`,
		// ${3} days
		xDays: (opts) => `${opts.count} días`,
		// ${1} week
		xWeek: (opts) => `${opts.count} semana`,
		// ${3} weeks
		xWeeks: (opts) => `${opts.count} semanas`,
		// ${1} month
		xMonth: (opts) => `${opts.count} mes`,
		// ${3} months
		xMonths: (opts) => `${opts.count} meses`,
		// ${1} year
		xYear: (opts) => `${opts.count} año`,
		// ${1} years
		xYears: (opts) => `${opts.count} años`
	},
	/*
	 * SubscriptionPriceDuration component
	 */
	SubscriptionPriceDuration: {
		// ${$4.99}/${month}
		cycle: (opts) => `${opts.price}/${opts.duration}`,
		// ${$4.99} for ${3 months}
		cycles: (opts) => `${opts.price} por ${opts.duration}`
	},
	/*
	 * IntroPhasesWrapper component
	 */
	IntroPhasesWrapper: {
		title: () => `Suscríbete ahora y disfruta de lo siguiente:`
	},
	/*
	 * IntroPhase component
	 */
	IntroPhase: {
		// ${1 month} free trial
		freeTrial: (opts) => `${opts.duration} de prueba gratis`,
		// ${$4.99/month} for the first ${6 months}
		introPrice: (opts) => `${opts.priceDuration} durante los primeros ${opts.duration}`
	},
	/*
	 * SubscriptionTerms component
	 */
	SubscriptionTerms: {
		subscriptionTermsTitle: () => `Facturación periódica. Cancela en cualquier momento.`,
		subscriptionTermsDescription: (opts) => {
			if (opts.platform == 'android') {
				return `Su suscripción se renovará automáticamente por el mismo precio y duración hasta que la cancele en cualquier momento desde la Play Store.`;
			}
			return `Su suscripción se renovará automáticamente por el mismo precio y duración hasta que la cancele en cualquier momento desde la App Store.`;
		},
		subscriptionTermsFreeTrialTitle: (opts) => {
			if (opts.platform == 'android') {
				return `No se te cobrará durante el período de prueba gratuito.\nPuedes cancelar en cualquier momento desde Google Play.`;
			}
			return `No se te cobrará durante el período de prueba gratuito.\nPuedes cancelar en cualquier momento desde la App Store.`;
		},
		subscriptionTermsFreeTrialDescription: (opts) => {
			if (opts.platform == 'android') {
				return `El pago solo se iniciará después de que finalice tu período de prueba gratuito y tu suscripción se renovará automáticamente por el mismo precio y duración hasta que canceles en cualquier momento desde Google Play.`;
			}
			return `El pago solo se iniciará después de que finalice tu período de prueba gratuito y tu suscripción se renovará automáticamente por el mismo precio y duración hasta que canceles en cualquier momento desde la App Store.`;
		}
	},
	/*
	 * Restore component
	 */
	Restore: {
		restorePurchases: () => `Restaurar compras`
	},
	/*
	 * Buy component
	 */
	Buy: {
		continue: () => `Continuar`,
		replaceSubscription: () => `Reemplazar suscripción`,
		manageSubscription: () => `Administrar suscripción`
	}
}