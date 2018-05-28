export const searchDataCleaner = (searchData) => {
  return searchData.map(trial => {
    return {
        public_title: trial.public_title,
        target_sample_size: trial.target_sample_size,
        gender: trial.gender,
        registration_date: "2017-05-24T00:00:00.000Z",
        locations: trial.locations.reduce((locationInfo, location) => {
          locationInfo[location.name] = location.name
          locationInfo[location.country] = location.country
          locationInfo[location.recruitment_countries] = location.recruitment_countries
          return locationInfo
        }, {}),
        persons: trial.persons.reduce((personInfo, person) => {
          personInfo[person.name] = person.name
          return personInfo
        }, {})
    }
  })
};

// export const doctorInfo = trials.persons.map(person => ({
//   name: person.name
// }))




// console.log('trials',trial.public_title)
// export const locationInfo = trial.locations.map(location => ({
//   name: location.name,
//   type: location.country,
//   role: recruitment_countries,
// }));