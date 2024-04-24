import axios from "axios";

const url1 = "https://disease.sh/v3/covid-19/countries/";

const url="https://disease.sh/v3/covid-19/countries/usa";

const url2="https://restcountries.com/v3.1/all";

const url3="https://data.covid19india.org/v4/min/timeseries.min.json"

export const fetchData = async (country) => {
  let  changebaleUrl=url;

if(country){
  changebaleUrl=`${url2}/${country}`
}
  try {
    const {data:{cases,recovered,deaths,active,updated}} = await axios.get(url);
    return {cases,recovered,deaths,active,updated};
    }catch (error) {
      console.log(error)
    }
  } ;

  export const fetchDailyData=async()=>{
    try{
      const {data}=await axios.get(url1)
      const modifiedData = data.map((dailyData)=>({
        recovered: dailyData.recovered,
        deaths: dailyData.deaths,       
      }));
      return modifiedData;
    }catch(error){
      console.log(error);
    }
  }

  