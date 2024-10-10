import React from "react";
import { buttonText } from "../../../constants";
import Button from "../../atoms/Button/index";
import styled from "styled-components";
import theme from "../../../themes";

const StyledTD = styled.td`
  padding: ${theme.spacing(6)};
  text-align: center;
`;

interface Product {
  id: string;
  title: string;
  category: string;
  price: string;
  description: string;
}

interface InputProps extends Product {
  product: Product;
  handleEditDelete: (id: string, num: boolean) => void;
}

export default function index({ product, handleEditDelete }: InputProps) {
  return (
    <tr key={product.id}>
      {Object.values(product).map((value, index) => (
        <StyledTD key={index}>
          {typeof value === "object" ? JSON.stringify(value) : value}
        </StyledTD>
      ))}
      <StyledTD>
        <Button handleButton={() => handleEditDelete(product.id, false)}>
          {buttonText[2]}
        </Button>
      </StyledTD>
      <StyledTD>
        <Button handleButton={() => handleEditDelete(product.id, true)}>
          {buttonText[3]}
        </Button>
      </StyledTD>
    </tr>
  );
}
