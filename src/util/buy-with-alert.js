import {Alert, Platform} from 'react-native';
import buildTranslate from '../i18n';

export default async function(fn, lang = 'en', i18n) {
  var translate = buildTranslate('Paywall', lang, i18n);
  var error = null;
  var transaction = null;
  var alertTitle = translate('buySuccessTitle');
  var alertMessage = translate('buySuccessMessage');
  var showAlert = true;
  // Start buy
  try {
    transaction = await fn();
    // Handle failed webhook
    if (transaction.webhookStatus == "failed") {
      alertTitle = translate('buyErrorTitle');
      alertMessage = translate('buyErrorMessageReceiptFailed');
    }
    // Handle subscription change on next renewal
    else if (transaction.subscriptionRenewalProductSku) {
      alertTitle = translate('buySuccessNextRenewalTitle');
      alertMessage = translate('buySuccessNextRenewalMessage');
    }
  }
  // Catch any error
  catch (err) {
    error = err;
    if (error.code == "user_cancelled") {
      showAlert = false;
    }
    else if (error.code == "deferred_payment") {
      alertTitle = translate('buyDeferredPaymentTitle');
      alertMessage = translate('buyDeferredPaymentMessage');
    }
    else if (error.code == "product_change_next_renewal") {
      alertTitle = translate('buyDeferredPaymentTitle');
      alertMessage = translate('buyDeferredPaymentMessage');
    }
    else if (['receipt_failed', 'product_not_available', 'anonymous_purchase_not_allowed', 'transaction_not_found', 'network_error', 'billing_unavailable', 'cross_platform_conflict', 'product_already_purchased', 'user_conflict', 'product_change_next_renewal'].indexOf(error.code) != -1) {
      var camelCaseCode = err.code.replace(/_([a-z])/g, (g) => g[1].toUpperCase()).replace(/^./, str => str.toUpperCase());
      alertTitle = translate('buyErrorTitle');
      alertMessage = translate(`buyErrorMessage${camelCaseCode}`, {platform: Platform.OS});
    }
    else {
      alertTitle = translate('buyErrorTitle');
      alertMessage = translate('buyErrorMessage');
    }
  }
  // Return promise
  return new Promise((resolve, reject) => {
    if (showAlert) {
      Alert.alert(alertTitle, alertMessage, [
        {
          text: translate('ok'),
          onPress: () => error ? reject(error) : resolve(transaction)
        }
      ]);
    }
    else {
      error ? reject(error) : resolve(transaction);
    }
  });
}