import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Menu, MenuItem } from "@material-ui/core";
import { CirclePicker } from "react-color";

const useStyles = makeStyles((theme) => ({
  menu: {
    marginRight: theme.spacing(5),
  },
}));
const WallColorPicker = (props) => {
  const classes = useStyles();
  return (
    <Menu
      className={classes.menu}
      open={props.open}
      anchorEl={props.anchorEl}
      //   anchorOrigin={{
      //     // vertical: "bottom",
      //     horizontal: "left",
      //   }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      {...props}
    >
      <MenuItem>
        <CirclePicker
          onChangeComplete={(color) => {
            props.getwallcolor(color);
            props.onClose();
          }}
        />
      </MenuItem>
    </Menu>
  );
};
export default WallColorPicker;
