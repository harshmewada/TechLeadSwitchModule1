import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modals from ".";
import {
  FormControl,
  TextField,
  Grid,
  Typography,
  Box,
  Divider,
  Button,
  Modal,
  CircularProgress,
  Card,
  Toolbar,
  TableContainer,
  Table,
  TableCell,
  Paper,
  TableBody,
  TableRow,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { ShowSpecifications } from "../../actions/utilActions";

import Pdf from "react-to-pdf";
const Logo = "/logo-lg.png";

const pdfString = (img) => (
  <div class="container">
    <div class="col-md-12">
      <div class="invoice">
        <div class="invoice-company">
          <div>
            <img src="images/logo-lg.png" width="120" height="65" />
          </div>
        </div>
        <hr class="hr" />
        <img class="module" src={img} />

        <div class="invoice-content">
          <p class="title">Specifications</p>
          <div class="table-responsive">
            <table class="table table-invoice">
              <tbody>
                <tr>
                  <td width="25%">Type : </td>
                  {/* <td class="td">{{ $specs['type'] }}</td> */}
                </tr>
                <tr>
                  <td width="25%">Size : </td>
                  {/* <td class="td">{{ $specs['size'] }}</td> */}
                </tr>
                <tr>
                  <td width="25%">Color : </td>
                  {/* <td class="td">{{ $specs['color'] }}</td> */}
                </tr>
                <tr>
                  <td width="25%">Dimension : </td>
                  {/* <td class="td">{{ $specs['dim'] }}</td> */}
                </tr>
                <tr>
                  <td width="25%">LED Color : </td>
                  {/* <td class="td">{{ $specs['led'] }}</td> */}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="invoice-footer">
          <p class="text-center">
            <span class="m-r-10">
              © 2020 Techlead The Engineering Solution All rights reserved.
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
);

const useStyles = makeStyles((theme) => ({
  logo: {
    width: "8vw",
    height: "auto",
    objectFit: "contain",
    [theme.breakpoints.down("md")]: {
      width: "35vw",
    },
  },
  ssModal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modalRoot: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "auto",
  },
  card: {
    height: "90vh",
    width: "auto",
    maxWidth: "90vw",
  },
  gridContainer: {
    marginTop: "-100px",
    width: "800px",
    padding: theme.spacing(2),
  },
  previewImage: {
    padding: theme.spacing(5),
    width: "60%",
    objectFit: "contain",
    [theme.breakpoints.down("md")]: {
      width: "60%",
      padding: 0,
    },
  },
  body: {
    fontSize: 15,
  },
  specsheader: {
    color: theme.palette.primary.main,
    padding: "0vh 1vh 0vh 1vw",
  },
  footer: {
    width: "100%",
    // position: "relative",
    paddingTop: theme.spacing(2),

    paddingBottom: theme.spacing(2),
  },
  mypreviewImage: {
    width: "60%",
    height: "auto",
    padding: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      width: "100%",
      objectFit: "contain",
      padding: 0,
    },
  },
  btnContainer: {
    marginTop: theme.spacing(1),
  },
  name: {
    [theme.breakpoints.down("md")]: {
      fontSize: "0.7rem",
    },
  },
  value: {
    textTransform: "uppercase",
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      fontSize: "0.8rem",
    },
  },
  gridModalContainer: {
    width: "45vw",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
}));
const SpecsModal = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [modalOpen, setModalOpen] = React.useState(false);

  const GridItem = (props) => {
    const { name, value } = props;
    return (
      <Grid item lg={6} md={6} sm={12} xs={12}>
        <Typography variant="caption" className={classes.name}>
          {name}
        </Typography>
        <Typography variant="body1" className={classes.value}>
          {value}
        </Typography>
      </Grid>
    );
  };

  const sizeModuel = useSelector((state) => state.sizeModule);
  const sizeName = sizeModuel.name;

  const dimension = sizeModuel.boardSize;

  const color = useSelector((state) => state.glassModule.item);
  let type = "";
  let { Boxes, previewImage } = sizeModuel;

  if (Boxes && Boxes.length) {
    Boxes.map((data) => (type = type + " " + data.name.replace(/\s/g, "")));
  }

  const open = useSelector((state) => state.utilModule.specs);

  const ref = React.createRef();

  const renderRow = (name, value) => {
    return (
      <TableRow>
        <TableCell>
          <Typography className={classes.body}>{name}</Typography>
        </TableCell>
        <TableCell>
          <Typography className={classes.body}>{value}</Typography>
        </TableCell>
      </TableRow>
    );
  };
  return (
    <>
      <Modals
        open={open}
        title="Switch Board Specification"
        close={() => dispatch(ShowSpecifications())}
        className={classes.modalRoot}
      >
        <Grid container spacing={1} className={classes.gridModalContainer}>
          <Grid
            item
            lg={12}
            container
            sm={12}
            md={12}
            xs={12}
            alignItems="center"
            justify="center"
          >
            {previewImage && (
              <img src={previewImage} className={classes.mypreviewImage} />
            )}
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Box p={1}>
              <Grid container>
                <GridItem name="Size" value={sizeName} />
                <GridItem name="Color" value={color.value} />
                <GridItem name="Dimension" value={dimension} />
                <GridItem name="Type" value={type} />
                <GridItem name="Led Color" value="blue" />
                <Grid item lg={12}>
                  <Divider />
                </Grid>
                <Grid item lg={12} md={12} xs={12} xs={12}>
                  <div className={classes.btnContainer}>
                    <Pdf
                      targetRef={ref}
                      filename="Techlead-Smart Switch Board.pdf"
                      scale={1}
                    >
                      {({ toPdf }) => (
                        <Button
                          color="primary"
                          variant="contained"
                          onClick={toPdf}
                        >
                          Export Pdf
                        </Button>
                      )}
                    </Pdf>
                  </div>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
        <div style={{ position: "fixed", top: "3000px" }}>
          <Grid
            container
            spacing={2}
            ref={ref}
            className={classes.gridContainer}
          >
            <Grid item container justify="space-between" lg={12}>
              <Grid item>
                <img src={Logo} className={classes.logo} />
              </Grid>

              <Grid item>
                <Typography className={classes.body}>
                  Phone: +91 95868 89988
                </Typography>
                <Typography className={classes.body}>
                  Email: info@techleadsolution.in
                </Typography>
                <Typography className={classes.body}>
                  Website: www.techleadsolution.in
                </Typography>
              </Grid>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Divider />
            </Grid>
            <Grid item lg={12} container alignItems="center" justify="center">
              <img src={previewImage} className={classes.previewImage} />
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Divider />
            </Grid>

            <Grid item lg={12} sm={12} xs={12} md={12}>
              <Paper elevation={0} className={classes.paper}>
                <Typography variant="h6" className={classes.specsheader}>
                  Specifications
                </Typography>

                <TableContainer>
                  <Table>
                    <TableBody>
                      {renderRow("Type", type)}
                      {renderRow("Size", sizeName)}
                      {renderRow("Color", color.name)}
                      {renderRow("Dimension", dimension)}
                      {renderRow("LED Color", "blue")}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            </Grid>

            <div className={classes.footer}>
              <Typography align="center" variant="body2">
                © {new Date().getFullYear()} Techlead The Engineering Solution
                All rights reserved.
              </Typography>
            </div>
          </Grid>
        </div>
      </Modals>
    </>
  );
};
export default SpecsModal;

