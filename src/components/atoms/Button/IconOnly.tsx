import React from 'react';
import {TouchableOpacity} from 'react-native';

type IconOnlyProps = {
  icon: React.ReactNode;
  onpress?: () => void;
};

const IconOnly: React.FC<IconOnlyProps> = ({icon, onpress}: IconOnlyProps) => {
  return <TouchableOpacity onPress={onpress}>{icon}</TouchableOpacity>;
};

export default IconOnly;
