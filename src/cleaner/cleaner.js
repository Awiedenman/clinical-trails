export const searchDataCleaner = (searchData) => {
  return searchData.map(trial => {
    return {
        conditions: conditionsInfo(trial),
        public_title: trial.public_title,
        brief_summary: trial.brief_summary,
        interventions: interventionsCleaner(trial),
        // age_range: trial.age_range ? trial.age_range: 'No max age provided.',
        // min_age_range: trial.age_range.min_age ? trial.age_range.min_age : 'No min age provided.',
        gender: trial.gender ? trial.gender : 'No gender specifications provided for this trial.',
        target_sample_size: trial.target_sample_size ? trial.target_sample_size :'No target sample size specified.',
        registration_date: trial.registration_date ? trial.registration_date : 'No registration date provided.',
        completion_date: trial.completion_date ? trial.completion_date : 'Completion date not available.',
        status: trial.status ? trial.status : 'Trail status not available.',
        recruitment_status: trial.recruitment_status ? trial.recruitment_status : 'Recruitment status not available.',
        locations: locationsInfo(trial),
        persons: personsInfo(trial),
        organisations: organisationsInfo(trial),
        source_name: trial.source.name ? trial.source.name : 'No source name is available.',
        source_info: recordsCleaner(trial)
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
    
    // export const personsInfo = (trial) => trial.persons.map( person => {
    //   return person.name
    // })

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

    export const recordsCleaner = (trial) => trial.records.reduce((recordsInfo, record) => {
      recordsInfo['source_url'] = record.source_url ? record.source_url : 'No trial url available.',
      recordsInfo['terms_and_conditions'] = trial.terms_and_conditions_url ? trial.terms_and_conditions_url : 'No terms and conditions available.'
      return recordsInfo
    }, {})

    export const interventionsCleaner = (trial) => trial.interventions.reduce((interventionsInfo, intervention) => {
      console.log( intervention )
      interventionsInfo['interventions'] = intervention.name ? intervention.name : 'No intervention info available.'
    //   //what if ther are multiple intervations.
      return interventionsInfo
    }, {})
    





// console.log('trials',trial.public_title)
// export const locationInfo = trial.locations.map(location => ({
//   name: location.name,
//   type: location.country,
//   role: recruitment_countries,
// }));