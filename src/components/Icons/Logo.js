import * as React from "react";
import Svg, { G, Path, Defs } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const Logo = (props) => (
	<Svg
		width={64}
		height={64}
		style={{
			enableBackground: "new 0 0 64 64",
		}}
		xmlSpace="preserve"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<G id="Layer_2">
			<Path d="m49.3 10 1.3-7H13.2l1.3 7H6.6v9.1c0 7.1 5.3 12.9 12.1 13.7 1.2 5.3 5.3 9.3 10.4 10.3l-.8 12.3h-7.9V61h23v-5.5h-7.9l-.8-12.3c5.1-1.1 9.3-5.1 10.4-10.3 6.9-.8 12.3-6.6 12.3-13.8V10h-8.1zm-.9 5.1h4.1v4c0 4-2.7 7.4-6.4 8.5l2.3-12.5zM17.7 27.5c-3.6-1.1-6.2-4.5-6.2-8.4v-4h4l2.2 12.4zm-9.1-8.4V12h6.3l.2 1.1H9.4v6c0 5.2 3.7 9.6 8.6 10.6l.2 1.1c-5.4-1-9.6-5.9-9.6-11.7zm32.8 38.4V59h-19v-1.5h19zm-8.7-14 .8 12h-3.1l.8-12h1.5zm-.8-2c-5.6 0-10.4-4-11.4-9.5L15.6 5h32.6l-4.9 27c-1 5.5-5.8 9.5-11.4 9.5zm23.5-22.4c0 5.9-4.3 10.7-9.9 11.7l.2-1.1c5-.9 8.8-5.3 8.8-10.6v-6h-5.8L49 12h6.4v7.1z" />
			<Path d="m34.8 17.6-2.9-8.9-1 2.9-1.9 6h-9.3l7.5 5.5-2.9 8.9 7.5-5.5 7.5 5.5-2.9-8.9 7.5-5.5h-9.1zm.9 9.1L31.9 24l-3.7 2.7 1.4-4.4-3.7-2.7h4.6l1.4-4.4 1.4 4.4H38l-3.7 2.7 1.4 4.4z" />
		</G>
	</Svg>
);

export default Logo;
