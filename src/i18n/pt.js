export default {
	/*
	 * PayWall component
	 */
	Paywall: {
		restoreSuccessTitle: () => `Restauração bem-sucedida`,
		restoreSuccessMessage: () => `As suas compras foram restauradas com sucesso!`,
		restoreEmptyMessage: () => `Nenhuma compra para restaurar foi detectada`,
		restoreErrorTitle: () => `Restauração falhada`,
		restoreErrorMessage: () => `Não nos foi possível restaurar as suas compras, tente novamente mais tarde.`,
		buySuccessTitle: () => `Compra bem-sucedida`,
		buySuccessMessage: () => `A sua compra foi processada com sucesso!`,
		buySuccessNextRenewalTitle: () => `Alteração de subscrição bem sucedida`,
		buySuccessNextRenewalMessage: () => `A sua subscrição será alterada na próxima data de renovação.`,
		buyDeferredPaymentTitle: () => `Pagamento pendente`,
		buyDeferredPaymentMessage: () => `Por favor aguarde, o pagamento está pendente.`,
		buyErrorTitle: () => `Erro`,
		buyErrorMessage: () => `Não nos foi possível processar a sua compra, tente novamente mais tarde.`,
		buyErrorMessageReceiptFailed: () => `Estamos a ter dificuldades em validar a sua transação, dê-nos algum tempo, tentaremos novamente validar a sua transação, assim que possível.`,
		buyErrorMessageProductNotAvailable: () => `O produto não está atualmente disponível para compra.`,
		buyErrorMessageAnonymousPurchaseNotAllowed: () => `Por favor, inicie sessão na sua conta antes de efetuar qualquer compra.`,
		buyErrorMessageTransactionNotFound: () => `Não nos foi possível processar a sua compra, tente novamente mais tarde.`,
		buyErrorMessageNetworkError: () => `Erro de rede, tente novamente mais tarde.`,
		buyErrorMessageBillingUnavailable: () => `Sistema de faturação atualmente indisponível no seu dispositivo, tente novamente mais tarde.`,
		buyErrorMessageCrossPlatformConflict: (opts) => `Parece que já tem uma subscrição numa plataforma diferente (${opts.platform}). Por favor utilize a mesma plataforma para alterar a sua subscrição ou espere que a sua subscrição atual expire.`,
		buyErrorMessageProductAlreadyPurchased: () => `Já possui este produto. Se não tiver acesso ao produto, restaure as suas compras.`,
		buyErrorMessageUserConflict: () => `Este produto pertence a um utilizador diferente. Por favor utilize a conta com a qual comprou originalmente o produto ou restaure as suas compras.`,
		buyErrorMessageProductChangeNextRenewal: () => `A alteração da subscrição já foi efetuada, a sua subscrição será atualizada na próxima data de renovação.`,
		manageSubscriptionsErrorTitleDifferentPlatform: () => `Erro`,
		manageSubscriptionsErrorMessageDifferentPlatform: (opts) => `A sua subscrição foi adquirida numa plataforma diferente (${opts.platform}). Por favor utilize a mesma plataforma para gerir a sua subscrição.`,
		ok: () => `OK`
	},
	/*
	 * PaywallSubscriptionGroup component
	 */
	PaywallSubscriptionGroup: {
		errorDifferentSubscriptionGroup: () => `Erro: Se estiver a vender várias subscrições, estas devem pertencer ao mesmo grupo de subscrição.`
	},
	/*
	 * ActiveProduct component
	 */
	ActiveProduct: {
		activeProduct: () => `Você tem um produto ativo`,
		activeSubscription: () => `Tem uma subscrição ativa`,
		subscriptionPaused: () => `Tem uma subscrição em pausa`,
		subscriptionCannotBeRenewed: () => `A renovação da sua subscrição falhou. Atualize o seu método de pagamento para renovar.`,
		autoRenewalActive: () => `Renovação automática`,
		autoRenewalDisabled: () => `Renovação automática desativada`
	},
	/*
	 * ProductsError component
	 */
	ProductsError: {
		noProducts: () => `Não há produtos à venda, tente novamente mais tarde.`,
		billingUnavailable: () => `Sistema de faturação atualmente indisponível no seu dispositivo, tente novamente mais tarde.`,
		networkError: () => `Erro de rede, tente novamente mais tarde.`,
		tryAgain: () => `Tente novamente`
	},
	/*
	 * SubscriptionDuration component
	 */
	SubscriptionDuration: {
		// day
		day: () => `dia`,
		// week
		week: () => `semana`,
		// month
		month: () => `mês`,
		// year
		year: () => `ano`,
		// ${1} day
		xDay: (opts) => `${opts.count} dia`,
		// ${3} days
		xDays: (opts) => `${opts.count} dias`,
		// ${1} week
		xWeek: (opts) => `${opts.count} semana`,
		// ${3} weeks
		xWeeks: (opts) => `${opts.count} semanas`,
		// ${1} month
		xMonth: (opts) => `${opts.count} mês`,
		// ${3} months
		xMonths: (opts) => `${opts.count} meses`,
		// ${1} year
		xYear: (opts) => `${opts.count} ano`,
		// ${1} years
		xYears: (opts) => `${opts.count} anos`
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
		title: () => `Subscreva agora e aproveite o seguinte:`
	},
	/*
	 * IntroPhase component
	 */
	IntroPhase: {
		// ${1 month} free trial
		freeTrial: (opts) => `${opts.duration} de teste gratuito`,
		// ${$4.99/month} for the first ${6 months}
		introPrice: (opts) => `${opts.priceDuration} durante os primeiros ${opts.duration}`
	},
	/*
	 * SubscriptionTerms component
	 */
	SubscriptionTerms: {
		subscriptionTermsTitle: () => `Faturação recorrente. Cancele a qualquer momento.`,
		subscriptionTermsDescription: (opts) => `Ao tocar em Continuar, o pagamento da sua ${opts.store} será cobrado e a sua subscrição será autorrenovada pelo mesmo preço e duração, até que cancele a qualquer momento, a partir da ${opts.store}.`
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
		replaceSubscription: () => `Substituir assinatura`,
		manageSubscription: () => `Gerenciar assinatura`
	}
}