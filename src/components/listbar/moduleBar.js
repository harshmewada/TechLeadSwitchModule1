import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Divider } from "@material-ui/core";
import ModuleData from "../../static/ModuleData";
import ListBar from "./index";
import WallBarItem from "./wallbarItem";
import { selectModule } from "../../actions/moduleaction";
import { useDispatch } from "react-redux";
import { pushToBox } from "../../actions/sizeaction";
const useStyles = makeStyles((theme) => ({}));
const ModuleBar = (props) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState();

  React.useEffect(() => {
    setOpen(props.open);
  }, [props.open]);

  const dipatch = useDispatch();
  const data = ModuleData;
  const handleClick = (index, data) => {
    dipatch(selectModule(index));
    dipatch(pushToBox(data));
  };
  return (
    <div>
      <ListBar open={open} set={() => setOpen(false)} index={2}>
        <Paper elevation={0}>
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
