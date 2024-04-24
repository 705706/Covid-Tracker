import './App.css'
import Cards from './Components/Cards/Cards'
import Chart from './Components/Chart/Chart'
import Countrypicker from './Components/Countrypicker/Countrypicker'
import styles from './App.module.css';
import { fetchData } from './api';
import React from 'react';
import covid from './images/covid.png'

class App extends React.Component {

  state={
    data:{},
    country:'',
  }


  async componentDidMount(){
    const fetchedData=await fetchData();
    this.setState({data:fetchedData})
  }

handleCountryChange=async(country)=>{
  const fetchedData=await fetchData(country);
  this.setState({data: fetchedData,country:country});
}
  render() {

    const {data,country}=this.state;
   return(
    <div className={styles.container}>
      <img className={styles.image} src={covid} alt="COVID-19 Image" />
    <Cards data={data}/>
    <Countrypicker handleCountryChange={this.handleCountryChange}/>
    <Chart data={data} country={country}/>
    </div>
   );
}
  
}

export default App