//with api

// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Modals from ".";
// import {
//   FormControl,
//   TextField,
//   Grid,
//   Typography,
//   Box,
//   Divider,
//   Button,
//   Modal,
//   CircularProgress,
// } from "@material-ui/core";
// import { useSelector, useDispatch } from "react-redux";
// import { ShowSpecifications } from "../../actions/utilActions";
// import axios from "axios";
// const useStyles = makeStyles((theme) => ({
// previewImage: {
//   width: "100%",
//   height: "auto",

//   [theme.breakpoints.down("md")]: {
//     width: "100%",
//     objectFit: "contain",
//   },
// },
// btnContainer: {
//   marginTop: theme.spacing(1),
// },
// name: {
//   [theme.breakpoints.down("md")]: {
//     fontSize: "0.7rem",
//   },
// },
// value: {
//   [theme.breakpoints.down("md")]: {
//     fontSize: "0.8rem",
//   },
// },
//   ssModal: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// }));
// const SpecsModal = (props) => {
//   const dispatch = useDispatch();
//   const classes = useStyles();
//   const [modalOpen, setModalOpen] = React.useState(false);

//   const GridItem = (props) => {
//     const { name, value } = props;
//     return (
//       <Grid item lg={6} md={6} sm={12} xs={12}>
//         <Typography variant="caption" className={classes.name}>
//           {name}
//         </Typography>
//         <Typography variant="h6" className={classes.value}>
//           {value}
//         </Typography>
//       </Grid>
//     );
//   };

//   const sizeModuel = useSelector((state) => state.sizeModule);
//   const sizeName = sizeModuel.name;

//   const dimension = sizeModuel.boardSize;

