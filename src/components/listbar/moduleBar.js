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

  const handleClick = (index, data) => {
    dipatch(selectModule(index));
    // dipatch(pushToBox(data));
    if (Boxes.includes(1) === true) {
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
