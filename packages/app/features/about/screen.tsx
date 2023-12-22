
import { AppSection } from 'app/components/AppSection'
import { CheckListSection } from 'app/components/CheckListSection'
import Logo from 'app/components/svgs/Logo'
import { View, Text, ScrollView, Platform } from 'react-native'


const isWeb = Platform.OS === 'web'

export function AboutScreen() {

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
        <Text >About</Text>
        <AppSection />
        <CheckListSection />
      </ScrollView>
    </View >
  )
}
