import axios from "axios";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../../atoms/Button";
import { Header } from "../../../constants";
import Input from "../../atoms/Input";
import { Box } from "@mui/material";
import theme from "../../../themes";
interface Product {
  id: string;
  title: string;
  category: string;
  price: string;
  description: string;
}

interface InputProps {
  state: Product[];
  setState: Dispatch<SetStateAction<Product[]>>;
}

const StyledTD = styled.td`
  padding: ${theme.spacing(5)};
`;

export default function Index({ state, setState }: InputProps) {
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  useEffect(() => {
    axios
      .get("http://localhost:4000/products")
      .then((response) => {
        setState(response.data);
      })
      .catch((err) => {
        alert("API Fetch Error, Try again");
      });
  }, [setState]);

  const handleEditDelete = (id: string, opt: boolean) => {
    if (opt) {
      axios.delete(`http://localhost:4000/products/${id}`)
        .then(() => {
          alert(`Item with id: ${id} is deleted`);
          setState((prevState) => prevState.filter((product) => product.id !== id));
        })
        .catch(() => {
          alert("Error in Fetching and Processing API");
        });
    } else {
 
      const productToEdit = state.find((product) => product.id === id);
      if (productToEdit) {
        setEditingProduct(productToEdit);
      }
    }
  };

  const handleSaveEdit = () => {
    if (editingProduct) {
      axios.put(`http://localhost:4000/products/${editingProduct.id}`, editingProduct)
        .then(() => {
          alert(`Item with id: ${editingProduct.id} is updated`);
          setState((prevState) =>
            prevState.map((product) =>
              product.id === editingProduct.id ? editingProduct : product
            )
          );
          setEditingProduct(null);
        })
        .catch(() => {
          alert("Error in Fetching and Processing API");
        });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditingProduct((prev) => prev ? { ...prev, [name]: value } : null);
  };

  return (
    <div>
      {editingProduct ? (
        <Box>
          <h3>Edit Product</h3>
          <Input
            type="text"
            name="title"
            value={editingProduct.title}
            handleInput={handleInputChange}
          />
          <Input
            type="text"
            name="category"
            value={editingProduct.category}
            handleInput={handleInputChange}
          />
          <Input
            type="number"
            name="price"
            value={editingProduct.price}
            handleInput={handleInputChange}
          />
          <Input
            type="text"
            name="description"
            value={editingProduct.description}
            handleInput={handleInputChange}
          />
          <Button handleButton={handleSaveEdit}>Save</Button>
        </Box>
      ) : (
        <table border={2} cellSpacing={0}>
          <thead>
            <tr>
              {Header}
            </tr>
          </thead>
          <tbody>
            {state.map((product) => (
              <tr key={product.id}>
                <StyledTD>{product.id}</StyledTD>
                <StyledTD>{product.title}</StyledTD>
                <StyledTD>{product.category}</StyledTD>
                <StyledTD>{product.price}</StyledTD>
                <StyledTD>{product.description}</StyledTD>
                <StyledTD>
                  <Button handleButton={() => handleEditDelete(product.id, false)}>
                    Edit
                  </Button>
                </StyledTD>
                <StyledTD>
                  <Button handleButton={() => handleEditDelete(product.id, true)}>
                    Delete
                  </Button>
                </StyledTD>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
