import logo from "../logo.svg";
import Sizetwo from "../static/Icons/size/Sizetwo.js";
import Sizefour from "../static/Icons/size/Sizefour.js";
import Sizesix from "../static/Icons/size/Sizesix.js";
import Sizeeight from "../static/Icons/size/Sizeeight.js";
import Sizetwelve from "../static/Icons/size/Sizetwelve.js";
import Sizeeighteen from "../static/Icons/size/Sizeeighteen.js";

import uuid from "uuid/dist/v4";
const SizeModuleData = [
  {
    index: 0,
    id: uuid(),
    name: "Module 2",
    icon: Sizetwo,
    value: 1,
    size: 1,
    width: 200,
    mobileWidth: 200,
    maxWidth: 400,
    boardSize: "92 x 92 MM",
  },
  {
    index: 1,
    id: uuid(),
    name: "Module 4",
    icon: Sizefour,
    value: 2,
    size: 2,
    width: 200,
    mobileWidth: 150,
    maxWidth: 300,
    boardSize: "157 x 92 MM",
  },
  {
    index: 2,
    id: uuid(),
    name: "Module 6",
    icon: Sizesix,
    value: 3,
    size: 3,
    width: 200,
    mobileWidth: 100,
    maxWidth: 300,
    boardSize: "237.5 x 92 MM",
  },
  {
    index: 3,
    id: uuid(),
    name: "Module 8",
    icon: Sizeeight,
    value: 4,
    size: 4,
    width: 150,
    mobileWidth: 60,
    maxWidth: 150,
    boardSize: "252.5 x 92 MM",
  },
  {
    index: 4,
    id: uuid(),
    name: "Module 12",
    icon: Sizetwelve,
    value: 6,
    size: 3,
    width: 150,
    mobileWidth: 110,
    maxWidth: 180,
    boardSize: "237.5 x 178 MM",
  },

  {
    index: 5,
    id: uuid(),
    name: "Module 18",
    icon: Sizeeighteen,
    value: 9,
    size: 3,
    width: 150,
    mobileWidth: 110,
    maxWidth: 180,
    boardSize: "237.5 x 264 MM",
  },
];
export default SizeModuleData;
