
import Logo from 'app/components/svgs/Logo'
import { View, Text } from 'react-native'
import { TextLink } from 'solito/build/link'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';

export function AboutScreen() {

  return (
    <View className="flex-1 h-full items-center min-h-screen self-center w-screen max-w-7xl   bg-green-200" >

      <Text >About</Text>

      <TextLink href="/user/fernando">Regular Link</TextLink>
      <Icon
        name="settings"
        as={MaterialIcons}
        size={30}
      />

    </View >
  )
}
