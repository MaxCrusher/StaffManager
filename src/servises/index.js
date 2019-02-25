import axios from 'axios';

const initialStateHoliday = {
  staffMemberHolidays: [
    {
      id: 1,
      idUser: 519,
      idType: 1,
      idStatus: 1,
      startDate: '11-04-2018',
      endDate: '11-05-2018',
      note: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique blanditiis officia non libero.',
      payslipDate: '11-04-2018',
      createDate: '11-03-2018',
      frozen: false,
    },
    {
      id: 2,
      idUser: 566,
      idType: 2,
      idStatus: 2,
      startDate: '12-04-2018',
      endDate: '12-05-2018',
      note:
        'Quam molestias minima doloribus vel in, quas cupiditate, vitae nesciunt veritatis ipsa quod porro neque numquam aperiam?',
      payslipDate: '12-04-2018',
      createDate: '12-03-2018',
      frozen: true,
    },
    {
      id: 3,
      idUser: 647,
      idType: 1,
      idStatus: 3,
      startDate: '13-04-2018',
      endDate: '13-05-2018',
      note: 'Similique blanditiis officia non libero.',
      payslipDate: '13-04-2018',
      createDate: '13-03-2018',
      frozen: false,
    },
  ],
  isLoading: true,
  types: [{ id: 1, name: 'Unpaid Holiday' }, { id: 2, name: 'Paid Holiday' }],
  status: [
    { id: 1, name: 'PENDING', color: '#aaa' },
    { id: 2, name: 'ACCEPTED', color: '#86dd75' },
    { id: 3, name: 'REJECTED', color: '#ed7f7e' },
  ],
};

const axiosInstance = axios.create({
  headers: { Authorization: 'Token token=f4d91314f64309521727d059b271fe9b' },
});

export const getProfiles = () => axiosInstance.get('https://purrweb-internship.herokuapp.com/api/v1/staff_members');

export const getDetailProfile = id =>
  axiosInstance.get('https://purrweb-internship.herokuapp.com/api/v1/staff_members/'.concat(id));

export const postPersonalInfo = (id, data) =>
  axiosInstance.post(
    'https://purrweb-internship.herokuapp.com/api/v1/staff_members/'.concat(id, '/update_personal_details'),
    {
      firstName: data.firstName,
      surname: data.surname,
      gender: data.gender.value,
      dateOfBirth: data.dateOfBirth,
    },
  );

export const postContactInfo = (id, data) =>
  axiosInstance.post(
    'https://purrweb-internship.herokuapp.com/api/v1/staff_members/'.concat(id, '/update_contact_details'),
    {
      emailAddress: data.email,
      phoneNumber: data.phone ? data.phone : '',
      address: data.address ? data.address : '',
      postcode: data.postcode ? data.postcode : '',
      country: data.country ? data.country : '',
      county: data.county ? data.county : '',
    },
  );

export const postEmploymentInfo = (id, data) =>
  axiosInstance.post(
    'https://purrweb-internship.herokuapp.com/api/v1/staff_members/'.concat(id, '/update_employment_details'),
    {
      nationalInsuranceNumber: data.nationalInsuranceNumber ? data.nationalInsuranceNumber : null,
      sageId: data.sageId ? data.sageId : null,
      hoursPreferenceNote: data.hoursPreferenceNote,
      dayPreferenceNote: data.dayPreferenceNote,
      startsAt: data.startsAt,
      employmentStatus: data.employmentStatus,
      payRateId: data.payRate.id,
      masterVenue: data.masterVenue.id,
      otherVenues: data.otherVenues.map(elem => elem.id),
      staffType: data.staffType.id,
    },
  );

export const fetchGetHolidays = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(initialStateHoliday);
    }, 2000);
  });

export const fetchDeleteHoliday = id => {
  console.log(id);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(id);
    }, 2000);
  });
};

export const fetchEditHoliday = (id, data) => {
  console.log(id, data);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id, data });
    }, 2000);
  });
};
