import { createParam } from 'solito'
import { TextLink } from 'solito/link'

import { View, Text } from 'react-native'

const { useParam } = createParam<{ id: string }>()

export function UserDetailScreen() {
  const [id] = useParam('id')

  return (
    <View className="flex-1 h-full items-center min-h-screen self-center w-screen max-w-7xl bg-zinc-300">
      <Text className="mb-4 text-center font-bold">{`User ID: ${id}`}</Text>
      <TextLink href="/">👈 Go Home</TextLink>
    </View>
  )
}
