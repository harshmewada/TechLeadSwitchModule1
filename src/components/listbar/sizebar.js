import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Divider } from "@material-ui/core";
import SizeModuleData from "../../static/sizeModuleData";
import ListBar from "./index";
import ListBarItem from "./listbarItem";
import { selectSizeModule } from "../../actions/sizeaction";
import { useDispatch, useSelector } from "react-redux";
const useStyles = makeStyles((theme) => ({}));
const SizeBar = (props) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState();

  React.useEffect(() => {
    setOpen(props.open);
  }, [props.open]);

  const dipatch = useDispatch();
  const data = SizeModuleData;
  const handleClick = (index) => {
    dipatch(selectSizeModule(index, SizeModuleData[index]));
  };
  const activeItemIndex = useSelector((state) => state.sizeModule.index);
  // console.log(activeItemIndex);

  return (
    <div>
      <ListBar open={open} set={() => setOpen(false)} index={0} nopaper={false}>
        <Paper elevation={0}>
          {data &&
            data.map((data, index) => {
              return (
                <div key={index}>
                  <ListBarItem
                    index={index}
                    active={activeItemIndex === index ? true : false}
                    data={data}
                    onClick={() => handleClick(index)}
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
export default React.memo(SizeBar);
