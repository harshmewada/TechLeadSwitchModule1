import logo from "../logo.svg";
import Sizetwo from "../static/Icons/size/Sizeone.js";
import Sizefour from "../static/Icons/size/Sizetwo.js";
import Sizesix from "../static/Icons/size/Sizethree.js";
import Sizeeight from "../static/Icons/size/Sizefour.js";
import Sizetwelve from "../static/Icons/size/Sizesix.js";
import Sizeeighteen from "../static/Icons/size/Sizenine.js";
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
    maxWidth: 400,
  },
  {
    index: 1,
    id: uuid(),
    name: "Module 4",
    icon: Sizefour,
    value: 2,
    size: 2,
    width: 200,
    maxWidth: 300,
  },
  {
    index: 2,
    id: uuid(),
    name: "Module 6",
    icon: Sizesix,
    value: 3,
    size: 3,
    width: 200,
    maxWidth: 300,
  },
  {
    index: 3,
    id: uuid(),
    name: "Module 8",
    icon: Sizeeight,
    value: 4,
    size: 4,
    width: 200,
    maxWidth: 300,
  },
  {
    index: 4,
    id: uuid(),
    name: "Module 12",
    icon: Sizetwelve,
    value: 6,
    size: 3,
    width: 150,
    maxWidth: 180,
  },

  {
    index: 5,
    id: uuid(),
    name: "Module 18",
    icon: Sizeeighteen,
    value: 9,
    size: 3,
    width: 150,
    maxWidth: 180,
  },
];
export default SizeModuleData;
