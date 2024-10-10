import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import MainTemp from "../../components/Templates/MainTemp/index";
import FormOrg from "../../components/Organisms/FormOrg";
import TabularForm from "../../components/Organisms/TabularForm";
import axios from "axios";
import { Messages } from "../../constants";
interface Product {
  id: string;
  title: string;
  category: string;
  price: string;
  description: string;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);

  const [newProduct, setNewProduct] = useState<Product>({
    id: "",
    title: "",
    category: "",
    price: "",
    description: "",
  });

  useEffect(() => {
    axios
      .get(`${Messages[0]}`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch(() => {
        alert(`${Messages[3]}`);
      });
  }, [setProducts]);

  const deleteProduct = (id: string) => {
    axios
      .delete(`${Messages[0]}/${id}`)
      .then(() => {
        alert(`Product with id: ${id} has been deleted.`);
        setProducts((prevState) =>
          prevState.filter((product) => product.id !== id)
        );
      })
      .catch(() => {
        alert(`${Messages[1]}`);
      });
  };

  const updateProduct = (updatedProduct: Product) => {
    axios
      .put(`${Messages[0]}/${updatedProduct.id}`, updatedProduct)
      .then(() => {
        console.log(updateProduct);
        alert(`Product with id: ${updatedProduct.id} has been updated.`);
        setProducts((prevState) =>
          prevState.map((product) =>
            product.id === updatedProduct.id ? updatedProduct : product
          )
        );
      })
      .catch((err) => {
        alert(`${Messages[2]}` + err);
      });
  };
  useEffect(() => {
    axios
      .get(`${Messages[0]}`)
      .then((response) => setProducts(response.data))
      .catch((error) => console.error(`${Messages[3]}`, error));
  }, []);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitProduct = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const exists = products.some((product) => product.id === newProduct.id);

    if (exists) {
      alert(
        `Product with ID: ${newProduct.id} already exists. Please use a unique ID.`
      );
      return;
    }
    axios
      .post(`${Messages[0]}`, newProduct)
      .then(() => {
        setProducts((prev) => [...prev, newProduct]);
        alert(`Item with id: ${newProduct.id} is inserted`);
        setNewProduct({
          id: "",
          title: "",
          category: "",
          price: "",
          description: "",
        });
      })
      .catch(() => {
        alert(`${Messages[4]}`);
      });
  };

  return (
    <Box>
      <MainTemp>
        <FormOrg
          products={products}
          newProduct={newProduct}
          handleInput={handleInput}
          submitProduct={submitProduct}
          deleteProduct={deleteProduct}
          updateProduct={updateProduct}
        />
      </MainTemp>
    </Box>
  );
}
