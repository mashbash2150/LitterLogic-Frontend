import React from 'react'
import { BASE_URL } from '../globals'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from "react-router-dom"
import DataTable from "react-data-table-component"
import Button from "react-data-table-component"
import LineChart from '../charts/LineChart'
// import ArrowDownward from '../@material-ui/icons/ArrowDownward';


const Table = ({ paginationRows, getRecent }) => {
  const Button = () => <button type="button">Delete Trigger</button>;
  let { cat_id } = useParams()
  let navigate = useNavigate()
  const [triggerList, setTriggerList] = useState([])
  const [perPage, setPerPage] = useState(5)
  const currentDate = new Date()
  const normDate = new Date(Date.parse())
  // const sortIcon = <ArrowDownward />;

  const columns = [
    {
      name: "Action",
      selector: (row) => row.action.toUpperCase()
    },
    {
      name: "Day",
      selector: (row) => Date(Date.parse(row.createdAt)).substring(0, 3)
      //row.createdAt.substring(0, row.date.lastIndexOf('T'))
    },
    {
      name: "Date",
      selector: (row) => row.date.substring(0, row.date.lastIndexOf('T'))
    },
    {
      name: "Time",
      selector: (row) => normDate(row.createdAt)
      // Date(Date.parse(row.createdAt)).substring(16, 24)

      //normDate.getUTCHours(Date.parse(row.createdAt))
      // (normDate.getUTCHours(row.createdAt)) + ":" + (normDate.getUTCMinutes(row.createdAt)) + ":" + (normDate.getUTCSeconds(row.createdAt))
      //Date(Date.parse(row.createdAt)).substring(11, 19)
    },
    {
      name: '',
      button: true,
      cell: (row) => <Button onClick={() => deleteTrigger(row.id)}>Delete Entry</Button>,
    },




  ]
  // const conditionalRowStyles = [
  //   {
  //     when: row => row.action == "enter",
  //     style: {
  //       backgroundColor: "lightgrey"
  //     }
  //   }
  // ]


  const getCatTriggers = async () => {
    const theDate = new Date(Date.parse("2022-12-14T14:27:27.642Z"))
    console.log("thedate", theDate(Date.parse("2022-12-14T14:27:27.642Z")))

    //conditionally rendering smaller list if Component is rendered through dashboard (and thus getREcent prop passed in is true)
    const hrs = parseInt(currentDate.getHours()) - 6
    const day = parseInt(currentDate.getDate())
    console.log("today is", day, "hour (-6) is", hrs)
    console.log("hours", hrs)
    const res = await axios.get(`${BASE_URL}/triggers/2`)
    if (getRecent == true) {
      const recent = res.data.filter((trig) => {
        if (parseInt(trig.createdAt.substring(8, 10)) === day) {
          console.log(parseInt(trig.time.substring(0, 2)))

          return parseInt(trig.createdAt.substring(11, 13)) >= hrs
        } console.log(parseInt(trig.date.substring(8, 10)))
      })
      // if (getRecent == true) {
      //   const recent = res.data.filter((trig) => {
      //     if (parseInt(trig.createdAt.substring(8, 10)) === day + 1) {
      //       console.log(parseInt(trig.time.substring(0, 2)))

      //       return parseInt(trig.time.substring(0, 2)) >= hrs
      //     } console.log(parseInt(trig.date.substring(8, 10)))
      //   })

      console.log("recent", recent)
      setTriggerList(recent)
    } else { setTriggerList(res.data) }


    // setDtArray(parseTimeStamps(triggerList))
  }

  const deleteTrigger = async (arg) => {
    alert("Are you sure you want to delete this entry?")
    const res = await axios.get(`${BASE_URL}/triggers/actions/${arg}`)
  }

  useEffect(() => {

    getCatTriggers()
  }, [])
  return (
    <div>
      <DataTable
        className='data-table'
        theme="solarize"
        title="RECENT ACTIVITY"
        columns={columns}
        data={triggerList}
        pagination
        striped
        responsive={true}
        hightlightOnHover={true}
        pointerOnHover={true}
        persistTableHead={true}
        defaultSortAsc={false}
        defaultSortFieldId="2"
        noHeader

        paginationPerPage={paginationRows}
      //conditionalRowStyles={conditionalRowStyles}
      // onRowClicked={(row, onClick) => { getTrigger(row.id) }}

      />
    </div>
  )
}

export default Table