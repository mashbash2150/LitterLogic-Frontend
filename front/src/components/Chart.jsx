import React from 'react'
import { line } from "react-chartjs-2"
import { Chart as ChartJS } from "chart.js/auto"

const Chart = ({ chartData }) => {
  return (
    <div>
      <Bar data={chartData} />
    </div>
  )
}

export default Chart