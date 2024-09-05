import React from 'react'
import Text from '../../atoms/Text/index.tsx';
import '../../../App.css';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
export default function index(props) {
  return (
    <div>
        <div className='flexy'>
      <Text size={props.size} text={props.text}  isicon={true}/>
      <InfoOutlinedIcon className='icony' color='inherit' fontSize='medium'/>
        </div>
    </div>
  )
}
