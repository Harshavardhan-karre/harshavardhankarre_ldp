import React from 'react'
import Text from '../../atoms/Text/index.tsx';
import CheckBox from '../../atoms/CheckBox/index.tsx';
export default function index() {
  const info=[["Name","Type","Per Payment","Term length","Payment"],
    ["Contract 1","Monthly","$12000","12 months(12.0% fee)", "$63300"],
  ["Contract 6","Monthly","$6000","12 months(12.0% fee)", "$63300"],
  ["Contract 5","Monthly","$6000","12 months(12.0% fee)", "$63300"],
  ["Contract 4","Monthly","$6000","12 months(12.0% fee)", "$63300"],
  ["Contract 3","Monthly","$6000","12 months(12.0% fee)", "$63300"],
  ["Contract 2","Monthly","$6000","12 months(12.0% fee)", "$21100"]];

  const Data = ({ Tag, data }) => {
    return (
      <>
        {data.map((item, index) => (
          <Tag key={index}>
            <Text text={item}/>
            </Tag>
        ))}
      </>
    );
  }
  const Rowy=({ished,i})=>{
   return (
    <tr>
      <CheckBox type={"checkbox"}/>
      <Data Tag={ished ? 'th':'td'} data={info[i]}></Data>
    </tr>
   )
}
  return (
    <div>
      <Rowy ished={true} i={0}/>

      <Rowy ished={false} i={1}/>
      <Rowy ished={false} i={2}/>
      <Rowy ished={false} i={3}/>
      <Rowy ished={false} i={4}/>
      <Rowy ished={false} i={5}/>
      <Rowy ished={false} i={6}/>
    </div>
  )
}
