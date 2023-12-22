
import { View, Text, ScrollView, Platform } from 'react-native'
import { Section, Div, Article, P, Span, H2, H4, BR } from '@expo/html-elements'

const isWeb = Platform.OS === 'web'
export function WorkScreen() {


  return (
    <View
      className='flex-1 items-center min-h-screen max-w-7xl w-full bg-black '>
      <ScrollView className='pb-[300px]'
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: !isWeb ? 200 : null,
          paddingTop: !isWeb ? 40 : null
        }}
        contentContainerClassName='flex-1 w-full bg-black '>

        <H2 className="mb-6 text-3xl text-white text-center font-bold">Portfolio Showcase</H2>

      </ScrollView>
    </View >
  )
}
