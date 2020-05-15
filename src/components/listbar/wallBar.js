import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Divider, Menu, MenuItem } from "@material-ui/core";
import SizeModuleData from "../../static/sizeModuleData";
import ListBar from "./index";
import ListBarItem from "./listbarItem";
import { selectSizeModule, handleEdit } from "../../actions/sizeaction";
import { useDispatch, useSelector } from "react-redux";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import WallModuleData from "../../static/wallModuleData";
import { selectGlassModule } from "../../actions/glassactions";
import clsx from "clsx";
import { ClickAwayListener } from "@material-ui/core";
import { setWallColorAction } from "../../actions/wallactions";
import ColorPicker from "../WallModules/ColorPicker";

const useStyles = makeStyles((theme) => ({
  icon: {
    // height: "50%",
    // width: "50%",
  },
  active: {
    borderWidth: 4,
    color: theme.palette.primary.main,
    borderStyle: "solid",
    borderRadius: "100%",
  },
}));
const WallBar = (props) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState();
  const [anchorEl, setanchorEl] = React.useState();
  const [wallColor, setWallColor] = React.useState();
  const [selectedImg, setSelectedImg] = React.useState();
  const inputRef = React.useRef(null);
  const [activeIndex, setActiveIndex] = React.useState(null);
  // const anchorRef = React.useRef(ref);

  React.useEffect(() => {
    setOpen(props.open);
  }, [props.open]);

  const dispatch = useDispatch();

  const handleClick = (e, index) => {
    if (index === 0) {
      setanchorEl(e.currentTarget);
      setActiveIndex(null);
    }
    if (index === 1) {
      inputRef.current.click();
      setActiveIndex(null);
    }
    if (index === 2) {
      setActiveIndex(index);
      dispatch(handleEdit());
    }
  };
  const handleWallColorChange = (e) => {
    dispatch(setWallColorAction("color", e.hex));
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();

    reader.onloadend = () => {
      let result = reader.result;
      dispatch(setWallColorAction("image", result));
    };
    if (file) {
      reader.readAsDataURL(file);
    } else {
      setSelectedImg();
    }
  };

  const data = WallModuleData;
  const { edit } = useSelector((state) => state.sizeModule);
  return (
    <div>
      <ColorPicker
        anchorEl={anchorEl}
        open={anchorEl === undefined ? false : true}
        onClose={() => setanchorEl()}
        getwallcolor={(e) => handleWallColorChange(e)}
      />

      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
        hidden={true}
        ref={inputRef}
        onChange={(e) => handleImageChange(e)}
      />
      <ListBar
        open={open}
        set={() => setOpen(false)}
        index={3}
        nopaper={true}
        getClickAway={() => setOpen(false)}
      >
        <SpeedDial
          ariaLabel="SpeedDial openIcon example"
          className={classes.speedDial}
          hidden={true}
          open={open}
        >
          {data.map((action, index) => {
            let Icon = action.icon;
            return (
              <SpeedDialAction
                key={action.name}
                className={
                  (classes.iconCOntainer,
                  edit && index === activeIndex ? classes.active : null)
                }
                icon={<Icon className={clsx(classes.icon)} />}
                tooltipTitle={action.name}
                onClick={(e) => handleClick(e, index)}
              />
            );
          })}
        </SpeedDial>
      </ListBar>
    </div>
  );
};
export default React.memo(WallBar);
