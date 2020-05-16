import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../../components/header";
import { Grid, Slide, Paper } from "@material-ui/core";
import SideGrid from "../../components/SideGrid";
import Sizebar from "../../components/listbar/sizebar";
import { useSelector } from "react-redux";
import ModuleBar from "../../components/listbar/moduleBar";
import Dashboard from "../dashboard";
import GlassBar from "../../components/listbar/glassBar";
import WallBar from "../../components/listbar/wallBar";
import Modals from "../../components/Modals";
import SpecsModal from "../../components/Modals/SpecsModal";
import ReloadModal from "../../components/Modals/ReloadModal";
import ShareModal from "../../components/Modals/ShareModal";
import ContactModal from "../../components/Modals/ContactModal";
const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
  },
  sidecontainer: {
    height: "100%",

    zIndex: 100,
  },
  dashContainer: {
    backgroundColor: theme.palette.grey[50],
  },
}));
const Root = () => {
  const classes = useStyles();
  const selectedSize = useSelector((state) => state.activeModule.index);
  const specs = useSelector((state) => state.utilModule.specs);
  const reload = useSelector((state) => state.utilModule.reload);
  const share = useSelector((state) => state.utilModule.share);
  const contact = useSelector((state) => state.utilModule.contact);

  return (
    <div>
      <Header />
      <Grid container className={classes.container}>
        <Grid
          item
          lg={11}
          md={11}
          sm={11}
          xs={12}
          className={classes.dashContainer}
          id="dashContainer"
        >
          <Sizebar open={selectedSize === 0 ? true : false} />
          <GlassBar open={selectedSize === 1 ? true : false} />
          <ModuleBar open={selectedSize === 2 ? true : false} />
          <WallBar open={selectedSize === 3 ? true : false} />
          <div style={{ height: "100%", width: "100%" }}>
            <Dashboard />
          </div>
        </Grid>
        <Grid
          item
          lg={1}
          md={1}
          sm={1}
          xs={12}
          className={classes.sidecontainer}
        >
          <SideGrid />
        </Grid>
        {specs && <SpecsModal open={false} title="Switch Specification" />}
        {reload && <ReloadModal />}
        {share && <ShareModal />}
        {contact && <ContactModal />}
      </Grid>
    </div>
  );
};
export default Root;
