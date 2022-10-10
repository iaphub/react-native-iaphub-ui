import buildTranslate from '../i18n';

export default function(cycleDuration, cycleCount = 1, omitSingleUnit = true, lang = 'en', i18n) {
  var translate = buildTranslate('SubscriptionDuration', lang, i18n);
  var count = parseInt(cycleDuration.match(/[0-9]+/)) * cycleCount;

  var getDuration = () => {
    var duration = "";

    if (cycleDuration.indexOf('D') != -1) {
      duration = translate(`xDay${count > 1 ? 's' : ''}`, {count: count});
    }
    else if (cycleDuration.indexOf('W') != -1) {
      duration = translate(`xWeek${count > 1 ? 's' : ''}`, {count: count});
    }
    else if (cycleDuration.indexOf('M') != -1) {
      duration = translate(`xMonth${count > 1 ? 's' : ''}`, {count: count});
    }
    else if (cycleDuration.indexOf('Y') != -1) {
      duration = translate(`xYear${count > 1 ? 's' : ''}`, {count: count});
    }

    return duration;
  };

  var getSingleDuration = () => {
    var data = {
      "P7D": translate('week'),
      "P1W": translate('week'),
      "P1M": translate('month'),
      "P1Y": translate('year')
    };

    return data[cycleDuration];
  };

  return (count > 1 || omitSingleUnit == false) ? getDuration() : getSingleDuration();
}