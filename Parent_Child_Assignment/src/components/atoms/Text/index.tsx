import React from 'react'
import styled from 'styled-components';

const StyledSpan=styled.span`
 float:left
`
export default function index(props) {
  return (
    <div>
      <StyledSpan style={{fontSize:props.size}}>{props.text}</StyledSpan>
    </div>
  )
}
