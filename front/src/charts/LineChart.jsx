import React from 'react'
import { BASE_URL } from '../globals'
import axios from 'axios'
import { useEffect, useState, useCallback } from 'react'
import "../style.css"
import { MarkSeries, VerticalBarSeries, XYPlot, XAxis, YAxis, LineSeries, HorizontalGridLines, VerticalGridLines } from 'react-vis';

import { Line, Bar } from 'react-chartjs-2';

const LineChart = ({ catId }) => {
  const [triggerList, setTriggerList] = useState([])


  const data = {
    labels: ['Sun', 'Mon', 'Tues', 'Weds', 'Thurs', 'Fri', 'Sat'],
    data: [2, 5, 7, 2, 6, 5, 8, 9]



  };
  const options = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }

  // const getChartData = async () => {

  //   const res = await axios.get(`${BASE_URL}/triggers/${catId}`)
  //   console.log('triggers', res.data)
  //   setTriggerList(res.data.slice(0, 6))
  // }

  useEffect(() => {

    // getChartData()

  }, [])


  return (
    <div>LineChart
      <div className="App">

        {/* <XYPlot height={300} width={300}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <LineSeries data={data} />
        </XYPlot> */}
        <Bar data={data} options={options} />

      </div>
    </div>
  )
}

export default LineChart