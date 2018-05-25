
export const searchDataCall = async ( condition ) => {
  const url = `https://api.opentrials.net/v1/search?q=${ condition }&page=1&per_page=100`;
  const rawOpenTrailsData = await fetch(url);
  const openTrailsData = await rawOpenTrailsData.json();
  console.log('open trails', openTrailsData )
  return openTrailsData;
}
