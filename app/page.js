// 'use client'

// import {Box, Button, Stack, Typography, Modal, TextField} from "@mui/material"
// import {firestore} from "@/firebase"
// import {collection, doc, getDocs, query, setDoc, deleteDoc, getDoc} from "firebase/firestore"
// import {useEffect, useState} from "react"

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'white',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
//   display: 'flex',
//   flexDirection: 'column',
//   gap: 3, 
// };

// export default function Home() {
//   const [pantry, setPantry] = useState([])

//   const [open, setOpen] = useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   const [itemName, setItemName] = useState('')

//   const updatePantry = async () => {
//     const snapshot = query(collection(firestore, 'pantry'))
//     const docs = await getDocs(snapshot)
//     const pantryList = []
//     docs.forEach((doc) => {
//       pantryList.push({name: doc.id, ...doc.data()})
//     })
//     console.log(pantryList)
//     setPantry(pantryList)
//   }

//   useEffect(() => {
//     updatePantry()
//   }, [])

//   const addItem = async (item) => {
//     const docRef = doc(collection(firestore, 'pantry'), item)
//     //check if exists
//     const docSnap = await getDoc(docRef)
//     if (docSnap.exists()) {
//       const {count} = docSnap.data()
//       await setDoc(docRef, {count: count + 1}) 
//     }
//     else{
//       await setDoc(docRef, {count: 1})
//     }
//     await updatePantry()
//   }

//   const removeItem = async (item) => {
//     const docRef = doc(collection(firestore, 'pantry'), item)
//     const docSnap = await getDoc(docRef)
//     if (docSnap.exists()) {
//       const {count} = docSnap.data()
//       if (count === 1){
//         await deleteDoc(docRef)
//       } else{
//         await setDoc(docRef, {count: count - 1}) 
//       }
//     }
//     await updatePantry()
//   }
//   return (
//     <Box
//       width="100vw"
//       height="100vh"
//       display={'flex'}
//       justifyContent={'center'}
//       flexDirection={'column'}
//       alignItems={'center'}
//       gap={2}
//     >
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}> 
//           <Typography id="modal-modal-title" variant="h6" component="h2">
//             Add Item
//           </Typography>
//           <Stack width="100%" direction={'row'} spacing={2}>
//           <TextField
//             id="outlined-basic"
//             label="Item"
//             variant="outlined"
//             fullWidth
//             value={itemName}
//             onChange={(e) => setItemName(e.target.value)}
//           />
//           <Button variant="outlined"
//           onClick={() => {
//             addItem(itemName)
//             setItemName('')
//             handleClose()
//           }}
//           >Add</Button>
//         </Stack>
//         </Box>
//       </Modal>
//       <Button variant="contained" onClick={handleOpen}
//       >Add
//       </Button>
//       <Box border={'1px solid #333'}>
//       <Box 
//         width="800px"
//         height="100px"
//         bgcolor={'#ADD8E6'}
//         display={'flex'}
//         justifyContent={'center'}
//         alignItems={'center'}
//       >
//         <Typography variant={'h2'} color={'#333'} textAlign={'center'}>
//           Pantry Item
//         </Typography>
//       </Box>
//       <Stack 
//         width="800px"
//         height="300px"
//         spacing={2}
//         overflow={'auto'}
//       >
//         {pantry.map(({ name, count }) => (
//             <Box
//               key={name}
//               width="100%"
//               minHeight="150px"
//               display={'flex'}
//               justifyContent={'space-between'}
//               alignItems={'center'}
//               bgcolor={'#f0f0f0'}
//               paddingX={5}
//             >
//               <Typography variant={'h5'} color={'#333'} textAlign={'center'}
//               >
//                 {
//                   //capitalize the first letter of the item
//                   name.charAt(0).toUpperCase() + name.slice(1)
//                 }
//               </Typography> 

//               <Typography variant={'h5'} color={'#333'} textAlign={'center'}>
//                 Quantity: {count}
//               </Typography>

//             <Button variant="contained" onClick={() => removeItem(name)}>
//               Remove
//             </Button>
//             </Box>
//           ))}
//         </Stack>
//       </Box>
//     </Box>
//   )
// }
// 'use client'

