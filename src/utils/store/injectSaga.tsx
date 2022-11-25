import React from 'react';
import { ReactReduxContext } from 'react-redux';
import hoistNonReactStatics from 'hoist-non-react-statics';

import getInjectors from './sagaInjectors';

type TProp = { key: any, saga: any, mode?: any }

/**
 * Dynamically injects a saga, passes component's props as saga arguments
 *
 * @param {object} options - options
 * @param {string} options.key A key of the saga
 * @param {Function} options.saga A root saga that will be injected
 * @param {string} [options.mode] By default (constants.DAEMON) the saga will be started
 * on component mount and never canceled or started again. Another two options:
 *   - constants.RESTART_ON_REMOUNT — the saga will be started on component mount and
 *   cancelled with `task.cancel()` on component unmount for improved performance,
 *   - constants.ONCE_TILL_UNMOUNT — behaves like 'RESTART_ON_REMOUNT' but never runs it again.
 * @return {object} value
 */
export default ({ key, saga, mode }: TProp) => (WrappedComponent: any) => {
  /**
   *
   */
  class InjectSaga extends React.Component {
    static WrappedComponent = WrappedComponent;
    injectors

    static contextType = ReactReduxContext;

    static displayName = `withSaga(${WrappedComponent.displayName ||
      WrappedComponent.name ||
      'Component'})`;

    constructor(props: any, context: any) {
      super(props, context)

      this.injectors = getInjectors(context.store)

      this.injectors.injectSaga(key, { saga, mode }, this.props)
    }

    componentWillUnmount() {
      this.injectors.ejectSaga(key)
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }

  return hoistNonReactStatics(InjectSaga, WrappedComponent)
};

const useInjectSaga = ({ key, saga, mode = undefined }: TProp) => {
  const context = React.useContext(ReactReduxContext)

  React.useEffect(() => {
    const injectors = getInjectors(context.store)

    injectors.injectSaga(key, { saga, mode })

    return () => {
      injectors.ejectSaga(key)
    }
  }, [])
};

export { useInjectSaga };
