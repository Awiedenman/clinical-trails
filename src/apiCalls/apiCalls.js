export const searchDataCall = async (condition) => {
  const url = `https://api.opentrials.net/v1/search?q=${ condition }&page=1&per_page=100`;
  // https: //api.opentrials.net/v1/search?q=arthritis&page=1&per_page=100
  try {
    const rawOpenTrailsData = await fetch(url);
    if (rawOpenTrailsData.status === 200) {
      const openTrailsData = await rawOpenTrailsData.json();
      console.log('open trails', openTrailsData)
      return openTrailsData;
    } else {
      throw Error(`Status failure: ${rawOpenTrailsData.status}`)
    }
  } catch (error) {
    throw Error;
  }
}