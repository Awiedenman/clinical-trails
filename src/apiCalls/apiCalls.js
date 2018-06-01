export const searchDataCall = async (condition) => {
  const url = `https://api.opentrials.net/v1/search?q=${ condition }&page=1&per_page=100`;
  // https: //api.opentrials.net/v1/search?q=arthritis&page=1&per_page=100
  try {
    const rawOpenTrialsData = await fetch(url);
    if (rawOpenTrialsData.status === 200) {
      const openTrialsData = await rawOpenTrialsData.json();
      // console.log('open trails', openTrailsData)
      return openTrialsData;
    } else {
      throw Error(`Status failure: ${rawOpenTrialsData.status}`)
    }
  } catch (error) {
    throw Error;
  }
}