import { ComponentProps } from "react";
import {
  FontAwesome,
  MaterialCommunityIcons,
  MaterialIcons
} from '@expo/vector-icons';
import { Icon as RNIcon } from 'react-native-vector-icons/MaterialIcons';

interface IconType {
  font: string
  name: typeof FontAwesome['name'] | typeof MaterialCommunityIcons['name'] | typeof MaterialIcons['name'];
  color: string;
  size: number;
}

function Icon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}