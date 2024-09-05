import React from 'react'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import  '../../../App.css'
export default function index(props) {
  return (
       <InfoOutlinedIcon className="iconic" color={props.color} fontSize={props.fontSize}/>
  )
}

