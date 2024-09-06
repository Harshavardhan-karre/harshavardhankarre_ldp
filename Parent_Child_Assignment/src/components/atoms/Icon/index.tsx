import React from 'react'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import  '../../../App.css'
import styled from 'styled-components';
type InputProps={
  color:"inherit" | "disabled" | "action" | "primary" | "secondary" | "error" | "info" | "success" | "warning",
  fontSize:"small" | "inherit" | "large" | "medium"
}
const StyledInfo=styled(InfoOutlinedIcon)`
 margin-top:8px;
`

export default function index(props:InputProps) {
  return (
       <StyledInfo color={props.color} fontSize={props.fontSize}/>
  )
}