// import { Box, Button, Stack, Typography, Modal, TextField, IconButton } from "@mui/material";
// import { Search as SearchIcon } from '@mui/icons-material';
// import { firestore } from "@/firebase";
// import { collection, doc, getDocs, query, setDoc, deleteDoc, getDoc } from "firebase/firestore";
// import { useEffect, useState } from "react";

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'white',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
//   display: 'flex',
//   flexDirection: 'column',
//   gap: 3,
// };

// export default function Home() {
  
//   const [pantry, setPantry] = useState([]);
//   const [open, setOpen] = useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);
//   const [itemName, setItemName] = useState('');
//   const [searchTerm, setSearchTerm] = useState('');

//   const updatePantry = async () => {
//     const snapshot = query(collection(firestore, 'pantry'));
//     const docs = await getDocs(snapshot);
//     const pantryList = [];
//     docs.forEach((doc) => {
//       pantryList.push({ name: doc.id, ...doc.data() });
//     });
//     setPantry(pantryList);
//   };

//   useEffect(() => {
//     updatePantry();
//   }, []);

//   const addItem = async (item) => {
//     const docRef = doc(collection(firestore, 'pantry'), item);
//     const docSnap = await getDoc(docRef);
//     if (docSnap.exists()) {
//       const { count } = docSnap.data();
//       await setDoc(docRef, { count: count + 1 });
//     } else {
//       await setDoc(docRef, { count: 1 });
//     }
//     await updatePantry();
//   };

//   const removeItem = async (item) => {
//     const docRef = doc(collection(firestore, 'pantry'), item);
//     const docSnap = await getDoc(docRef);
//     if (docSnap.exists()) {
//       const { count } = docSnap.data();
//       if (count === 1) {
//         await deleteDoc(docRef);
//       } else {
//         await setDoc(docRef, { count: count - 1 });
//       }
//     }
//     await updatePantry();
//   };

//   return (
//     <Box
//       width="100vw"
//       height="100vh"
//       display="flex"
//       flexDirection="column"
//       alignItems="center"
//       bgcolor="#fff"
//       p={2}
//     >
//       <Box
//         width="100%"
//         display="flex"
//         justifyContent="space-between"
//         alignItems="center"
//         p={2}
//         bgcolor="#f5f5f5"
//         borderBottom="1px solid #ddd"
//       >
//         <Typography variant="h4" color="#333">
//           StockSmart
//         </Typography>
//         <Box display="flex" alignItems="center">
//           <TextField
//             variant="outlined"
//             size="small"
//             placeholder="Search items..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             InputProps={{
//               endAdornment: (
//                 <IconButton>
//                   <SearchIcon />
//                 </IconButton>
//               ),
//             }}
//           />
//         </Box>
//       </Box>

//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           <Typography id="modal-modal-title" variant="h6" component="h2">
//             Add Item
//           </Typography>
//           <Stack width="100%" direction={'row'} spacing={2}>
//             <TextField
//               id="outlined-basic"
//               label="Item"
//               variant="outlined"
//               fullWidth
//               value={itemName}
//               onChange={(e) => setItemName(e.target.value)}
//             />
//             <Button
//               variant="outlined"
//               onClick={() => {
//                 addItem(itemName);
//                 setItemName('');
//                 handleClose();
//               }}
//             >
//               Add
//             </Button>
//           </Stack>
//         </Box>
//       </Modal>

//       <Typography variant="body1" color="#666" marginBottom={2}>
//         Add, remove, or search for items in your pantry!
//       </Typography>

//       <Box width="800px" bgcolor="#f5f5f5" borderRadius="8px" p={2} boxShadow="0px 4px 8px rgba(0,0,0,0.1)">
//         <Box
//           height="100px"
//           bgcolor="#ADD8E6"
//           display="flex"
//           justifyContent="center"
//           alignItems="center"
//           borderRadius="8px"
//           mb={2}
//         >
//           <Typography variant="h2" color="#333" textAlign="center">
//             Pantry Items
//           </Typography>
//         </Box>
//         <Stack width="100%" spacing={2} height="300px" overflow="auto">
//           {pantry
//             .filter((item) =>
//               item.name.toLowerCase().includes(searchTerm.toLowerCase())
//             )
//             .map(({ name, count }) => (
//               <Box
//                 key={name}
//                 width="100%"
//                 minHeight="100px"
//                 display="flex"
//                 justifyContent="space-between"
//                 alignItems="center"
//                 bgcolor="#f0f0f0"
//                 paddingX={2}
//                 borderRadius="4px"
//                 boxShadow="0px 2px 4px rgba(0,0,0,0.1)"
//               >
//                 <Typography variant="h5" color="#333" textAlign="center">
//                   {name.charAt(0).toUpperCase() + name.slice(1)}
//                 </Typography>

