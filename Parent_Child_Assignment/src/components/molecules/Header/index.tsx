import React from 'react'
import Text from '../../atoms/Text/index.tsx';
import '../../../App.css';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Icon from '../../atoms/Icon/index.tsx'
import {Box} from '@mui/material'
import styled from 'styled-components';
interface InputProps{
  size:number,
  text:string
}
const StyledBox=styled(Box)`
  display:flex;
  gap:10px;
`
export default function index(props:InputProps) {
  return (
        <StyledBox>
      <Text size={props.size} text={props.text}  isicon={true}/>
      <Icon  color="inherit" fontSize="medium"/>
        </StyledBox>
  )
}
