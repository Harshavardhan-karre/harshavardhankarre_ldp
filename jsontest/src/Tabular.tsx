import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Box} from '@mui/material'
import styled from 'styled-components'
import {Header} from './Constants/constants'
interface Product {
  id: string;
  title: string;
  category:string,
  price:string,
  description:string,
}


const StyledBox=styled(Box)`
display:flex;
justify-content:center;
align-items:center;
height:100vh
`
const StyledRD=styled.td`
padding:10px;
`

export default function Pract() {
  const [items, setItems] = useState<Product[]>([]);

  useEffect(() => {
    axios.get<Product[]>("http://localhost:4000/products")
      .then((response) => {
        console.log(response.data);
        setItems(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const GetDetails: React.FC<Product> = ({ id, title,category,price,description }) => {
    return <tr>
      <StyledRD>{id}</StyledRD>
      <StyledRD>{title}</StyledRD>
      <StyledRD>{category}</StyledRD>
      <StyledRD>{price}</StyledRD>
      <StyledRD>{description}</StyledRD>
      </tr>;
  };

  return (
    <StyledBox>
      <table border={2} cellSpacing={0}>
        {Header}
      {items.map((item) => (
        <GetDetails key={item.id} id={item.id} title={item.title} category={item.category} price={item.price} description={item.description}/>
      ))}
      </table>
    </StyledBox>
  );
}

