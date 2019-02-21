import axios from 'axios';

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
