export const searchDataCleaner = ( searchData ) => {
  return searchData.map( trial => {
    return {
      public_title: trial.public_title,
      target_sample_size: trial.target_sample_size,
      gender: trial.gender,
    }
  })
}
// console.log('trials',trial.public_title)