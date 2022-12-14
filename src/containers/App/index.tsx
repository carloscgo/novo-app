import { FunctionComponent, memo, useEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import get from "lodash/get";

import { VITE_APP, USER_NAME, COPYRIGHT } from '../../utils/constants';
import routes from '../../utils/routes';
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

import {
  PropsApp, PropsRoute, IFunc
} from '../../utils/interfaces';

import {
  Toast,
  Loading,
  Header,
  Footer,
  Logo
} from "../../components";

import image from '../../assets/react.svg'

import Container from './styles';

type TRedirect = {
  location: {
    pathname: string
  },
  navigate: IFunc
}

export const redirectToHome = ({ location, navigate }: TRedirect) => {
  if (location.pathname === '/') {
    navigate(searchRoute('home'))
  }
}

export const App = ({
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
    redirectToHome({ location, navigate })
  }, [location.pathname])

  useEffect(() => {
    setData({
      loading: get(menu, 'loading', true),
      data: get(menu, 'data', []),
    })
  }, [menu])

  const logo = <Logo width={120} height={120} image={image} />

  const onSelect = (e: any) => console.log(e)
  const onClose = () => setToast(false)

  return (
    <Container fluid className="d-flex flex-nowrap p-0">
      <Header brand={VITE_APP.APP_NAME} userName={USER_NAME} menu={data.data} onSelect={onSelect} />

      <Toast open={toast} message={error} onClose={onClose} />

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

      <Footer logoLeft={logo} logoRight={logo} copyright={COPYRIGHT} />
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
)(App) as FunctionComponent<any>;
