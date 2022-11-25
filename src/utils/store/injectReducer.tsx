import React from 'react';
import { ReactReduxContext } from 'react-redux';
import hoistNonReactStatics from 'hoist-non-react-statics';

import getInjectors from './reducerInjectors';

type TProp = { key: any, reducer: any }

export default ({ key, reducer }: TProp): any => (WrappedComponent: any) => {
  /**
   * Reducer injector
   */
  class ReducerInjector extends React.Component {
    static WrappedComponent = WrappedComponent;

    static contextType = ReactReduxContext;

    static displayName = `withReducer(${WrappedComponent.displayName ||
      WrappedComponent.name ||
      'Component'})`;

    constructor(props: any, context: any) {
      super(props, context)

      getInjectors(context.store).injectReducer(key, reducer)
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }

  return hoistNonReactStatics(ReducerInjector, WrappedComponent)
};

const useInjectReducer = ({ key, reducer }: TProp) => {
  const context = React.useContext(ReactReduxContext)

  React.useEffect(() => {
    getInjectors(context.store).injectReducer(key, reducer)
  }, [])
};

export { useInjectReducer };
