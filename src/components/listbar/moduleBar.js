import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Divider } from "@material-ui/core";
import ModuleData from "../../static/ModuleData";
import ListBar from "./index";
import WallBarItem from "./wallbarItem";
import { selectModule } from "../../actions/moduleaction";
import { useDispatch, useSelector } from "react-redux";
import { pushToBox } from "../../actions/sizeaction";
import { ShowSnackBar } from "../../actions/snackActions";
import EmptyIcon from "../../static/Icons/module/EmptyModule";

const useStyles = makeStyles((theme) => ({}));
const ModuleBar = (props) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState();
  const [barDisabled, setBarDisabled] = React.useState(false);

  React.useEffect(() => {
    setOpen(props.open);
  }, [props.open]);

  const dipatch = useDispatch();
  const data = ModuleData;

  const Boxes = useSelector((state) => state.sizeModule.Boxes);
  const BoxesLenght = Boxes.length;
  const emptydata = {
    index: null,
    name: null,
    icon: EmptyIcon,
    mainIcon: EmptyIcon,
    size: "normal",
  };
  const handleClick = (index, data) => {
    dipatch(selectModule(index));
    // dipatch(pushToBox(data));
    const findIndex = Boxes.filter((data) => data.index === !emptydata.index);
    console.log(
      "if loop moduleBar",
      Boxes.includes(emptydata),
      "\n",
      findIndex
    );
    if (findIndex.length === 0) {
      dipatch(pushToBox(data));
      setBarDisabled(false);
    } else {
      dipatch(
        ShowSnackBar(
          true,
          "error",
          "Please Select Bigger Size Board or remove existing modules to add more"
        )
      );
      setBarDisabled(true);
    }
  };
  return (
    <div>
      <ListBar open={open} set={() => setOpen(false)} index={2}>
        <Paper elevation={0} style={{ opacity: barDisabled ? 0.5 : 1 }}>
          {data &&
            data.map((data, index) => {
              return (
                <div key={index}>
                  <WallBarItem
                    data={data}
                    onClick={() => handleClick(index, data)}
                  />
                  <Divider />
                </div>
              );
            })}
        </Paper>
      </ListBar>
    </div>
  );
};
export default React.memo(ModuleBar);
