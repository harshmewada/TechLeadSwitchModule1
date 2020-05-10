import White from "./Icons/glass/White";
import Black from "./Icons/glass/Black";
import BrushIcon from "@material-ui/icons/BrushOutlined";
import ImageIcon from "@material-ui/icons/ImageOutlined";
import SizeIcon from "@material-ui/icons/ZoomOutMapOutlined";

const WallModuleData = [
  {
    index: 0,
    name: "colorpicker",
    icon: BrushIcon,
    value: "white",
    bg:
      "linear-gradient(159.39deg, #FFFFFF -51.91%, #F7F7F7 42.06%, #EEEEEE 42.55%)",
  },
  {
    index: 1,
    name: "choosepicture",
    icon: ImageIcon,
    value: "black",
    bg:
      "linear-gradient(159.39deg, #151515 -51.91%, #343434 42.06%, #000000 42.55%)",
  },
  {
    index: 2,
    name: "moveboard",
    icon: SizeIcon,
    value: "black",
    bg:
      "linear-gradient(159.39deg, #151515 -51.91%, #343434 42.06%, #000000 42.55%)",
  },
];
export default WallModuleData;
