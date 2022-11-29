import buildTranslate from '../i18n';
import getBuyAlertMessage from './get-buy-alert-message';
import showAlert from './show-alert';

export default async function(fn, lang = 'en', i18n, alertOnSuccess = true, alertOnError = true, alert) {
  var translate = buildTranslate('Paywall', lang, i18n);
  var error = null;
  var transaction = null;
  // Use default alert of not defined
  if (!alert) {
    alert = showAlert;
  }
  // Start buy
  try {
    transaction = await fn();
  }
  // Catch any error
  catch (err) {
    error = err;
  }
  // Get alert message
  var message = getBuyAlertMessage(error, transaction, lang, i18n);
  if (transaction && alertOnSuccess == false) {
    message = null;
  }
  if (error && alertOnError == false) {
    message = null;
  }
  // Show message if there is one
  if (message) {
    await alert({title: message.title, description: message.description, button: translate('ok')});
  }
  // Return promise
  return new Promise((resolve, reject) => {
    error ? reject(error) : resolve(transaction);
  });
}