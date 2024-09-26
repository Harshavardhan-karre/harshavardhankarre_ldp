import styled from "styled-components";
import theme from "./themes";

const StyledTD = styled.td`
  padding: ${theme.spacing(5)};
`;

export const Header = (
  <>
    <StyledTD>ID</StyledTD>
    <StyledTD>Title</StyledTD>
    <StyledTD>Category</StyledTD>
    <StyledTD>Price</StyledTD>
    <StyledTD>Description</StyledTD>
    <StyledTD>Edit</StyledTD>
    <StyledTD>Delete</StyledTD>
  </>
);

export const inputTypes = { text1: "text", text2: "number" };

export const buttonText = [
  "Display Tabular Data",
  "+ Add New Tabular Data",
  "Edit",
  "Delete",
  "Submit",
  "Edit Product",
];

export const Messages = [
  "http://localhost:4000/products",
  "Error deleting the product.",
  "Error updating the product.",
  "Error fetching product data:",
  "Error in Fetching and Processing API",
];
