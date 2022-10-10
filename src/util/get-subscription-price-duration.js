import buildTranslate from '../i18n';
import getSubscriptionDuration from './get-subscription-duration';

export default function(localizedPrice, cycleDuration, omitSingleUnit = true, lang = 'en', i18n) {
  var translate = buildTranslate('SubscriptionPriceDuration', lang, i18n);
  var isMultiple = ['P7D', 'P1W', 'P1M', 'P1Y'].indexOf(cycleDuration) == -1;

  return translate(`cycle${isMultiple ? 's' : ''}`, {
    price: localizedPrice,
    duration: getSubscriptionDuration(cycleDuration, 1, omitSingleUnit, lang, i18n)
  });
}