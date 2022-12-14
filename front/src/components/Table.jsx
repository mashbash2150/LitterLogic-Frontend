import React from 'react'
import { BASE_URL } from '../globals'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from "react-router-dom"
import DataTable from "react-data-table-component"
import LineChart from '../charts/LineChart'
// import ArrowDownward from '../@material-ui/icons/ArrowDownward';


const Table = ({ paginationRows, getRecent }) => {
  let { cat_id } = useParams()
  let navigate = useNavigate()
  const [triggerList, setTriggerList] = useState([])
  const [perPage, setPerPage] = useState(5)
  const currentDate = new Date()
  // const sortIcon = <ArrowDownward />;

  const columns = [
    {
      name: "Action",
      selector: (row) => row.action.toUpperCase()
    },
    {
      name: "Time",
      selector: (row) => row.time
    },
    {
      name: "Date",
      selector: (row) => row.date.substring(0, row.date.lastIndexOf('T'))
    },


  ]
  const conditionalRowStyles = [
    {
      when: row => row.action == "enter",
      style: {
        backgroundColor: "lightgrey"
      }
    }
  ]

  const getCatTriggers = async () => {
    //conditionally rendering smaller list if Component is rendered through dashboard (and thus getREcent prop passed in is true)
    const hrs = parseInt(currentDate.getHours()) - 14
    const day = parseInt(currentDate.getDate())
    console.log("today is", day + 1)
    console.log("hours", hrs)
    const res = await axios.get(`${BASE_URL}/triggers/2`)
    if (getRecent == true) {
      const recent = res.data.filter((trig) => {
        if (parseInt(trig.date.substring(8, 10)) === day + 1) {
          console.log(parseInt(trig.time.substring(0, 2)))

          return parseInt(trig.time.substring(0, 2)) >= hrs
        } console.log(parseInt(trig.date.substring(8, 10)))
      })

      console.log("recent", recent)
      setTriggerList(recent)
    } else { setTriggerList(res.data) }


    // setDtArray(parseTimeStamps(triggerList))
  }

  const getTrigger = async (arg) => {
    const res = await axios.get(`${BASE_URL}/triggers/actions/${arg}`)
    navigate(`/triggers/details/${arg}`)
  }

  useEffect(() => {

    getCatTriggers()
  }, [])
  return (
    <div>
      <DataTable
        className='data-table'
        theme="dark"
        title="RECENT ACTIVITY"
        columns={columns}
        data={triggerList}
        pagination
        responsive={true}
        hightlightOnHover={true}
        pointerOnHover={true}
        persistTableHead={true}
        defaultSortAsc={false}
        defaultSortFieldId="2"
        paginationPerPage={paginationRows}
        conditionalRowStyles={conditionalRowStyles}
        onRowClicked={(row, onClick) => { getTrigger(row.id) }}

      />
    </div>
  )
}

export default Table