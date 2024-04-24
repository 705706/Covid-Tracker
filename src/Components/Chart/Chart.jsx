import React, { useState, useEffect } from "react";
import { fetchDailyData,fetchData } from "../../api";
import { Line, Bar } from "react-chartjs-2";
import styles from "./Chart.module.css";
import "chart.js/auto";

const Chart = ({data:{active,recovered,deaths},country}) => {
  const [dailyData, setdailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setdailyData(await fetchDailyData());
    };
   
    fetchAPI();
  },[]);



 const lineChart = dailyData.length  
 ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets:
         [
          {
            data: dailyData.map(({ recovered }) => recovered),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255,0,0,0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  console.log(active,recovered,deaths)
  
  // const barChart = (
  //   data.active
  //   ? (
  //     <Bar
  //     data={{
  //       labels:['Active','Recovered','Deaths'],
  //       datasets:[{
  //         label:'People',
  //         backgroundColor:[
  //           'rgba(255, 0, 0, 0.5)',
  //         'rgba(0, 0, 255, 0.5)',
  //         'rgba(0, 14, 0, 0.5)'
  //       ],
  //       data:[cases.value,recovered.value,deaths.value]
  //       }]
  //     }}
  //     options={{
  //       legend: {display:false},
  //       title:{ display:true, text:`Cuurent State in ${country}`}
  //     }}
  //     />
  //   ) : null
  // )

  return <div className={styles.container}>{ /*country ? barChart : */lineChart}</div>;
}

export default Chart;


