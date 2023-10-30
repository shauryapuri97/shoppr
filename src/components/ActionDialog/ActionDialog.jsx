import React, { useEffect, useState } from "react";
import {
  DialogContent,
  DialogTitle,
  DialogActions,
  DialogContentText,
  Button,
  TextField,
  Box,
  MenuItem,
} from "@mui/material";
import { CustomDialog } from "../../shared/components/CustomDialog";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSelectedProduct,
  selectIsEditing,
  resetActionDialog,
  selectProductCategories,
} from "../../store/slices/configSlice";
import { deleteProduct, updateProduct } from "../../store/thunks/configThunk";

const initialise = (selectedProduct) => ({
  title: selectedProduct?.title,
  description: selectedProduct?.description,
  price: selectedProduct?.price,
  category: selectedProduct?.category,
});

const ActionDialog = () => {
  const dispatch = useDispatch();

  const selectedProduct = useSelector(selectSelectedProduct);
  const productCategories = useSelector(selectProductCategories);
  const isEditing = useSelector(selectIsEditing);

  const [fields, setFields] = useState(initialise(selectedProduct));

  const onClose = () => {
    dispatch(resetActionDialog());
  };

  const onSubmit = () => {
    if (!isEditing) {
      dispatch(deleteProduct(selectedProduct));
    } else {
      dispatch(updateProduct(fields));
    }
    onClose();
  };

  useEffect(() => {
    setFields(initialise(selectedProduct));
  }, [selectedProduct]);

  return (
    <CustomDialog isOpen={!!selectedProduct}>
      <DialogTitle>
        {isEditing ? (
          <TextField
            id="title"
            label="Title"
            fullWidth
            variant="standard"
            value={fields?.title}
            onChange={({ target }) =>
              setFields({ ...fields, title: target.value })
            }
          />
        ) : (
          `Delete: ${selectedProduct?.title}`
        )}
      </DialogTitle>
      <DialogContent sx={{ minWidth: 600 }}>
        {isEditing ? (
          <Box>
            <Box display="flex" sx={{ gap: 2 }}>
              {selectedProduct?.image && (
                <img src={selectedProduct.image} width={250} height={250} />
              )}
              <TextField
                id="description"
                label="Description"
                variant="standard"
                multiline
                value={fields?.description}
                fullWidth
                onChange={({ target }) =>
                  setFields({ ...fields, description: target.value })
                }
              />
            </Box>
            <Box
              display="flex"
              sx={{ overflow: "auto", flexWrap: "wrap", gap: 2, marginTop: 2 }}
            >
              <TextField
                id="price"
                variant="standard"
                value={fields?.price}
                label="Price"
                type="number"
                onChange={({ target }) =>
                  setFields({ ...fields, price: target.value })
                }
              />
              <TextField
                select
                label="Category"
                variant="standard"
                value={fields?.category ?? productCategories[0]}
                onChange={({ target }) =>
                  setFields({ ...fields, category: target.value })
                }
              >
                {productCategories.map((category) => (
                  <MenuItem key={category} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
          </Box>
        ) : (
          <DialogContentText>
            This is a permanent action, are you sure you'd like to continue?
          </DialogContentText>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={onSubmit}>{isEditing ? "Save" : "Confirm"}</Button>
      </DialogActions>
    </CustomDialog>
  );
};

export default ActionDialog;