//   const color = useSelector((state) => state.glassModule.item);
//   let type = "";
//   let { Boxes, previewImage } = sizeModuel;

//   if (Boxes && Boxes.length > 0) {
//     Boxes.map((data) => (type = type + " " + data.name.replace(/\s/g, "")));
//   }

//   const open = useSelector((state) => state.utilModule.specs);

//   const exportData = async () => {
//     console.log("load svg res");
//     setModalOpen(true);

//     function dataURLtoFile(dataurl, filename) {
//       var arr = dataurl.split(","),
//         mime = arr[0].match(/:(.*?);/)[1],
//         bstr = atob(arr[1]),
//         n = bstr.length,
//         u8arr = new Uint8Array(n);
//       while (n--) {
//         u8arr[n] = bstr.charCodeAt(n);
//       }
//       return new File([u8arr], filename, { type: mime });
//     }

//     //Usage example:
//     var file = dataURLtoFile(previewImage, "a.png");
//     console.log("svg file", file);
//     const data = {
//       color: color.name,
//       size: sizeName,
//       type: type,
//       dimension,
//       led: "blue",
//       image: file,
//     };
//     var formData = new FormData();
//     Object.keys(data).map((key) => {
//       formData.append(key, data[key]);
//     });

//     await axios({
//       url: "http://192.168.0.102:8000/api/pdf-generate",
//       method: "post",
//       data: formData,
//       headers: {
//         // "Content-Type": "application/json",
//         "Content-Type": "multipart/form-data",
//       },
//       responseType: "blob",
//     })
//       .then((response) => {
//         console.log("response", response);
//         return response.data;
//       })
//       .then((downloadedFile) => {
//         console.log("blob", downloadedFile);

//         var downloadLink = document.createElement("a");
//         downloadLink.target = "_blank";
//         downloadLink.download = "name_to_give_saved_file.pdf";

//         // convert downloaded data to a Blob
//         var blob = new Blob([downloadedFile], { type: "application/pdf" });

//         // create an object URL from the Blob
//         var URL = window.URL || window.webkitURL;
//         var downloadUrl = URL.createObjectURL(blob);

//         // set object URL as the anchor's href
//         downloadLink.href = downloadUrl;

//         // append the anchor to document body
//         document.body.append(downloadLink);

//         // fire a click event on the anchor
//         downloadLink.click();

//         // cleanup: remove element and revoke object URL
//         document.body.removeChild(downloadLink);
//         URL.revokeObjectURL(downloadUrl);
//         setModalOpen(false);

//         // 2. Create blob link to download
//         // const url = window.URL.createObjectURL(blob);
//         // const link = document.createElement("a");
//         // link.href = url;
//         // link.setAttribute("download", `${new Date().getTime()}.pdf`);

//         // document.body.appendChild(link);
//         // // 4. Force download
//         // link.click();
//         // // 5. Clean up and remove the link
//         // link.parentNode.removeChild(link);
//         // setModalOpen(false);
//       })
//       .catch((error) => {
//         setModalOpen(false);

//         // error.json().then((json) => {
//         //   this.setState({
//         //     errors: json,
//         //     loading: false,
//         //   });
//         // });
//       });
//   };
//   return (
//     <>
//       <Modal open={modalOpen} className={classes.ssModal}>
//         <>
//           <CircularProgress color="primary" size={50} />
//         </>
//       </Modal>
//       <Modals
//         open={open}
//         title="Switch Board Specification"
//         close={() => dispatch(ShowSpecifications())}
//       >
// <Grid container spacing={1}>
//   <Grid item lg={4} sm={12} md={4} xs={12}>
//     {previewImage && (
//       <img src={previewImage} className={classes.previewImage} />
//     )}
//   </Grid>
//   <Grid item lg={8} md={8} sm={12} xs={12}>
//     <Box p={1}>
//       <Grid container>
//         <GridItem name="Size" value={sizeName} />
//         <GridItem name="Color" value={color.value} />
//         <GridItem name="Dimension" value={dimension} />
//         <GridItem name="Type" value={type} />
//         <GridItem name="Led Color" value="blue" />
//         <Grid item lg={12}>
//           <Divider />
//         </Grid>
//         <Grid item lg={12} md={12} xs={12} xs={12}>
//           <div
//             className={classes.btnContainer}
//             onClick={() => exportData()}
//           >
//             <Button color="primary" variant="contained">
//               Export Pdf
//             </Button>
//           </div>
//         </Grid>
//       </Grid>
//     </Box>
//   </Grid>
// </Grid>
//       </Modals>
//     </>
//   );
// };
// export default SpecsModal;
