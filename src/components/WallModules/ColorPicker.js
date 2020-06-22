import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Menu, MenuItem, Popover } from "@material-ui/core";
import {ChromePicker} from 'react-color'

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
      // anchorEl={props.anchorEl}
      anchorReference="anchorPosition"
      anchorPosition={{ top: 1000, left: 1150 }}
     
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
    

    
      <ChromePicker
        name="color"
        color={defaultColor}
        // value={this.state.color} - for controlled component
        onChange={(color) =>{
          setDefaultColor(color.hex)
          props.getwallcolor(color)}}
      />
      
    </Popover>
  );
};
export default WallColorPicker;
