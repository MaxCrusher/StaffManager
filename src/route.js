import Header from './components/Header';
import Profiles from './components/Profiles';
import DetailProfile from './components/DetailProfile';

const routes = [
  { path: '/', component: Header },
  { path: '/', exact: true, component: Profiles },
  { path: '/detail/:id', exact: true, component: DetailProfile },
];
export default routes;
