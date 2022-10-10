import React from 'react';

const formatStyles = (styles) => {
	var formattedStyles = {};

	Object.keys(styles).forEach((propertyName) => {
		formattedStyles[propertyName] = [styles[propertyName]];
	});
	
	return formattedStyles;
}

const compileStyles = (defaultStyles, customStyles, customStyle) => {
	styles = formatStyles(defaultStyles);

	if (customStyles) {
		Object.keys(customStyles).forEach((propertyName) => {
			if (!styles[propertyName]) {
				styles[propertyName] = [];
			}
			if (Array.isArray(customStyles[propertyName])) {
				styles[propertyName].push(...customStyles[propertyName]);
			}
			else {
				styles[propertyName].push(customStyles[propertyName]);
			}
		});
	}
	if (customStyle) {
		if (!styles.root) {
			styles.root = [];
		}
		if (Array.isArray(customStyle)) {
			styles.root.push(...customStyle);
		}
		else {
			styles.root.push(customStyle);
		}
	}
	return styles;
}

export default (styles, themeName) => {
	return (Component) => {
		return (props) => {
			var compiledStyles = compileStyles(styles, Object.assign({}, props.theme ? props.theme[themeName] : {}, props.styles), props.style);

			return <Component {...props} styles={compiledStyles} style={null}/>
		}
	}
}