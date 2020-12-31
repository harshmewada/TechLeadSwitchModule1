import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("md")]: {
      backgroundColor: "white",
    },
  },
}));

const PdfComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <html>
        <head>
          <meta charset="utf-8" />
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <title>Build Smart Switch | Techlead The Engineering Solution</title>

          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          />
          <style></style>
        </head>
        <body>
          <div class="container">
            <div class="col-md-12">
              <div class="invoice">
                <div class="invoice-company">
                  <div>
                    <img src="images/logo-lg.png" width="120" height="65" />
                  </div>
                  <div style="float: right" class="contact">
                    <p>Phone: +91 95868 89988</p>
                    <p>Email: info@techleadsolution.in</p>
                    <p>Website: www.techleadsolution.in</p>
                  </div>
                </div>
                <hr class="hr" />
                <img class="module" src="{{ $specs['image'] }}" />

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
                      © 2020 Techlead The Engineering Solution All rights
                      reserved.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </body>
      </html>
    </div>
  );
};
export default PdfComponent;
