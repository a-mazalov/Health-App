import * as React from "react";
import Svg, { G, Path, Defs, Circle } from "react-native-svg";
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	Pressable,
	FlatList,
} from "react-native";
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const Menu = (props) => (
	<Svg
    width={24}
    height={24}
	viewBox="0 0 22 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M.438 2h13.124c.242 0 .438-.447.438-1 0-.553-.196-1-.438-1H.438C.196 0 0 .447 0 1c0 .553.196 1 .438 1ZM7.469 18H21.53c.259 0 .469-.447.469-1 0-.553-.21-1-.469-1H7.47C7.21 16 7 16.447 7 17c0 .553.21 1 .469 1ZM.688 10h20.625c.379 0 .687-.447.687-1 0-.553-.308-1-.688-1H.688C.308 8 0 8.447 0 9c0 .553.307 1 .688 1Z"
      fill="#fff"
    />
  </Svg>
);

export default Menu;
