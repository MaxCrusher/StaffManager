import { createSelector } from 'reselect';

const space = ' ';

export const getStaffMembers = state => state.profiles.profiles.staffMembers;
export const getStaffTypesP = state => state.profiles.profiles.staffTypes;
export const getVenuesP = state => state.profiles.profiles.venues;
export const numProfile = state => state.profiles.numProfiles;

export const getStaffMember = state => state.detailProfile.staffMember;
export const getStaffTypesDP = state => state.detailProfile.staffTypes;
export const getVenuesDP = state => state.detailProfile.venues;
export const payRates = state => state.detailProfile.payRates;

export const getHolidayMembers = state => state.holiday.staffMemberHolidays;
export const getHolidayType = state => state.holiday.types;
export const getHolidayStatus = state => state.holiday.status;

// export const staffTypes = (id, state) => state.profiles.profiles.staffTypes.filter(elem => elem.id === id)[0].name;

export const getHolidays = createSelector(
  getHolidayMembers,
  getHolidayType,
  getHolidayStatus,
  getStaffMembers,
  (holidays, types, stat, members) =>
    holidays.map(hol => ({
      ...hol,
      firstName: members.staffMember
        ? members.filter(elem => elem.staffMembers.id === hol.idUser)[0].staffMembers.firstName
        : null,
      surname: members.staffMember
        ? members.filter(elem => elem.staffMembers.id === hol.idUser)[0].staffMembers.surname
        : null,
      status: stat.filter(elem => elem.id === hol.idStatus)[0].name,
      type: types.filter(elem => elem.id === hol.idType)[0].name,
    })),
);

export const getProfile = createSelector(
  getStaffMembers,
  getStaffTypesP,
  getVenuesP,
  (members, staffs, venues) =>
    members.map(mem => ({
      ...mem,
      staffTypes: staffs.filter(staff => staff.id === mem.staffTypeId)[0].name,
      masterVenue: staffs.filter(staff => staff.id === mem.staffTypeId)[0].color,
      venue: venues.filter(venue => venue.id === mem.masterVenueId)[0],
    })),
);

export const personalData = createSelector(
  getStaffMember,
  member => ({
    id: member.id,
    firstName: member.firstName,
    surname: member.surname,
    gender: member.gender,
    dateOfBirth: member.dateOfBirth,
  }),
);
export const contactData = createSelector(
  getStaffMember,
  member => ({
    email: member.email,
    phone: member.phoneNumber,
    address: member.address,
    country: member.country,
    county: member.county,
    postcode: member.postcode,
  }),
);
const reg = /\d[/]\d[/]\d /g;
export const employmentData = createSelector(
  getStaffMember,
  getStaffTypesDP,
  getVenuesDP,
  payRates,
  (member, types, venues, rates) => ({
    mainVenue: venues
      .map(elem => ({ ...elem, value: elem.name, label: elem.name, id: elem.id }))
      .filter(elem => elem.id === member.masterVenueId)[0],
    otherVenue: member.otherVenueIds.map(
      othVenId =>
        venues
          .map(elem => ({ ...elem, value: elem.name, label: elem.name, id: elem.id }))
          .filter(elem => elem.id === othVenId)[0],
    ),
    venuesMas: venues.map(elem => ({ ...elem, value: elem.name, label: elem.name, id: elem.id })),
    staffTypes: types.map(elem => ({ ...elem, value: elem.name, label: elem.name, id: elem.id })),
    staffType: types
      .map(elem => ({ ...elem, value: elem.name, label: elem.name }))
      .filter(elem => elem.id === member.staffTypeId)[0],
    startsAt: member.startsAt.match(/\d+/g).reverse(),
    payRates: rates.map(rat => ({ ...rat, value: rat.name, label: rat.name })),
    payRate: rates
      .map(rat => ({ ...rat, value: rat.name, label: rat.name, id: rat.id }))
      .filter(rat => rat.id === member.payRateId)[0],
    dayPreference: member.dayPreferenceNote,
    hoursPreference: member.hoursPreferenceNote,
    nationalInsuranceNumber: member.nationalInsuranceNumber,
    employmentStatus: member.statusStatement,
    sageId: member.sageId,
  }),
);

export const getDetailProfile = createSelector(
  getStaffMember,
  getStaffTypesDP,
  getVenuesDP,
  payRates,
  (member, types, venues, rates) => ({
    id: member.id,
    img: member.avatarUrl,
    personalDetail: {
      name: member.firstName + space + member.surname,
      gender: member.gender,
      dateOfBirth: member.dateOfBirth,
    },
    accountDetail: {
      created: member.createdAt,
      status: member.isDisabled,
      user: member.hasUser,
      applicationPassword: member.passwordSetAt,
    },
    contactDetail: {
      email: member.email,
      phone: member.phoneNumber,
      address: member.address,
      country: member.country,
      county: member.county,
      postcode: member.postcode,
    },
    employmentDetail: {
      mainVenue: venues.filter(venue => venue.id === member.masterVenueId)[0],
      otherVenue: member.otherVenueIds.map(elem => venues.filter(ven => ven.id === elem)[0]),
      jobType: types.filter(type => type.id === member.staffTypeId)[0],
      startDate: member.startsAt,
      payRate: rates.filter(rate => rate.id === member.payRateId)[0],
      hourPreference: member.hoursPreferenceNote,
      dayPreference: member.dayPreferenceNote,
      nationalInsuranceNumber: member.nationalInsuranceNumber,
      sageId: member.sageId,
      statusStatement: member.statusStatement,
    },
    mobileApp: {},
  }),
);
