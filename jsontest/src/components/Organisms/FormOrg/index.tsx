import { Box, styled } from '@mui/material';
import React, { useState } from 'react';
import TextInput from '../../molecules/TextInput/index';
import TabularForm from '../TabularForm';
import Button from '../../atoms/Button';
import axios from 'axios';

interface StateProps {
  Addnew: boolean;
  DisplayData: boolean;
}

interface Product {
  id: string;
  title: string;
  category: string;
  price: string;
  description: string;
}

export default function Index() {
  const [buttonData, setButton] = useState<StateProps>({
    Addnew: false,
    DisplayData: false,
  });

  const [state, setState] = useState<Product[]>([]);

  const [newProduct, setNewProduct] = useState<Product>({
    id: '',
    title: '',
    category: '',
    price: '',
    description: '',
  });

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setNewProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  const SubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    axios.post(`http://localhost:4000/products`, newProduct)
      .then(() => {
        setState((prevState) => [...prevState, newProduct]);
        alert(`Item with id: ${newProduct.id} is inserted`);
      })
      .catch(() => {
        alert("Error in Fetching and Processing API");
      });

    setNewProduct({ id: '', title: '', category: '', price: '', description: '' });
  };

  const handleDisplay = (data: string) => {
    setButton((prev) => ({ ...prev, [data]: !prev[data as keyof StateProps] }));
  };

  const StyledBox = styled(Box)`
    display: flex;
    gap: 200px;
    margin: 20px;
  `;

  return (
    <div>
      <StyledBox>
        <Button handleButton={() => handleDisplay('DisplayData')}>
          Display Tabular Data
        </Button>
        <Button handleButton={() => handleDisplay('Addnew')}>
          + Add New Tabular Data
        </Button>
      </StyledBox>
      {buttonData.Addnew && (
        <form onSubmit={SubmitForm}>
          <TextInput
            text="ID:"
            type="text"
            name="id"
            handleInput={handleInput}
          />
          <TextInput
            text="Title:"
            type="text"
            name="title"
            handleInput={handleInput}
          />
          <TextInput
            text="Category:"
            type="text"
            name="category"
            handleInput={handleInput}
          />
          <TextInput
            text="Price:"
            type="number"
            name="price"
            handleInput={handleInput}
          />
          <TextInput
            text="Description:"
            type="text"
            name="description"
            handleInput={handleInput}
          />
          <Button type="submit" handleButton={()=>null}>Submit</Button>
        </form>
      )}
      <br></br>
      <br></br>
      <br></br>
      {buttonData.DisplayData && <TabularForm state={state} setState={setState} />}
    </div>
  );
}











// import { Box, styled } from '@mui/material';
// import React, { useState } from 'react';
// import TextInput from '../../molecules/TextInput/index';
// import TabularForm from '../TabularForm';
// import Button from '../../atoms/Button';


// interface StateProps {
//   Addnew: boolean;
//   DisplayData: boolean;
// }

// interface Product {
//   id: string;
//   title: string;
//   category: string;
//   price: string;
//   description: string;
// }

// export default function Index() {
//   const [buttonData, setButton] = useState<StateProps>({
//     Addnew: false,
//     DisplayData: false,
//   });

//   const [state, setState] = useState<Product[]>([]);

//   const [newProduct, setNewProduct] = useState<Product>({
//     id: '',
//     title: '',
//     category: '',
//     price: '',
//     description: '',
//   });

//   function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
//     const { name, value } = e.target;
//     setNewProduct((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   }
//   const SubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setState((prevState) => [...prevState, newProduct]);
//   };

//   const handleDisplay = (data: string) => {
//     const newData = { ...buttonData };
//     if (data === 'Addnew') {
//       newData.Addnew = !newData.Addnew;
//     } else {
//       newData.DisplayData = !newData.DisplayData;
//     }
//     setButton(newData);
//   };

//   const StyledBox=styled(Box)`
//     display:flex;
//     gap:200px;
//     margin:20px;
//   `

//   return (
//     <div>
//       <StyledBox>
//       <Button handleButton={() => handleDisplay('DisplayData')}>
//         Display Tabular Data
//       </Button>
//       <Button handleButton={() => handleDisplay('Addnew')}>
//         + Add New Tabular Data
//       </Button>
//       </StyledBox>

//       {buttonData.Addnew && (
//         <form onSubmit={SubmitForm}>
//           <TextInput
//             text="ID:"
//             type="text"
//             name="id"
//             state={newProduct}
//             handleInput={handleInput}
//           />
//           <TextInput
//             text="Title:"
//             type="text"
//             name="title"
//             state={newProduct}
//             handleInput={handleInput}
//           />
//           <TextInput
//             text="Category:"
//             type="text"
//             name="category"
//             state={newProduct}
//             handleInput={handleInput}
//           />
//           <TextInput
//             text="Price:"
//             type="number"
//             name="price"
//             state={newProduct}
//             handleInput={handleInput}
//           />
//           <TextInput
//             text="Description:"
//             type="text"
//             name="description"
//             state={newProduct}
//             handleInput={handleInput}
//           />
//         <Button handleButton={SubmitForm} >Submit</Button>
//         </form>
//       )}
//        <br /><br />
//       {buttonData.DisplayData && <TabularForm state={state} setState={setState} />}
//     </div>
//   );
// }
