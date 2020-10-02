export const getBreweries = async () => {
  let breweries = [];
  try {
    const result = await fetch('https://api.openbrewerydb.org/breweries');
    breweries = await result.json();
  } catch (e) {
    console.error('Error during fetching breweries: ', e);
  }
  return breweries;
};
