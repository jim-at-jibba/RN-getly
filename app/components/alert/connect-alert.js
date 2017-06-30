import React, { PropTypes, Component } from 'react';
import hoistNonReactStatic from 'hoist-non-react-statics';

const connectAlert = (WrappedComponent) => {
  console.log('Connected Comp');
  class ConnectedAlert extends Component {
    render() {
      const { props, context } = this;
      console.log('Props', props);
      return (
        <WrappedComponent
          {...props}
          alertWithType={context.alertWithType}
          alert={context.alert}
        />
      );
    }
  }

  ConnectedAlert.contextTypes = {
    alertWithType: PropTypes.func,
    alert: PropTypes.func,
  };

  return hoistNonReactStatic(ConnectedAlert, WrappedComponent);
};

export default connectAlert;
