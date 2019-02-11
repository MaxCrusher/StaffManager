export const getProfiles = fetch('https://purrweb-internship.herokuapp.com/api/v1/staff_members', {
  headers: { Authorization: 'Token token=f4d91314f64309521727d059b271fe9b' },
}).then(response => response.json());
export const getDetailProfile = id =>
  fetch('https://purrweb-internship.herokuapp.com/api/v1/staff_members/'.concat(id), {
    headers: { Authorization: 'Token token=f4d91314f64309521727d059b271fe9b' },
  }).then(response => response.json());
