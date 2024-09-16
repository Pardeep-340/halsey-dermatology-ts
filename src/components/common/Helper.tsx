import DevicesMenubar from "./navbar/DevicesMenubar";
import SkinConcerns from "./navbar/SkinConcerns";
import Treatments from "./navbar/Treatments";

// ============= MOBILE NAVBAR LIST  ===============

export const ACCORDION_ITEMS_LIST = [
  {
    title: "Treatments",
    content: <Treatments />,
  },
  {
    title: "Skin Concerns",
    content: <SkinConcerns />,
  },
  {
    title: "Devices",
    content: <DevicesMenubar />,
  },
];


export const NAV_DROP_DOWN_ITEMS = [
  {
    key: "treatments",
    label: "Treatments",
    component: <Treatments />,
  },
  {
    key: "skinConcerns",
    label: "Skin Concerns",
    component: <SkinConcerns />,
  },
  {
    key: "devices",
    label: "Devices",
    component: <DevicesMenubar />,
  },
];



