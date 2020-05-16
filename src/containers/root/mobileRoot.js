import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Div100vh from "react-div-100vh";
import Header from "../../components/header";
import SideGrid from "../../components/SideGrid";
import Dashboard from "../dashboard";

import Sizebar from "../../components/listbar/sizebar";
import { useSelector } from "react-redux";
import ModuleBar from "../../components/listbar/moduleBar";

import GlassBar from "../../components/listbar/glassBar";
import WallBar from "../../components/listbar/wallBar";
import SpecsModal from "../../components/Modals/SpecsModal";
import ReloadModal from "../../components/Modals/ReloadModal";
import ShareModal from "../../components/Modals/ShareModal";
import ContactModal from "../../components/Modals/ContactModal";
const useStyles = makeStyles((theme) => ({
  container: {
    height: "100%",

    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  headerContainer: {
    width: "100%",
  },
  dashCOntainer: {
    flex: 1,
  },
  sizeContainer: {},
}));
const MobileRoot = () => {
  const classes = useStyles();
  const selectedSize = useSelector((state) => state.activeModule.index);
  const specs = useSelector((state) => state.utilModule.specs);
  const reload = useSelector((state) => state.utilModule.reload);
  const share = useSelector((state) => state.utilModule.share);
  const contact = useSelector((state) => state.utilModule.contact);

  return (
    <Div100vh>
      {specs && <SpecsModal open={false} title="Switch Specification" />}
      {reload && <ReloadModal />}
      {share && <ShareModal />}
      {contact && <ContactModal />}

      <Sizebar open={selectedSize === 0 ? true : false} />
      <GlassBar open={selectedSize === 1 ? true : false} />
      <ModuleBar open={selectedSize === 2 ? true : false} />
      <WallBar open={selectedSize === 3 ? true : false} />
      <div className={classes.container}>
        <div className={classes.headerContainer}>
          <Header />
        </div>
        <div className={classes.dashCOntainer}>
          <Dashboard />
        </div>
        <div className={classes.sizeContainer}>
          <SideGrid />
        </div>
      </div>
    </Div100vh>
  );
};
export default MobileRoot;
