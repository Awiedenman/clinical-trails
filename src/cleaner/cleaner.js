export const searchDataCleaner = (searchData) => {
  return searchData.map(trial => {
    return {
        public_title: trial.public_title,
        target_sample_size: trial.target_sample_size,
        gender: trial.gender,
        registration_date: trial.registration_date,
        completion_date: trial.completion_date ? trial.completion_date : 'Completion date not included.',
        locations: locationsInfo(trial),
        persons: personsInfo(trial),
        oraganisations: organisationsInfo(trial),
        condtions: conditionsInfo(trial)

      }
    })
  };
    
    export const locationsInfo = ( trial ) => trial.locations.reduce((locationsInfo, location) => {
     // console.log( location )
     locationsInfo['name'] = location.name ? location.name : 'No location provided.'
    //  locationInfo[location.country] = location.country
    //  locationInfo[location.recruitment_countries] = location.recruitment_countries
     return locationsInfo
   }, {})
    
     export const personsInfo = (trial) => trial.persons.reduce((personsInfo, person) => {
       personsInfo['name'] = person.name,
       personsInfo['role'] = person.role ? person.role : "no role defined."
       console.log(person.role)
      console.log(person.name)
      return personsInfo
    }, {})

    export const organisationsInfo = (trial) => trial.organisations.reduce((organisationsInfo, organisation) => {
      organisationsInfo['name'] = organisation.name,
      //what if there is multiple organisations?
      organisationsInfo['role'] = organisation.role
      return organisationsInfo
    }, {})

    export const conditionsInfo= (trial) => trial.conditions.reduce((conditionsInfo, condition) => {
      conditionsInfo['name'] = condition.name
      return conditionsInfo
    }, {})





// console.log('trials',trial.public_title)
// export const locationInfo = trial.locations.map(location => ({
//   name: location.name,
//   type: location.country,
//   role: recruitment_countries,
// }));