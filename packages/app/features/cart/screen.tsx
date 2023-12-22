
import { View, Text } from 'react-native'
import { TextLink } from 'solito/link'
import { MotiLink } from 'solito/moti'
import { H1, P, A } from '@expo/html-elements'


export function CartScreen() {
  return (
    <View className="flex-1 h-full items-center min-h-screen self-center w-screen max-w-7xl p-3 bg-red-900">
      <H1>Welcome to Solito.</H1>
      <View className="max-w-xl">
        <P className="text-center">
          Here is a basic starter to show you how you can navigate from one
          screen to another. This screen uses the same code on Next.js and React
          Native.
        </P>
        <P className="text-center">
          Solito is made by{' '}
          <A
            href="https://twitter.com/fernandotherojo"
            hrefAttrs={{
              target: '_blank',
              rel: 'noreferrer',
            }}
          >
            Fernando Rojo
          </A>
          .
        </P>
        <P className="text-center">
          NativeWind is made by{' '}
          <A
            href="https://twitter.com/mark__lawlor"
            hrefAttrs={{
              target: '_blank',
              rel: 'noreferrer',
            }}
          >
            Mark Lawlor
          </A>
          .
        </P>
      </View>
      <View className="h-[32px]" />
      <TextLink href="/user/fernando">Regular Link</TextLink>
      <MotiLink
        href="/user/fernando"
        animate={({ hovered, pressed }) => {
          'worklet'

          return {
            scale: pressed ? 0.95 : hovered ? 1.1 : 1,
            rotateZ: pressed ? '0deg' : hovered ? '-3deg' : '0deg',
          }
        }}
        transition={{
          type: 'timing',
          duration: 150,
        }}
      >
        <Text selectable={false} className="text-base font-bold">
          Moti Link
        </Text>
      </MotiLink>

    </View>
  )
}
