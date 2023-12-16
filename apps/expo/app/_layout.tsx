import '../global.css'
import { Provider } from 'app/provider'
import { Stack } from 'expo-router'
import { View, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar'


export default function Root() {
  return (
    <Provider>
      <StatusBar animated style='dark' />
      <Stack />

    </Provider>
  )
}
