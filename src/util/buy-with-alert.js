import {Alert} from 'react-native';
import buildTranslate from '../i18n';
import getBuyAlertMessage from './get-buy-alert-message';

export default async function(fn, lang = 'en', i18n, alertOnSuccess = true, alertOnError = true) {
  var translate = buildTranslate('Paywall', lang, i18n);
  var error = null;
  var transaction = null;
  // Start buy
  try {
    transaction = await fn();
    // Do not do anything if the method returns false
    if (transaction === false) return false;
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
  // Return promise
  return new Promise((resolve, reject) => {
    if (message) {
      Alert.alert(message.title, message.description, [
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