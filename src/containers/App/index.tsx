import React, { memo, useEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import get from "lodash/get";

import routes from '../../utils/routes';
import { VITE_APP } from '../../utils/constants';
import {
  connect,
  createStructuredSelector,
  compose,
  useInjectReducer,
  useInjectSaga,
  searchRoute
} from '../../utils/services';

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
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Logo from "../../components/Logo";

import image from '../../assets/react.svg'

export const USER_NAME = 'Carlos Camacho'

const App = ({
  error,
  menu,
  getMenuRequestActionHandler,
}: PropsApp) => {
  const location = useLocation()
  const navigate = useNavigate()

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

  const logo = <Logo width={120} height={120} image={image} />

  return (
    <Container fluid className="d-flex flex-nowrap p-0">
      <Header brand={VITE_APP.APP_NAME} userName={USER_NAME} menu={data.data} />

      <Toast open={toast} message={error} onClose={() => setToast(false)} />

      <Container.Content className={`${data.loading ? 'p-0' : ''}`}>
        <Loading show={data.loading} />

        {!data.loading &&
          <Routes>
            {routes.map((route: PropsRoute, index: number) => (
              <Route key={index} path={route.path} element={route.component} />
            ))}
          </Routes>
        }
      </Container.Content>

      <Footer logoLeft={logo} logoRight={logo} copyright="&copy 2022 Novopayment Inc. All right reserved." />
    </Container>
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
