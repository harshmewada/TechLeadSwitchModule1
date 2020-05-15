import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modals from ".";
import { FormControl, TextField, Grid, Typography } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { ShowSpecifications } from "../../actions/utilActions";

const GridItem = (props) => {
  const { name, value } = props;
  return (
    <Grid item lg={6}>
      <Typography variant="caption">{name}</Typography>
      <Typography variant="h6">{value}</Typography>
    </Grid>
  );
};
const useStyles = makeStyles((theme) => ({}));
const SpecsModal = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const sizeModuel = useSelector((state) => state.sizeModule);
  const sizeName = sizeModuel.name;

  const color = useSelector((state) => state.glassModule.item);
  let type = "";
  let { Boxes } = sizeModuel;

  Boxes.map((data) => (type = type + " " + data.name));

  const open = useSelector((state) => state.utilModule.specs);
  return (
    <Modals
      open={open}
      title="Switch Board Specification"
      close={() => dispatch(ShowSpecifications())}
    >
      <Grid container spacing={1}>
        <GridItem name="Size" value={sizeName} />
        <GridItem name="Color" value={color.value} />
        <GridItem name="Dimension" value={null} />
        <GridItem name="Type" value={type} />
        <GridItem name="Led Color" value="blue" />
      </Grid>
    </Modals>
  );
};
export default SpecsModal;
