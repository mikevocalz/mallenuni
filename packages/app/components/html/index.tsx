import {
  H1,
  H2,
  Main,
  Section,
  Article,
  Header,
  Footer,
  Nav
} from "@expo/html-elements"

import { remapProps } from "nativewind"


const RNH1 = remapProps(H1, { className: "style" })
const RNH2 = remapProps(H2, { className: "style" })
