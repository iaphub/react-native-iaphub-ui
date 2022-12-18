import React from 'react';
import PropTypes from 'prop-types';
import Paywall from './paywall';
import DefaultTouchableProduct from './touchable-product';
import DefaultActiveProductsWrapper from './active-products-wrapper';
import DefaultActiveProduct from './active-product';
import DefaultProductsWrapper from './products-wrapper';
import DefaultProduct from './product';
import DefaultProductTitle from './product-title';
import DefaultProductPrice from './product-price';
import DefaultProductsError from './products-error';
import DefaultIntroPhasesWrapper from './intro-phases-wrapper';
import DefaultIntroPhase from './intro-phase';
import DefaultSubscriptionTerms from './subscription-terms';
import DefaultRestore from './restore';
import DefaultBuy from './buy';
import DefaultLoading from './loading';

export default class PaywallWrapper extends React.Component {

	static propTypes = {
		isLoading: PropTypes.bool,
		err: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		productsForSale: PropTypes.array,
		activeProducts: PropTypes.array,
		lang: PropTypes.string,
		defaultSelectedProductIndex: PropTypes.number,
		theme: PropTypes.object,
		display: PropTypes.oneOf(['vertical', 'horizontal']),
		alert: PropTypes.func,
		showBuySuccessAlert: PropTypes.bool,
		showBuyErrorAlert: PropTypes.bool,
		showRestoreSuccessAlert: PropTypes.bool,
		showRestoreEmptyAlert: PropTypes.bool,
		showRestoreErrorAlert: PropTypes.bool,
		onBuyStart: PropTypes.func,
		onBuyEnd: PropTypes.func,
		onRestoreStart: PropTypes.func,
		onRestoreEnd: PropTypes.func,
		onShowManageSubscriptions: PropTypes.func,
		onRefreshProducts: PropTypes.func,
		ActiveProductsWrapper: PropTypes.func,
		ActiveProduct: PropTypes.func,
		Product: PropTypes.func,
		ProductTitle: PropTypes.func,
		ProductPrice: PropTypes.func,
		ProductsWrapper: PropTypes.func,
		ProductsError: PropTypes.func,
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
		showBuySuccessAlert: true,
		showBuyErrorAlert: true,
		showRestoreSuccessAlert: true,
		showRestoreEmptyAlert: true,
		showRestoreErrorAlert: true,
		onBuyStart: () => {},
		onBuyEnd: () => {},
		onRestoreStart: () => {},
		onRestoreEnd: () => {},
		onShowManageSubscriptions: () => {},
		onRefreshProducts: () => {}
	};

  render() {
		var {TouchableProduct, ActiveProductsWrapper, ActiveProduct, ProductsWrapper, Product, ProductTitle, ProductPrice, ProductsError, IntroPhasesWrapper, IntroPhase, SubscriptionTerms, Restore, Buy, Loading, ...props} = this.props;

    return (
			<Paywall
				{...props}
				TouchableProduct={(TouchableProduct === undefined) ? DefaultTouchableProduct : TouchableProduct}
				ActiveProductsWrapper={(ActiveProductsWrapper === undefined) ? DefaultActiveProductsWrapper : ActiveProductsWrapper}
				ActiveProduct={(ActiveProduct === undefined) ? DefaultActiveProduct : ActiveProduct}
				ProductsWrapper={(ProductsWrapper === undefined) ? DefaultProductsWrapper : ProductsWrapper}
				Product={(Product === undefined) ? DefaultProduct : Product}
				ProductTitle={(ProductTitle === undefined) ? DefaultProductTitle : ProductTitle}
				ProductPrice={(ProductPrice === undefined) ? DefaultProductPrice : ProductPrice}
				ProductsError={(ProductsError === undefined) ? DefaultProductsError : ProductsError}
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