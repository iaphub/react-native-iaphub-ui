import React from 'react';
import PropTypes from 'prop-types';
import Context from './context';
import IaphubData from '../iaphub-data';

export default class IaphubDataProvider extends React.Component {

  static propTypes = {
    appId: PropTypes.string.isRequired,
    apiKey: PropTypes.string.isRequired,
		lang: PropTypes.string.isRequired,
    userId: PropTypes.string,
    allowAnonymousPurchase: PropTypes.bool,
    onError: PropTypes.func
	};

  renderContent = (context) => {
    var {children} = this.props;

    return (
      <Context.Provider value={context}>
        {children}
      </Context.Provider>
    )
  }

  render() {
    var {children, ...props} = this.props;

    return (
      <IaphubData {...props}>
        {this.renderContent}
      </IaphubData>
    )
  }

}