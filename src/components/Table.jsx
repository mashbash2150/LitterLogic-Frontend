import React from 'react'
import { BASE_URL } from '../globals'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from "react-router-dom"
import DataTable, { createTheme } from "react-data-table-component"

// import ArrowDownward from '../@material-ui/icons/ArrowDownward';


const Table = ({ paginationRows, getRecent }) => {
  // const Button = () => <button className="del-button" type="button" onClick={(arg) => deleteTrigger(arg.id)}>Delete Trigger</button>;
  let { cat_id } = useParams()
  let navigate = useNavigate()
  const [triggerList, setTriggerList] = useState([])
  const [perPage, setPerPage] = useState(5)
  const [deleted, setDeleted] = useState(false)
  const currentDate = new Date()
  const normDate = new Date()
  // const sortIcon = <ArrowDownward />;

  const columns = [
    {
      name: "Action",
      selector: (row) => row.action.toUpperCase(),
      fontSize: '2vw',
      conditionalCellStyles: [
        {
          when: row => row.action == "enter",
          style: {
            fontSize: "2vw",
            backgroundColor: "rgb(159, 199, 129,0.7)"
          }
        },
        {
          when: row => row.action == "exit",
          style: {
            fontSize: "2vw",
            backgroundColor: "rgba(172, 10, 56, 0.9)"
          }
        }
      ]

    },
    {
      name: "Date",
      selector: (row) => row.date.substring(0, row.date.lastIndexOf('T')),
      sortable: true,
      style: {
        color: "black",
        textAlign: 'right',
        backgroundColor: 'rgba(219, 225, 200, 0.877)',
        fontSize: '2vw'
      }

      //selector: (row) => row.date.substring(0, row.date.lastIndexOf('T'))
      //selector: (row) => Date.parse(row.createdAt).substring(0, 3)
      //row.createdAt.substring(0, row.date.lastIndexOf('T'))
    },
    // {
    //   name: "Date",
    //   selector: (row) => Date(Date.parse(row.createdAt))
    //   //row.date.substring(0, row.date.lastIndexOf('T'))
    // },
    {
      name: "Time",
      selector: (row) => row.time,
      sortable: true,
      style: {
        color: "black",
        textAlign: 'center',
        backgroundColor: 'rgba(219, 225, 200, 0.877)',
        fontSize: '2vw',
      }
      // Date.getUTCHours(row.createdAt) + ":" + Date.getUTCMinutes(row.createdAt) + ":" + Date.getUTCSeconds(row.createdAt)
      // Date(Date.parse(row.createdAt)).substring(16, 24)

      //normDate.getUTCHours(Date.parse(row.createdAt))
      // (normDate.getUTCHours(row.createdAt)) + ":" + (normDate.getUTCMinutes(row.createdAt)) + ":" + (normDate.getUTCSeconds(row.createdAt))
      //Date(Date.parse(row.createdAt)).substring(11, 19)
    },
    {
      name: '',
      button: true,
      style: {
        color: "black",
        textAlign: 'center',
        backgroundColor: 'rgba(219, 225, 200, 0.877)',
        fontSize: '2vw',
      },
      // cell: (row) => <Button arg={row.id} >Delete Entry</Button>,
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
    console.log("thedate", theDate)

    //conditionally rendering smaller list if Component is rendered through dashboard (and thus getREcent prop passed in is true)
    const hrs = parseInt(currentDate.getHours()) - 6
    const day = parseInt(currentDate.getDate())
    console.log("today is", day, "hour (-6) is", hrs)
    console.log("hours", hrs)
    const res = await axios.get(`${BASE_URL}/triggers/3`)
    console.log(res.data)
    setTriggerList(res.data)
    // if (getRecent == true) {
    //   const recent = res.data.filter((trig) => {
    //     if (parseInt(trig.createdAt) === day) {
    //       //if (parseInt(trig.createdAt.substring(8, 10)) === day) {
    //       //console.log(parseInt(trig.time.substring(0, 2)))

    //       return parseInt(trig.createdAt) >= hrs
    //       //return parseInt(trig.createdAt.substring(11, 13)) >= hrs
    //     } console.log(parseInt(trig.date))
    //     //} console.log(parseInt(trig.date.substring(8, 10)))
    //   })
    //   // if (getRecent == true) {
    //   //   const recent = res.data.filter((trig) => {
    //   //     if (parseInt(trig.createdAt.substring(8, 10)) === day + 1) {
    //   //       console.log(parseInt(trig.time.substring(0, 2)))

    //   //       return parseInt(trig.time.substring(0, 2)) >= hrs
    //   //     } console.log(parseInt(trig.date.substring(8, 10)))
    //   //   })

    //   console.log("recent", recent)
    //   setTriggerList(recent)
    // } else { setTriggerList(res.data) }


    // setDtArray(parseTimeStamps(triggerList))
  }

  const deleteTrigger = async (arg) => {

    setDeleted(false)

    window.confirm("Are you sure you want to delete this entry?")
    // const response = await axios.delete(`http://localhost:3001/api/makers/${id}/projects/${arg}`)
    const response = await axios.delete(`${BASE_URL}/triggers/actions/${arg}`)
    setDeleted(true)
  }


  useEffect(() => {

    getCatTriggers()
  }, [deleted])
  return (
    <div>
      <DataTable
        className='data-table'
        theme="dark"
        title="LITTERBOX EVENTS"
        columns={columns}
        data={triggerList}
        pagination

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
      <div>.</div>
    </div>


  )
}

export default Table