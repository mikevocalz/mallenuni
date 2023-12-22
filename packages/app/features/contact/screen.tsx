
import { View, Text } from 'react-native'
import { MotiLink } from 'solito/moti'

export function ContactScreen() {


  return (
    <View className='flex-1 h-full items-center min-h-screen self-center w-screen max-w-7xl  bg-red-500 p-4'
    >
      <Text>Contact</Text>

      <MotiLink
        href={'/user/fernando'}
        animate={({ hovered, pressed }) => {
          'worklet'
          return {
            scale: pressed ? 0.9 : hovered ? 1.1 : 1,
          }
        }}
      >
        Link Me
      </MotiLink>
    </View >
  )
}
