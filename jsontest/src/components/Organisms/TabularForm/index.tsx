import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";
import { Box } from "@mui/material";
import theme from "../../../themes";
import { buttonText, Header } from "../../../constants"; // Assuming this is a valid header component or array
import TableRow from "../../molecules/TableRow";

interface Product {
  id: string;
  title: string;
  category: string;
  price: string;
  description: string;
}

interface OrganismProps {
  state: Product[];
  deleteProduct?: (id: string) => void;
  updateProduct?: (product: Product) => void;
}

const StyledTable = styled.table`
  width: fit-content;
  border-collapse: collapse;
`;

export default function Index({
  state,
  deleteProduct,
  updateProduct,
}: OrganismProps) {
  const [editingProduct, setEditingProduct] = useState<Product | null>();

  const handleEditDelete = (id: string, opt: boolean) => {
    if (opt) {
      deleteProduct && deleteProduct(id);
    } else {
      const productToEdit = state.find((product) => product.id === id);
      if (productToEdit) {
        setEditingProduct(productToEdit);
      }
    }
  };

  const handleSaveEdit = () => {
    if (editingProduct) {
      updateProduct && updateProduct(editingProduct);
      setEditingProduct(null);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditingProduct((prev) => (prev ? { ...prev, [name]: value } : null));
  };

  return (
    <Box>
      {editingProduct ? (
        <Box>
          <h3>{buttonText[5]}</h3>
          {Object.keys(state[0]).map((i) => (
            <Input
              key={i}
              type={i === "price" ? "number" : "text"}
              name={i}
              value={editingProduct[i as keyof typeof editingProduct] || ""}
              handleInput={handleInputChange}
            />
          ))}
          <Button handleButton={handleSaveEdit}>Save</Button>
        </Box>
      ) : (
        <StyledTable border={1}>
          <thead>
            <tr>{Header}</tr>
          </thead>
          <tbody>
            {state.map((product) => (
              <TableRow
                product={product}
                handleEditDelete={handleEditDelete}
                id={""}
                title={""}
                category={""}
                price={""}
                description={""}
              />
            ))}
          </tbody>
        </StyledTable>
      )}
    </Box>
  );
}
