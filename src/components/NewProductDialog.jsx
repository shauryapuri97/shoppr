import React, { useCallback, useEffect, useMemo, useState } from "react";
import { CustomDialog } from "../shared/components/CustomDialog";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsCreating,
  setisCreating,
  selectProductCategories,
} from "../store/slices/configSlice";
import {
  DialogTitle,
  DialogActions,
  DialogContent,
  Button,
  TextField,
  MenuItem,
  Box,
} from "@mui/material";
import { createProduct } from "../store/thunks/configThunk";

const NewProductDialog = () => {
  const dispatch = useDispatch();

  const productCategories = useSelector(selectProductCategories) ?? [];
  const isCreating = useSelector(selectIsCreating);

  const [fields, setFields] = useState({
    title: "",
    description: "",
    category: [],
    price: "",
  });

  const isFormValid = useMemo(
    () => fields.title && fields.category && fields.price,
    [fields]
  );

  const onClose = () => {
    dispatch(setisCreating(false));
  };

  const onSubmit = useCallback(() => {
    dispatch(createProduct(fields));
    onClose();
  }, [fields]);

  useEffect(() => {
    if (productCategories.length) {
      setFields({ ...fields, category: productCategories[0] });
    }
  }, [productCategories]);

  return (
    <CustomDialog isOpen={isCreating}>
      <DialogTitle>Create New Product</DialogTitle>
      <DialogContent
        sx={{ display: "flex", flexDirection: "column", gap: 2, minWidth: 600 }}
      >
        <TextField
          required
          id="title"
          label="Title"
          fullWidth
          variant="standard"
          value={fields?.title}
          onChange={({ target }) =>
            setFields({ ...fields, title: target.value })
          }
        />
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
        <Box display="flex" gap={2}>
          <TextField
            required
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
            required
            select
            label="Category"
            variant="standard"
            value={fields?.category}
            onChange={({ target }) =>
              setFields({ ...fields, category: target.value })
            }
          >
            {productCategories?.map((category) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </TextField>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={onSubmit} disabled={!isFormValid}>
          Submit
        </Button>
      </DialogActions>
    </CustomDialog>
  );
};

export default NewProductDialog;
