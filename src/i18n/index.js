import en from './en';
import fr from './fr';
import es from './es';
import jp from './jp';
import pt from './pt';
import de from './de';
import it from './it';

const dictionary = {
	en: en,
	fr: fr,
	es: es,
	jp: jp,
	pt: pt,
	de: de,
	it: it
};

export default (componentName, locale, data) => {
	var localeDictionary = dictionary[locale || 'en'];
	if (!localeDictionary) {
		localeDictionary = dictionary['en'];
	}
	var componentDictionary = localeDictionary[componentName];
	if (!componentDictionary) {
		throw `Component '${componentName}' i18n not found for language ${locale}`;
	}
	var phrases = Object.assign({}, componentDictionary, data ? data[componentName] : null);
	
	return (id, opts) => {
		var fun = phrases[id];

		if (typeof fun == 'undefined') {
			throw `Translation ${id} undefined`;
		}
		else if (typeof fun != 'function') {
			throw `Translation ${id} invalid`;
		}
		return fun(opts);
	}
}