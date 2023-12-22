import { Platform, Text, View } from "react-native";
import { Stack } from "expo-router";
import { Link } from 'solito/link'

import { MotiLink } from 'solito/moti/app'


export function MissingScreen() {
  return (
    <View className="flex-1 items-center min-h-screen justify-center p-3 bg-red-300" >
      <Text className="text-black-600">This screen doesnt exist.</Text>

      <Link href="/" >
        <Text className="text-black-400">Go Back to home screen!</Text>
      </Link>
    </View>
  )
}
