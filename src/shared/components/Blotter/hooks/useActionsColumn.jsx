import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { GridActionsCellItem } from "@mui/x-data-grid";
import { batch, useDispatch } from "react-redux";
import {
  setIsEditing,
  setSelectedProduct,
} from "../../../../store/slices/configSlice";

export const useActionsColumn = (columns) => {
  const dispatch = useDispatch();

  return [
    ...columns,
    {
      field: "actions",
      type: "actions",
      headerClassName: "header-theme",
      getActions: (params) => [
        <GridActionsCellItem
          icon={<EditIcon />}
          onClick={() => {
            batch(() => {
              dispatch(setIsEditing(true));
              dispatch(setSelectedProduct(params.row));
            });
          }}
          label="Edit"
        />,
        <GridActionsCellItem
          icon={<DeleteIcon />}
          onClick={() => {
            dispatch(setSelectedProduct(params.row));
          }}
          label="Delete"
        />,
      ],
    },
  ];
};
