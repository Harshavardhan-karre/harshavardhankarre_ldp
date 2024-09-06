import React from 'react'
import BodyLay from '../components/templates/MainTemp/index.tsx';
import Tabular from '../components/organisms/Row/index.tsx';
import { Stack } from '@mui/material';

export default function Tablepg() {
  return (
    <Stack>
      <BodyLay>
      <Tabular/>
       </BodyLay>
    </Stack>
  )
}
