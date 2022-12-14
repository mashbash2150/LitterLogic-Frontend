import React from 'react'
import * as d3 from 'd3'
import { useEffect, useState } from 'react'

import { Chart as ChartJS } from "chart.js/auto"


const Chart = ({ arr, width, height }) => {

  const [data, setData] = useState();
  const [parsed, setParsed] = useState(false)


  const parseData = () => {
    const chartData = [];
    for (let i = 0; i < arr.length; i++) {
      const value = arr[i].action
      console.log("hi", value)
      chartData.push({
        label: arr[i].time,
        value


      });
      console.log("newchartdata", chartData)
    }

    setData(chartData)

    setParsed(true)


  }



  const drawChart = () => {
    const margin = { top: 10, right: 50, bottom: 50, left: 50 }
    //this sets the chart ranges
    const yMinValue = d3.min(data, d => d.value)
    const yMaxValue = d3.min(data, d => d.value)
    const xMinValue = d3.min(data, d => d.label)
    const xMaxValue = d3.min(data, d => d.label)

    const svg = d3
      .select('#container')
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("width", width + margin.left + margin.right)
      .append("g")
      .attr("transform", `translate(${margin.left}.${margin.top})`)

    const xScale = d3.scaleLinear()
      .domain([xMinValue, xMaxValue])
      .range([0, width])

    const yScale = d3.scaleLinear()
      .range([height, 0])
      .domain([yMinValue, yMaxValue])


    svg
      .append('g')
      .attr('class', 'grid')
      .attr('transform', `translate(0,${height})`)
      .call(
        d3.axisBottom(xScale)
          .tickSize(-height)
          .tickFormat(''),);


    svg
      .append('g')
      .attr('class', 'grid')

      .call(
        d3.axisLeft(yScale)
          .tickSize(-width)
          .tickFormat(''),);
    svg
      .append('g')
      .attr("class", "x-axis")
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom().scale(xScale).tickSize(15))

    svg
      .append("g")
      .attr('class', "y-axis")
      .call(d3.axisLeft(yScale));

    const line = d3
      .line()
      .x(d => xScale(d.label))
      .y(d => yScale(d.values))
      .curve(d3.curveMonotoneX)
  }


  useEffect(() => {
    parseData();
    if (data.length > 0) {
      drawChart();

    } else {

      console.log("no data")
    }


  }, [])





  return (
    <div>
      <div id="container" />
    </div>
  )
}


export default Chart