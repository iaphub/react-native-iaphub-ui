import React from 'react';
import PropTypes from 'prop-types';
import Paywall from './paywall';
import DefaultActiveSubscription from './active-subscription';
import DefaultProductsWrapper from './products-wrapper';
import DefaultProduct from './product';
import DefaultProductTitle from './product-title';
import DefaultProductPrice from './product-price';
import DefaultProductsEmpty from './products-empty';
import DefaultIntroPhasesWrapper from './intro-phases-wrapper';
import DefaultIntroPhase from './intro-phase';
import DefaultSubscriptionTerms from './subscription-terms';
import DefaultRestore from './restore';
import DefaultBuy from './buy';
import DefaultLoading from './loading';

export default class PaywallWrapper extends React.Component {

	static propTypes = {
		isLoading: PropTypes.bool,
		productsForSale: PropTypes.array,
		activeProducts: PropTypes.array,
		lang: PropTypes.string,
		defaultSelectedProductIndex: PropTypes.number,
		theme: PropTypes.object,
		display: PropTypes.oneOf(['vertical', 'horizontal']),
		onBuyStart: PropTypes.func,
		onBuyEnd: PropTypes.func,
		onRestoreStart: PropTypes.func,
		onRestoreEnd: PropTypes.func,
		onShowManageSubscriptions: PropTypes.func,
		onRefreshProducts: PropTypes.func,
		ActiveSubscription: PropTypes.func,
		Product: PropTypes.func,
		ProductTitle: PropTypes.func,
		ProductPrice: PropTypes.func,
		ProductsWrapper: PropTypes.func,
		ProductsEmpty: PropTypes.func,
		IntroPhasesWrapper: PropTypes.func,
		IntroPhase: PropTypes.func,
		Restore: PropTypes.func,
		Buy: PropTypes.func,
		Loading: PropTypes.func
	};

	static defaultProps = {
		isLoading: false,
		lang: 'en',
		defaultSelectedProductIndex: 0,
		display: 'horizontal',
		onBuyStart: () => {},
		onBuyEnd: () => {},
		onRestoreStart: () => {},
		onRestoreEnd: () => {},
		onShowManageSubscriptions: () => {},
		onRefreshProducts: () => {}
	};

  render() {
		var {ActiveSubscription, ProductsWrapper, Product, ProductTitle, ProductPrice, ProductsEmpty, IntroPhasesWrapper, IntroPhase, SubscriptionTerms, Restore, Buy, Loading, ...props} = this.props;

    return (
			<Paywall
				{...props}
				ActiveSubscription={(ActiveSubscription === undefined) ? DefaultActiveSubscription : ActiveSubscription}
				ProductsWrapper={(ProductsWrapper === undefined) ? DefaultProductsWrapper : ProductsWrapper}
				Product={(Product === undefined) ? DefaultProduct : Product}
				ProductTitle={(ProductTitle === undefined) ? DefaultProductTitle : ProductTitle}
				ProductPrice={(ProductPrice === undefined) ? DefaultProductPrice : ProductPrice}
				ProductsEmpty={(ProductsEmpty === undefined) ? DefaultProductsEmpty : ProductsEmpty}
				IntroPhasesWrapper={(IntroPhasesWrapper === undefined) ? DefaultIntroPhasesWrapper : IntroPhasesWrapper}
				IntroPhase={(IntroPhase === undefined) ? DefaultIntroPhase : IntroPhase}
				SubscriptionTerms={(SubscriptionTerms === undefined) ? DefaultSubscriptionTerms : SubscriptionTerms}
				Restore={(Restore === undefined) ? DefaultRestore : Restore}
				Buy={(Restore === undefined) ? DefaultBuy: Buy}
				Loading={(Loading === undefined) ? DefaultLoading: Loading}
			/>
    );
  }

}