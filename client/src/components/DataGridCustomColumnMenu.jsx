import {
  GridColumnMenu,
  GridColumnMenuFilterItem,
  GridColumnMenuHideItem,
} from "@mui/x-data-grid";

const CustomColumnMenu = (props) => {
  return (
    <GridColumnMenu
      hideMenu={props.hideMenu}
      colDef={props.colDef}
      open={props.open}
      slots={{
        columnMenuSortItem: null,
      }}
    >
      <GridColumnMenuFilterItem
        onClick={props.hideMenu}
        colDef={props.colDef}
      />
      <GridColumnMenuHideItem onClick={props.hideMenu} colDef={props.colDef} />
    </GridColumnMenu>
  );
};

export default CustomColumnMenu;
