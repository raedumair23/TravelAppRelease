// assets/icons/ChatIcon.js
import React from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatIcon = ({ focused }) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
    <Path
      d="M21 11.5C21 16.1944 16.9706 20 12 20C10.4546 20 8.99125 19.6319 7.72873 18.9691L3 20L4.61999 15.1912C3.60258 13.9564 3 12.2918 3 10.5C3 5.80558 7.02944 2 12 2C16.9706 2 21 5.80558 21 11.5Z"
      stroke={focused ? '#5EDFFF' : '#D6D2D2'}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default ChatIcon;
