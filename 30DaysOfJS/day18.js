
const countriesAPI = 'https://restcountries.com/v2/all' // countries api
const catsAPI = 'https://api.thecatapi.com/v1/breeds' // cats api

//Read the countries API using fetch and print the name of country, capital, languages, population and area.

const fetchCountries = async () =>
{
    try
    {
        const response_countries = await fetch(countriesAPI)
        const countries_json = await response_countries.json()
        //const countries= JSON.parse(countries_json,undefined)

        
        for(const c of countries_json)
        {
            //console.log("Name:",c['name'],"Capital:",c['capital'],"Languages:",c['languages'],"Population:",c['population'],"Area:",c['area'])
        }


    }catch(err)
    {
        console.error(err)
    }

}

fetchCountries()

//Print out all the cat names in to catNames variable.


const fetchCats = async () =>
{
    try
    {
        const response_cats = await fetch(catsAPI)
        const cats_json = await response_cats.json()
        //const countries= JSON.parse(countries_json,undefined)

        
        for(const c of cats_json)
        {
console.log(cats_json[0])
            //console.log("Name:",c['name'])
        }


    }catch(err)
    {
        console.error(err)
    }

}

fetchCats()