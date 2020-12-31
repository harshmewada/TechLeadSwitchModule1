import React from "react";

import Modals from ".";

import { useSelector, useDispatch } from "react-redux";
import { ShowContact } from "../../actions/utilActions";
import {
  Grid,
  Button,
  Typography,
  Link,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@material-ui/core";
import { Facebook, Instagram, MailOutline, WhatsApp } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("md")]: {
      backgroundColor: "white",
    },
  },
  gmail: {
    color: theme.palette.primary.main,
  },
  fb: {
    color: "#3b5998",
    fontSize: "2rem",
  },
  wa: {
    color: "#25D366",
    fontSize: "2rem",
  },
  insta: {
    color: "#E1306C",
    fontSize: "2rem",
  },
  iconContainer: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

const ContactModal = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const open = useSelector((state) => state.utilModule.contact);

  const LinksData = [
    {
      icon: <Facebook className={classes.fb} />,
      link: "https://www.facebook.com/techleadtheengineeringsolution/",
    },
    {
      icon: <WhatsApp className={classes.wa} />,
      link:
        "https://api.whatsapp.com/send?phone=919586889988&text=Welcome%20to%20the%20Techlead%20the%20engineering%20solution%20%0A%0AHow%20can%20i%20help%20you%3F",
    },
    {
      icon: <Instagram className={classes.insta} />,
      link: "https://www.instagram.com/techleadengineeringsolution/",
    },
  ];

  const RenderIcon = ({ data }) => {
    return (
      <Grid item>
        <Link to href={data.link} target="_blank">
          {data.icon}
        </Link>
      </Grid>
    );
  };
  return (
    <Modals
      open={open}
      title="Contact us"
      close={() => dispatch(ShowContact())}
    >
      <Grid container justify="space-between" alignItems="center">
        <Grid item lg={12}>
          <Typography>Email us at</Typography>

          <ListItem
            button
            onClick={() => window.open("mailto:info@techleadsolution.in")}
          >
            <ListItemIcon>
              <MailOutline className={classes.gmail} />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography className={classes.emailtext}>
                  info@techleadsolution.in
                </Typography>
              }
            />
          </ListItem>
          <Divider />
        </Grid>
        <Grid
          item
          lg={12}
          md={12}
          xs={12}
          sm={12}
          container
          spacing={2}
          className={classes.iconContainer}
        >
          {LinksData.map((req, index) => {
            return <RenderIcon data={req} key={index} />;
          })}
        </Grid>

        <Grid item>
          <Button
            color="primary"
            disableElevation
            variant="contained"
            onClick={() => dispatch(ShowContact())}
          >
            Cancel
          </Button>
        </Grid>
      </Grid>
    </Modals>
  );
};
export default ContactModal;
