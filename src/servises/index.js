import axios from 'axios';

export const getProfiles = fetch('https://purrweb-internship.herokuapp.com/api/v1/staff_members', {
  headers: { Authorization: 'Token token=f4d91314f64309521727d059b271fe9b' },
}).then(response => response.json());

export const getDetailProfile = id =>
  fetch('https://purrweb-internship.herokuapp.com/api/v1/staff_members/'.concat(id), {
    headers: { Authorization: 'Token token=f4d91314f64309521727d059b271fe9b' },
  }).then(response => response.json());

export const postPersonalInfo = (id, data) =>
  axios
    .post(
      'https://purrweb-internship.herokuapp.com/api/v1/staff_members/'.concat(id, '/update_personal_details'),
      JSON.stringify({
        firstName: data.firstName,
        surname: data.surname,
        gender: data.select,
        dateOfBirth: '12-12-1912',
      }),
      {
        headers: {
          Authorization: 'Token token=f4d91314f64309521727d059b271fe9b',
          'Content-Type': 'application/json; charset=utf-8',
        },
      },
    )
    .then(response => response.data)
    .catch(error => console.log(error));

export const postContactInfo = (id, data) =>
  axios
    .post(
      'https://purrweb-internship.herokuapp.com/api/v1/staff_members/'.concat(id, '/update_contact_details'),
      JSON.stringify({
        emailAddress: data.email,
        phoneNumber: data.phone,
        address: data.address,
        postcode: data.postcode,
        country: data.country,
        county: data.county,
      }),
      {
        headers: {
          Authorization: 'Token token=f4d91314f64309521727d059b271fe9b',
          'Content-Type': 'application/json; charset=utf-8',
        },
      },
    )
    .then(response => response.data)
    .catch(error => console.log(error));
