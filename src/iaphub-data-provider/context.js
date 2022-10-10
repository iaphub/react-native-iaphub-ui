import React from 'react';

const Context = React.createContext({
  lang: null,
	isLoading: null,
  activeProducts: null,
  productsForSale: null,
  onBuyStart: null,
  onBuyEnd: null,
  onRestoreStart: null,
  onRefreshProducts: null,
  onShowManageSubscriptions: null
});

export default Context;