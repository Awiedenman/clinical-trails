export const searchDataCleaner = (searchData) => {
  return searchData.map(trial => {
    return {
        public_title: trial.public_title,
        target_sample_size: trial.target_sample_size,
        gender: trial.gender,
        registration_date: "2017-05-24T00:00:00.000Z",
        locations: locationInfo(trial),
        persons: personInfo(trial),
        oraganisations: organisationInfo(trial),
        condtions: conditionInfo(trial)

      }
    })
  };
    
    export const locationInfo = ( trial ) => trial.locations.reduce((locationInfo, location) => {
     // console.log( location )
     locationInfo['name'] = location.name ? location.name : 'No location provided.'
    //  locationInfo[location.country] = location.country
    //  locationInfo[location.recruitment_countries] = location.recruitment_countries
     return locationInfo
   }, {})
    
     export const personInfo = (trial) => trial.persons.reduce((personInfo, person) => {
       personInfo['name'] = person.name,
       personInfo['role'] = person.role ? person.role : "no role defined."
       console.log(person.role)
      console.log(person.name)
      return personInfo
    }, {})

    export const organisationInfo = (trial) => trial.organisations.reduce((organisationInfo, organisation) => {
      organisationInfo['name'] = organisation.name,
      //what if there is multiple organisations?
      organisationInfo['role'] = organisation.role
      return organisationInfo
    }, {})

    export const conditionInfo= (trial) => trial.conditions.reduce((conditionInfo, condition) => {
      conditionInfo['name'] = condition.name
      return conditionInfo
    }, {})





// console.log('trials',trial.public_title)
// export const locationInfo = trial.locations.map(location => ({
//   name: location.name,
//   type: location.country,
//   role: recruitment_countries,
// }));