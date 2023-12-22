import * as React from "react"
import Svg, { SvgProps, Path, Circle } from "react-native-svg"

const CirclesGrid = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={93}
    height={93}
    fill="none"
    {...props}
  >
    <Circle cx={2.5} cy={2.5} r={2.5} fill="#662d91" />
    <Circle cx={2.5} cy={24.5} r={2.5} fill="#662d91" />
    <Circle cx={2.5} cy={46.5} r={2.5} fill="#662d91" />
    <Circle cx={2.5} cy={68.5} r={2.5} fill="#662d91" />
    <Circle cx={2.5} cy={90.5} r={2.5} fill="#662d91" />
    <Circle cx={24.5} cy={2.5} r={2.5} fill="#662d91" />
    <Circle cx={24.5} cy={24.5} r={2.5} fill="#662d91" />
    <Circle cx={24.5} cy={46.5} r={2.5} fill="#662d91" />
    <Circle cx={24.5} cy={68.5} r={2.5} fill="#662d91" />
    <Circle cx={24.5} cy={90.5} r={2.5} fill="#662d91" />
    <Circle cx={46.5} cy={2.5} r={2.5} fill="#662d91" />
    <Circle cx={46.5} cy={24.5} r={2.5} fill="#662d91" />
    <Circle cx={46.5} cy={46.5} r={2.5} fill="#662d91" />
    <Circle cx={46.5} cy={68.5} r={2.5} fill="#662d91" />
    <Circle cx={46.5} cy={90.5} r={2.5} fill="#662d91" />
    <Circle cx={68.5} cy={2.5} r={2.5} fill="#662d91" />
    <Circle cx={68.5} cy={24.5} r={2.5} fill="#662d91" />
    <Circle cx={68.5} cy={46.5} r={2.5} fill="#662d91" />
    <Circle cx={68.5} cy={68.5} r={2.5} fill="#662d91" />
    <Circle cx={68.5} cy={90.5} r={2.5} fill="#662d91" />
    <Circle cx={90.5} cy={2.5} r={2.5} fill="#662d91" />
    <Circle cx={90.5} cy={24.5} r={2.5} fill="#662d91" />
    <Circle cx={90.5} cy={46.5} r={2.5} fill="#662d91" />
    <Circle cx={90.5} cy={68.5} r={2.5} fill="#662d91" />
    <Circle cx={90.5} cy={90.5} r={2.5} fill="#662d91" />
  </Svg>
)
export default CirclesGrid