//                 <Typography variant="h6" color="#333" textAlign="center">
//                   Quantity: {count}
//                 </Typography>

//                 <Button variant="contained" onClick={() => removeItem(name)}>
//                   Remove
//                 </Button>
//               </Box>
//             ))}
//         </Stack>
//       </Box>
//     </Box>
//   );
// }


// 'use client'

// import { Box, Button, Stack, Typography, Modal, TextField, IconButton, MenuItem, Select, FormControl, InputLabel } from "@mui/material";
// import { Search as SearchIcon } from '@mui/icons-material';
// import { firestore } from "@/firebase";
// import { collection, doc, getDocs, query, setDoc, deleteDoc, getDoc } from "firebase/firestore";
// import { useEffect, useState } from "react";


// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'white',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
//   display: 'flex',
//   flexDirection: 'column',
//   gap: 3,
// };

// export default function Home() {
//   const [pantry, setPantry] = useState([]);
//   const [open, setOpen] = useState(false);
//   const [itemName, setItemName] = useState('');
//   const [itemQuantity, setItemQuantity] = useState('');
//   const [itemCategory, setItemCategory] = useState('');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [categories, setCategories] = useState(['Fruits', 'Vegetables', 'Dairy']); // Example categories

//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   const updatePantry = async () => {
//     const snapshot = query(collection(firestore, 'pantry'));
//     const docs = await getDocs(snapshot);
//     const pantryList = [];
//     docs.forEach((doc) => {
//       pantryList.push({ name: doc.id, ...doc.data() });
//     });
//     setPantry(pantryList);
//   };

//   useEffect(() => {
//     updatePantry();
//   }, []);

//   const addItem = async () => {
//     const docRef = doc(collection(firestore, 'pantry'), itemName);
//     const docSnap = await getDoc(docRef);
//     if (docSnap.exists()) {
//       const { count } = docSnap.data();
//       await setDoc(docRef, { count: count + Number(itemQuantity), category: itemCategory });
//     } else {
//       await setDoc(docRef, { count: Number(itemQuantity), category: itemCategory });
//     }
//     setItemName('');
//     setItemQuantity('');
//     setItemCategory('');
//     handleClose();
//     await updatePantry();
//   };

//   const removeItem = async (item) => {
//     const docRef = doc(collection(firestore, 'pantry'), item);
//     const docSnap = await getDoc(docRef);
//     if (docSnap.exists()) {
//       const { count } = docSnap.data();
//       if (count <= 1) {
//         await deleteDoc(docRef);
//       } else {
//         await setDoc(docRef, { count: count - 1 });
//       }
//     }
//     await updatePantry();
//   };

//   return (
//     <Box
//       width="100vw"
//       height="100vh"
//       display="flex"
//       flexDirection="column"
//       alignItems="center"
//       bgcolor="#fff"
//       p={2}
//     >
//       <Box
//         width="100%"
//         display="flex"
//         justifyContent="space-between"
//         alignItems="center"
//         p={2}
//         bgcolor="#f5f5f5"
//         borderBottom="1px solid #ddd"
//       >
//         <Typography variant="h4" color="#333">
//           StockSmart
//         </Typography>
//         <Box display="flex" alignItems="center">
//           <TextField
//             variant="outlined"
//             size="small"
//             placeholder="Search items..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             InputProps={{
//               endAdornment: (
//                 <IconButton>
//                   <SearchIcon />
//                 </IconButton>
//               ),
//             }}
//           />
//         </Box>
//       </Box>

