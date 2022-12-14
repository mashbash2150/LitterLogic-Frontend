import React from 'react'
import { BASE_URL } from '../globals'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from "react-router-dom"
import DataTable from "react-data-table-component"
import LineChart from '../charts/LineChart'
// import ArrowDownward from '../@material-ui/icons/ArrowDownward';


const Table = ({ paginationRows }) => {
  let { cat_id } = useParams()
  let navigate = useNavigate()
  const [triggerList, setTriggerList] = useState([])
  const [perPage, setPerPage] = useState(5)
  // const sortIcon = <ArrowDownward />;

  const columns = [
    {
      name: "Action",
      selector: (row) => row.action.toUpperCase()
    },
    {
      name: "Date",
      selector: (row) => row.date.substring(0, row.date.lastIndexOf('T'))
    },
    {
      name: "Time",
      selector: (row) => row.time
    },

  ]

  const getCatTriggers = async () => {

    const res = await axios.get(`${BASE_URL}/triggers/2`)
    setTriggerList(res.data)

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
        title="RECENT ACTIVITY"
        columns={columns}
        data={triggerList}
        pagination
        responsive={true}
        hightlightOnHover={true}
        pointerOnHover={true}
        persistTableHead={true}
        paginationPerPage={paginationRows}
        onRowClicked={(row, onClick) => { getTrigger(row.id) }}
      />
    </div>
  )
}

export default Table