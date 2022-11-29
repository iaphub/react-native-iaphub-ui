import React from 'react';

const Context = React.createContext({
  lang: null,
	isLoading: null,
  err: null,
  activeProducts: null,
  productsForSale: null,
  i18n: null,
  alert: null,
  showBuySuccessAlert: null,
  showBuyErrorAlert: null,
  onBuyStart: null,
  onBuyEnd: null,
  onRestoreStart: null,
  onRefreshProducts: null,
  onShowManageSubscriptions: null
});

export default Context;