import React, { useState } from "react";
import { Box, styled } from "@mui/material";
import TextInput from "../../molecules/TextInput/index";
import TabularForm from "../TabularForm";
import Button from "../../atoms/Button";
import theme from "../../../themes";
import { buttonText, inputTypes } from "../../../constants";

interface Product {
  id: string;
  title: string;
  category: string;
  price: string;
  description: string;
}

interface InputProps {
  products: Product[];
  newProduct: Product;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submitProduct: (e: React.FormEvent<HTMLFormElement>) => void;
  deleteProduct: (id: string) => void;
  updateProduct: (product: Product) => void;
}

export default function Index({
  products,
  newProduct,
  handleInput,
  submitProduct,
  deleteProduct,
  updateProduct,
}: InputProps) {
  const [buttonData, setButton] = useState({
    addNew: false,
    displayData: false,
  });

  const handleDisplay = (num: number) => {
    setButton((prev) => ({
      ...prev,
      addNew: num === 1 ? !prev.addNew : prev.addNew,
      displayData: num === 2 ? !prev.displayData : prev.displayData,
    }));
  };

  const StyledBox = styled(Box)`
    display: flex;
    gap: ${theme.spacing(100)};
    margin: ${theme.spacing(10)};
  `;

  const displayTabular = () => {
    handleDisplay(2);
  };
  const addTabular = () => {
    handleDisplay(1);
  };

  return (
    <Box>
      <StyledBox>
        <Button handleButton={displayTabular}>{buttonText[0]}</Button>
        <Button handleButton={addTabular}>{buttonText[1]}</Button>
      </StyledBox>

      {buttonData.addNew && (
        <form onSubmit={submitProduct}>
          {Object.keys(newProduct).map((i) => (
            <TextInput
              text={`${i}`}
              type={i === "price" ? "number" : "text"}
              name={`${i}`}
              handleInput={handleInput}
            />
          ))}
          <Button type="submit" handleButton={() => null}>
            {buttonText[4]}
          </Button>
        </form>
      )}

      <br />
      <br />
      <br />

      {buttonData.displayData && (
        <TabularForm
          state={products}
          deleteProduct={deleteProduct}
          updateProduct={updateProduct}
        />
      )}
    </Box>
  );
}