//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           <Typography id="modal-modal-title" variant="h6" component="h2">
//             Add Item
//           </Typography>
//           <Stack spacing={2}>
//             <TextField
//               label="Item Name"
//               variant="outlined"
//               value={itemName}
//               onChange={(e) => setItemName(e.target.value)}
//             />
//             <TextField
//               label="Quantity"
//               variant="outlined"
//               type="number"
//               value={itemQuantity}
//               onChange={(e) => setItemQuantity(e.target.value)}
//             />
//             <FormControl fullWidth>
//               <InputLabel>Category</InputLabel>
//               <Select
//                 value={itemCategory}
//                 onChange={(e) => setItemCategory(e.target.value)}
//                 label="Category"
//               >
//                 {categories.map((category) => (
//                   <MenuItem key={category} value={category}>
//                     {category}
//                   </MenuItem>
//                 ))}
//                 <MenuItem value="Other">Other</MenuItem>
//               </Select>
//             </FormControl>
//             <Button
//               variant="contained"
//               onClick={addItem}
//             >
//               Add
//             </Button>
//           </Stack>
//         </Box>
//       </Modal>

//       <Typography variant="body1" color="#666" marginBottom={2}>
//         Add, remove, or search for items in your pantry!
//       </Typography>

//       <Box width="800px" bgcolor="#f5f5f5" borderRadius="8px" p={2} boxShadow="0px 4px 8px rgba(0,0,0,0.1)">
//         <Box
//           height="100px"
//           bgcolor="#ADD8E6"
//           display="flex"
//           justifyContent="center"
//           alignItems="center"
//           borderRadius="8px"
//           mb={2}
//         >
//           <Typography variant="h2" color="#333" textAlign="center">
//             Pantry Items
//           </Typography>
//         </Box>
//         <Stack width="100%" spacing={2} height="300px" overflow="auto">
//           {pantry
//             .filter((item) =>
//               item.name.toLowerCase().includes(searchTerm.toLowerCase())
//             )
//             .map(({ name, count, category }) => (
//               <Box
//                 key={name}
//                 width="100%"
//                 minHeight="100px"
//                 display="flex"
//                 justifyContent="space-between"
//                 alignItems="center"
//                 bgcolor="#f0f0f0"
//                 paddingX={2}
//                 borderRadius="4px"
//                 boxShadow="0px 2px 4px rgba(0,0,0,0.1)"
//               >
//                 <Typography variant="h5" color="#333" textAlign="center">
//                   {name.charAt(0).toUpperCase() + name.slice(1)}
//                 </Typography>

//                 <Typography variant="h6" color="#333" textAlign="center">
//                   Quantity: {count}
//                 </Typography>

//                 <Typography variant="body2" color="#666" textAlign="center">
//                   Category: {category}
//                 </Typography>

//                 <Button variant="contained" onClick={() => removeItem(name)}>
//                   Remove
//                 </Button>
//               </Box>
//             ))}
//         </Stack>
//       </Box>
//     </Box>
//   );
// }

'use client'

