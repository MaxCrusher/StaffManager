import Header from './components/Header';
import Profiles from './components/Profiles';
import DetailProfile from './components/DetailProfile';
import EditProfile from './components/EditProfile';
import EmploymentForm from './components/EditProfile/containers/Forms/EmploymentForm';
import PersonalForm from './components/EditProfile/containers/Forms/PersonalForm';
import ContactForm from './components/EditProfile/containers/Forms/ContactForm';
import Holidays from './components/DetailProfile/Holidays';
import MainContent from './components/DetailProfile/MainContent';

const routes = [
  { path: '/', component: Header },
  { path: '/', exact: true, component: Profiles },
  {
    path: '/detail/:id/profile',
    exact: true,
    component: DetailProfile,
    com: 'DetailProfile',
    routes: [{ path: '/detail/:id/profile', exact: true, component: MainContent }],
  },
  {
    path: '/detail/:id/holidays',
    exact: true,
    component: DetailProfile,
    com: 'DetailProfile',
    routes: [{ path: '/detail/:id/holidays', exact: true, component: Holidays }],
  },
  {
    path: '/detail/:id/edit',
    exact: false,
    component: EditProfile,
    routes: [
      { path: '/detail/:id/edit/employment', exact: true, component: EmploymentForm },
      { path: '/detail/:id/edit/personal', exact: true, component: PersonalForm },
      { path: '/detail/:id/edit/contact', exact: true, component: ContactForm },
    ],
  },
];
export default routes;
