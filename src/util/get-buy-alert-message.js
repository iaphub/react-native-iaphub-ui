import {Platform} from 'react-native';
import buildTranslate from '../i18n';

export default function(err, transaction, lang = 'en', i18n) {
  var translate = buildTranslate('Paywall', lang, i18n);
  var title = null;
  var description = null;

  if (transaction) {
    // Handle failed webhook
    if (transaction.webhookStatus == "failed") {
      title = translate('buyErrorTitle');
      description = translate('buyErrorMessageReceiptFailed');
    }
    // Handle subscription change on next renewal
    else if (transaction.subscriptionRenewalProductSku) {
      title = translate('buySuccessNextRenewalTitle');
      description = translate('buySuccessNextRenewalMessage');
    }
    // Regular success message
    else {
      title = translate('buySuccessTitle');
      description = translate('buySuccessMessage');
    }
  }
  else if (err) {
    if (err.code == "user_cancelled") {
      // Should not display an alert when the purchase is cancelled
    }
    else if (err.code == "deferred_payment") {
      title = translate('buyDeferredPaymentTitle');
      description = translate('buyDeferredPaymentMessage');
    }
    else if (err.code == "product_change_next_renewal") {
      title = translate('buyDeferredPaymentTitle');
      description = translate('buyDeferredPaymentMessage');
    }
    else if (['receipt_failed', 'product_not_available', 'anonymous_purchase_not_allowed', 'transaction_not_found', 'network_error', 'billing_unavailable', 'cross_platform_conflict', 'product_already_purchased', 'user_conflict', 'product_change_next_renewal'].indexOf(err.code) != -1) {
      var camelCaseCode = err.code.replace(/_([a-z])/g, (g) => g[1].toUpperCase()).replace(/^./, str => str.toUpperCase());
      title = translate('buyErrorTitle');
      description = translate(`buyErrorMessage${camelCaseCode}`, {platform: Platform.OS});
    }
    else {
      title = translate('buyErrorTitle');
      description = translate('buyErrorMessage');
    }
  }
  else {
    title = translate('buyErrorTitle');
    description = translate('buyErrorMessage');
  }

  if (!title || !description) {
    return false;
  }
  return {title: title, description: description};
}