import { Box, Button, Stack, Typography, Modal, TextField, IconButton, MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import { Search as SearchIcon } from '@mui/icons-material';
import { firestore } from "@/firebase";
import { collection, doc, getDocs, query, setDoc, deleteDoc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  gap: 3,
};

export default function Home() {
  const [pantry, setPantry] = useState([]);
  const [categories, setCategories] = useState([]);
  const [openAddItemModal, setOpenAddItemModal] = useState(false);
  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState('');
  const [itemCategory, setItemCategory] = useState('');
  const [newCategory, setNewCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const updatePantry = async () => {
    const snapshot = query(collection(firestore, 'pantry'));
    const docs = await getDocs(snapshot);
    const pantryList = docs.docs.map(doc => ({ name: doc.id, ...doc.data() }));
    setPantry(pantryList);
  };

  const updateCategories = async () => {
    const snapshot = query(collection(firestore, 'categories'));
    const docs = await getDocs(snapshot);
    const categoryList = docs.docs.map(doc => doc.id);
    setCategories(categoryList);
  };

  useEffect(() => {
    updatePantry();
    updateCategories();
  }, []);

  const addItem = async () => {
    if (!itemName || !itemQuantity || !itemCategory) return;
    const docRef = doc(collection(firestore, 'pantry'), itemName);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const { count } = docSnap.data();
      await setDoc(docRef, { count: count + parseInt(itemQuantity) });
    } else {
      await setDoc(docRef, { count: parseInt(itemQuantity), category: itemCategory });
    }
    await updatePantry();
    setOpenAddItemModal(false);
    setItemName('');
    setItemQuantity('');
    setItemCategory('');
  };

  const addCategory = async () => {
    if (!newCategory) return;
    const docRef = doc(collection(firestore, 'categories'), newCategory);
    await setDoc(docRef, {});
    setNewCategory('');
    setOpenAddItemModal(false);
    updateCategories();
  };

  const removeItem = async (item) => {
    const docRef = doc(collection(firestore, 'pantry'), item);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const { count } = docSnap.data();
      if (count === 1) {
        await deleteDoc(docRef);
      } else {
        await setDoc(docRef, { count: count - 1 });
      }
    }
    await updatePantry();
  };

  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      bgcolor="#fff"
      p={2}
    >
      <Box
        width="100%"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        p={2}
        bgcolor="#f5f5f5"
        borderBottom="1px solid #ddd"
      >
        <Typography variant="h4" color="#333">
          StockSmart
        </Typography>
        <Box display="flex" alignItems="center">
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search items..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              endAdornment: (
                <IconButton>
                  <SearchIcon />
                </IconButton>
              ),
            }}
          />
          <Button variant="contained" onClick={() => setOpenAddItemModal(true)} sx={{ ml: 2 }}>
            Add Item
          </Button>
        </Box>
      </Box>

      <Modal
        open={openAddItemModal}
        onClose={() => setOpenAddItemModal(false)}
        aria-labelledby="modal-add-item-title"
        aria-describedby="modal-add-item-description"
      >
        <Box sx={style}>
          <Typography id="modal-add-item-title" variant="h6" component="h2">
            Add Item
          </Typography>
          <Stack spacing={2}>
            <TextField
              label="Item Name"
              variant="outlined"
              fullWidth
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
            />
            <TextField
              label="Quantity"
              type="number"
              variant="outlined"
              fullWidth
              value={itemQuantity}
              onChange={(e) => setItemQuantity(e.target.value)}
            />
            <FormControl fullWidth variant="outlined">
              <InputLabel>Category</InputLabel>
              <Select
                value={itemCategory}
                onChange={(e) => setItemCategory(e.target.value)}
                label="Category"
              >
                {categories.map((cat) => (
                  <MenuItem key={cat} value={cat}>{cat}</MenuItem>
                ))}
                <MenuItem value="add_new">Add New Category</MenuItem>
              </Select>
            </FormControl>
            {itemCategory === 'add_new' && (
              <TextField
                label="New Category"
                variant="outlined"
                fullWidth
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
              />
            )}
            <Button
              variant="contained"
              onClick={() => {
                if (itemCategory === 'add_new') {
                  addCategory();
                } else {
                  addItem();
                }
              }}
            >
              Add
            </Button>
          </Stack>
        </Box>
      </Modal>

      <Typography variant="body1" color="#ff69b4" marginBottom={2}>
        Add, remove, update, or search for items in your pantry!
      </Typography>

      <Box width="800px" bgcolor="#f5f5f5" borderRadius="8px" p={2} boxShadow="0px 4px 8px rgba(0,0,0,0.1)">
        <Box
          height="100px"
          bgcolor="#ADD8E6"
          display="flex"
          justifyContent="center"
          alignItems="center"
          borderRadius="8px"
          mb={2}
        >
          <Typography variant="h2" color="#333" textAlign="center">
            Pantry Items
          </Typography>
        </Box>
        <Stack width="100%" spacing={2} height="300px" overflow="auto">
          {pantry
            .filter((item) =>
              item.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map(({ name, count }) => (
              <Box
                key={name}
                width="100%"
                minHeight="100px"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                bgcolor="#f0f0f0"
                paddingX={2}
                borderRadius="4px"
                boxShadow="0px 2px 4px rgba(0,0,0,0.1)"
              >
                <Typography variant="h5" color="#333" textAlign="center">
                  {name.charAt(0).toUpperCase() + name.slice(1)}
                </Typography>
                <Typography variant="h6" color="#333" textAlign="center">
                  Quantity: {count}
                </Typography>
                <Button variant="contained" onClick={() => removeItem(name)}>
                  Remove
                </Button>
              </Box>
            ))}
        </Stack>
      </Box>
    </Box>
  );
}


