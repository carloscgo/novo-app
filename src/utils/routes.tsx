// import List from '../components/List'
// import Form from '../components/Form'

export default [{
  path: '/dashboard',
  slug: 'home',
  name: 'Dashbord',
  icon: 'bi bi-speedometer',
  component: <div>Home</div>,
  isMenu: true,
  index: 0
}, {
  path: '*',
  slug: 'home',
  name: 'Dashbord',
  icon: 'bi bi-speedometer',
  component: <div>Home</div>,
  isMenu: false,
  index: 0
}];
