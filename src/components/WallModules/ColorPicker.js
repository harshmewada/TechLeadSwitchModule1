import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Menu, MenuItem, Popover } from "@material-ui/core";
import ColorPicker from "material-ui-color-picker";

const useStyles = makeStyles((theme) => ({
  menu: {
    marginRight: theme.spacing(5),
  },
}));
const WallColorPicker = (props) => {
  const classes = useStyles();
  const [defaultColor, setDefaultColor] = React.useState("#fff");
  return (
    <Popover
      className={classes.menu}
      open={Boolean(props.anchorEl)}
      anchorEl={props.anchorEl}
      anchorOrigin={{
        // vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      {...props}
    >
      <ColorPicker
        name="color"
        defaultValue="#000"
        // value={this.state.color} - for controlled component
        onChange={(color) => console.log(color)}
      />
    </Popover>
  );
};
export default WallColorPicker;
