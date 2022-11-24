import React, { memo, useEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import get from "lodash/get";

import routes from '../../utils/routes';
import {
  connect,
  createStructuredSelector,
  compose,
  useInjectReducer,
  useInjectSaga,
  searchRoute
} from '../../utils/services';
import Context from '../../utils/context';

import {
  makeDataSelector as makeDataSelectorError
} from '../../utils/services/getError/selectors';

import {
  makeDataSelector as makeDataSelectorMenu
} from '../../utils/services/menu/selectors';
import reducerError from '../../utils/services/getError/reducer';
import reducerMenu from '../../utils/services/menu/reducer';
import sagaMenu from '../../utils/services/menu/saga';
import {
  getMenuRequestAction,
} from '../../utils/services/menu/actions';

import Container from './styles';
import {
  PropsApp, PropsRoute, IFunc
} from '../../utils/interfaces';

import Toast from '../../components/Toast';
import Loading from "../../components/Loading";
import Menu from "../../components/Menu";

const App = ({
  error,
  menu,
  getMenuRequestActionHandler,
}: PropsApp) => {
  const location = useLocation()
  const navigate = useNavigate()
  console.log({ menu })
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any>({
    loading: false,
    data: [],
  })
  const [toast, setToast] = useState(false)

  useInjectReducer({ key: 'error', reducer: reducerError })
  useInjectReducer({ key: 'menu', reducer: reducerMenu })
  useInjectSaga({ key: 'menu', saga: sagaMenu })

  useEffect(() => {
    getMenuRequestActionHandler()
  }, [])

  useEffect(() => {
    setToast(!!error)
  }, [error])

  useEffect(() => {
    if (location.pathname === '/') {
      navigate(searchRoute('home'))
    }
  }, [location.pathname])

  useEffect(() => {
    setData({
      loading: get(menu, 'loading', true),
      data: get(menu, 'data', []),
    })
  }, [menu])

  return (
    <Context.Provider
      value={{
        menu: data.data,
        message: data.message
      }}>
      <Container fluid className="d-flex flex-nowrap p-0">
        <Toast open={toast} message={error} onClose={() => setToast(false)} />

        <div className="main-panel">
          <Container.Content className={`${data.loading ? 'p-0' : ''}`}>
            <Loading show={data.loading} />

            <Menu items={data.data} onClick={(e) => console.log(e)} selection={null} />

            {!data.loading &&
              <Routes>
                {routes.map((route: PropsRoute, index: number) => (
                  <Route key={index} path={route.path} element={route.component} />
                ))}
              </Routes>
            }
          </Container.Content>
        </div>
      </Container>
    </Context.Provider>
  )
}

const mapStateToProps = createStructuredSelector({
  error: makeDataSelectorError(),
  menu: makeDataSelectorMenu()
});

export const mapDispatchToProps = (dispatch: IFunc) => ({
  getMenuRequestActionHandler: () => dispatch(getMenuRequestAction()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(
  withConnect,
  memo
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
)(App) as React.FunctionComponent<any>;
