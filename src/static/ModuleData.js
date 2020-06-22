import Switch1 from "../static/Icons/module/Switch1";
import Switch2 from "../static/Icons/module/Switch2";
import Switch4 from "../static/Icons/module/Switch4";
// import Closecurtain from "../static/Icons/module/Closecurtain";
// import Opencurtain from "../static/Icons/module/Opencurtain";
import Curtain from "../static/Icons/module/redefined/Curtain";
import Doorbell from "../static/Icons/module/Doorbell";
import Fan from "../static/Icons/module/redefined/Fan";

import Flashlight from "../static/Icons/module/Flashlight";
import Noname from "../static/Icons/module/Noname";
// import Rj45 from "../static/Icons/module/Rj45";
import Rj45 from "../static/Icons/module/redefined/Rj45";
// import Tvsocket from "../static/Icons/module/Tvsocket";
// import Usb from "../static/Icons/module/Usb";
import Tvsocket from "../static/Icons/module/redefined/Tvsocket";
import Usb from "../static/Icons/module/redefined/Usb";
import Wallsocket from "../static/Icons/module/Wallsocket";
import Switch6 from '../static/Icons/module/Switch6'
import uuid from "uuid/dist/v4";
const ModuleData = [
  {
    index: 0,
    name: "Gang 1",
    icon: Switch1,
    mainIcon: Switch1,
    size: 1,
    id:1
  },
  {
    index: 1,
    name: "Gang 2",
    icon: Switch2,
    mainIcon: Switch2,
    size: 2,
    id:2
  },
  {
    index: 2,
    name: "Gang 4",
    icon: Switch4,
    mainIcon: Switch4,
    size: 4,
    id:3
  },
  // {
  //   index: 3,
  //   name: "Gang 6",
  //   icon: Switch6,
  //   mainIcon: Switch6,
  //   size: 4,
  //   id:3
  // },
  {
    index: 3,
    name: "Curtains",
    icon: Curtain,
    mainIcon: Curtain,
    size: "normal",
    id:4
  },
  // {
  //   index: 4,
  //   name: "Open Curtain",
  //   icon: Opencurtain,
  //   mainIcon: Opencurtain,
  //   size: "normal",
  // },
  {
    index: 5,
    name: "Doorbell",
    icon: Doorbell,
    mainIcon: Doorbell,
    size: "normal",
    id:5
  },
  {
    index: 6,
    name: "Fan",
    icon: Fan,
    mainIcon: Fan,
    size: "normal",
    id:6,
  
  },
  // {
  //   index: 7,
  //   name: "Fan Ragulator",
  //   icon: Fanragulator,
  //   mainIcon: Fanragulator,
  //   size: "normal",
  // },
  {
    index: 8,
    name: "High AMP Switch",
    icon: Flashlight,
    mainIcon: Flashlight,
    size: 1,
    id:7
  },
  {
    index: 9,
    name: "Ac Switch",
    icon: Noname,
    mainIcon: Noname,
    size: 1,
    id:8
  },
  {
    index: 10,
    name: "RJ45",
    icon: Rj45,
    mainIcon: Rj45,
    size: "normal",
    id:9
  },
  // {
  //   index: 11,
  //   name: "RJ11",
  //   icon: Rj45,
  //   mainIcon: Rj45,
  //   size: "normal",id:10
  // },
  {
    index: 11,
    name: "Tv Socket",
    icon: Tvsocket,
    mainIcon: Tvsocket,
    size: "normal",
    id:12
  },
  {
    index: 12,
    name: "USB",
    icon: Usb,
    mainIcon: Usb,
    size: "normal",
    id:13
  },
  {
    index: 13,
    name: "Wall Socket",
    icon: Wallsocket,
    mainIcon: Wallsocket,
    size: "normal",
    id:14
  },
];
export default ModuleData;
