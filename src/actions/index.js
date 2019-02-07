import * as action from '../action-type';
import logo from './download.jpeg';
import QRCode from '../components/DetailProfile/MainContent/QRCode.png';

const profiles = [
  {
    id: 0,
    img: { logo },
    name: 'Max Orlov',
    modifided: '18:00 Wed 11/16/2016',
    status: 'Enable',
    type: 'Manager',
    masterVenue: 'Black',
    workVenue: 'Mint Green, McCooley',
  },
  {
    id: 1,
    img: { logo },
    name: 'Liya Gafurova',
    modifided: '18:00 Wed 11/16/2016',
    status: 'Enable',
    type: 'Staff',
    masterVenue: 'White',
    workVenue: 'White, McCooley',
  },
  {
    id: 2,
    img: { logo },
    name: 'Ruslan Tarirov',
    modifided: '11:00 Fri 11/18/2016',
    status: 'Disable',
    type: 'Manager',
    masterVenue: 'Green',
    workVenue: 'Mint Green, McCooley',
  },
];

const detailProfiles = [
  {
    id: 0,
    img: { logo },
    employmentDetail: {
      mainVenue: 'McCooley',
      otherVenue: 'N / A',
      jobType: 'Manager',
      startDate: 'Tue 11/15/2016',
      payRate: 'Age 18-20',
      hourPreference: '20 - 25',
      dayPreference: 'Thursday / Saturday / Sunday',
      nationalInsuranceNumber: 'PE630024B',
      sageId: 0,
      statusStatement: 'A',
    },
    accountDetail: {
      created: 'Mon 11/14/2016',
      status: 'Active',
      user: 'No Associated User',
      applicationPassword: 'Set at 10:30 Mon 11/15/2016',
      idScanner: QRCode,
    },
    personalDetail: {
      name: 'Max Orlov',
      gender: 'Male',
      dateOfBirth: '13 Jule 1997',
    },
    contactDetail: {
      email: 'orlovmaxim97@gmail.com',
      phone: '+7 (962) 059 01 61',
      address: {
        street: 'Charisse Junction',
        numHouse: 943,
        state: 'New Jersey',
        city: 'Monaco',
        index: '12345',
      },
    },
    mobileApp: {
      lastEntry: '10:30 Mon 11/15/2016',
    },
  },
  {
    id: 1,
    img: { logo },
    employmentDetail: {
      mainVenue: 'McCooley',
      otherVenue: 'N / A',
      jobType: 'Staff',
      startDate: 'Tue 11/15/2016',
      payRate: 'Age 18-20',
      hourPreference: '20 - 25',
      dayPreference: 'Thursday / Saturday / Sunday',
      nationalInsuranceNumber: 'PE630024B',
      sageId: 0,
      statusStatement: 'A',
    },
    accountDetail: {
      created: 'Mon 11/14/2016',
      status: 'Active',
      user: 'No Associated User',
      applicationPassword: 'Set at 10:30 Mon 11/15/2016',
      idScanner: QRCode,
    },
    personalDetail: {
      name: 'Liya Gafurova',
      gender: 'Female',
      dateOfBirth: '13 Jule 1997',
    },
    contactDetail: {
      email: 'LiyaGafurova97@gmail.com',
      phone: '+7 (999) 001 01 01',
      address: {
        street: 'Charisse Junction',
        numHouse: 943,
        state: 'New Jersey',
        city: 'Monaco',
        index: '12345',
      },
    },
    mobileApp: {
      lastEntry: '10:30 Mon 11/15/2016',
    },
  },
  {
    id: 2,
    img: { logo },
    employmentDetail: {
      mainVenue: 'McCooley',
      otherVenue: 'N / A',
      jobType: 'Staff',
      startDate: 'Tue 11/15/2016',
      payRate: 'Age 18-20',
      hourPreference: '20 - 25',
      dayPreference: 'Thursday / Saturday / Sunday',
      nationalInsuranceNumber: 'PE630024B',
      sageId: 0,
      statusStatement: 'A',
    },
    accountDetail: {
      created: 'Mon 11/14/2016',
      status: 'Active',
      user: 'No Associated User',
      applicationPassword: 'Set at 10:30 Mon 11/15/2016',
      idScanner: QRCode,
    },
    personalDetail: {
      name: 'Ruslan Tarirov',
      gender: 'Male',
      dateOfBirth: '13 Jule 1997',
    },
    contactDetail: {
      email: 'RuslanTarirov97@gmail.com',
      phone: '+7 (999) 999 99 01',
      address: {
        street: 'Charisse Junction',
        numHouse: 943,
        state: 'New Jersey',
        city: 'Monaco',
        index: '12345',
      },
    },
    mobileApp: {
      lastEntry: '10:30 Mon 11/15/2016',
    },
  },
];
const filterDetailProfiles = id => detailProfiles.filter(detPro => Number(id) === detPro.id);
const promiseDetailProfile = id =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 1) {
        resolve(filterDetailProfiles(id));
      } else {
        reject(new Error('qwer'));
      }
    }, 500);
  });
const promiseProfiles = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() < 1) {
      resolve(profiles);
    } else {
      reject(new Error('qwer'));
    }
  }, 500);
});
export const allProfile = () => ({ type: action.ALL_PROFILE });

export const detailProfile = idArg => ({ type: action.DETAIL_PROFILE, id: idArg });

export const failFetchRequest = () => ({ type: action.FAIL_FETCH_REQUEST });

export const failFetchResolveProfiles = profilesArg => ({ type: action.FAIL_FETCH_RESOLVE_PROFILES, profilesArg });

export const failFetchResolveDetailProfile = detailProfileArg => ({
  type: action.FAIL_FETCH_RESOLVE_DETAIL_PROFILE,
  detailProfileArg,
});

export const failFetchResolveError = error => ({ type: action.FAIL_FETCH_RESOLVE_ERROR, error });

export const failFetchDetailProfile = id => dispatch => {
  dispatch(failFetchRequest());
  console.log(id);
  return promiseDetailProfile(id)
    .then(detailPro => dispatch(failFetchResolveDetailProfile(detailPro[0])))
    .catch(error => dispatch(failFetchResolveError(error)));
};

export const failFetchProfiles = () => dispatch => {
  dispatch(failFetchRequest());
  return promiseProfiles
    .then(profilesFail => dispatch(failFetchResolveProfiles(profilesFail)))
    .catch(error => dispatch(failFetchResolveError(error)));
};
