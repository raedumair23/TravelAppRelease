import React from 'react';
import Svg, { Path } from 'react-native-svg';

const ExploreIcon = ({ focused }) => (
  <Svg width={23} height={22} viewBox="0 0 23 22" fill="none">
    <Path
      d="M11.6667 21C17.1895 21 21.6667 16.5228 21.6667 11C21.6667 5.47715 17.1895 1 11.6667 1C6.14381 1 1.66666 5.47715 1.66666 11C1.66666 16.5228 6.14381 21 11.6667 21Z"
      stroke={focused ? "#5EDFFF" : "#D6D2D2"}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M15.9067 6.76001L13.7867 13.12L7.42667 15.24L9.54667 8.88001L15.9067 6.76001Z"
      stroke={focused ? "#5EDFFF" : "#D6D2D2"}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default ExploreIcon;
