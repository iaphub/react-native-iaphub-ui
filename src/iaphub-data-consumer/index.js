import React from 'react';
import Context from '../iaphub-data-provider/context';

export default class IaphubDataConsumer extends React.Component {

  renderContent = (context) => {
    var {children} = this.props;

    return (typeof children == 'function') ? children(context) : null;
  }

  render() {
    return (
			<Context.Consumer>
				{this.renderContent}
			</Context.Consumer>
		);
  }

}