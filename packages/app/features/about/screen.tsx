
import { AppSection } from 'app/components/AppSection'
import { CheckListSection } from 'app/components/CheckListSection'
import Logo from 'app/components/svgs/Logo'
import { View, Text, Platform } from 'react-native'
import { ScrollView } from 'moti';


const isWeb = Platform.OS === 'web'

export function AboutScreen() {

  return (

    <View
      className='flex-1 items-center min-h-screen max-w-7xl w-full bg-black '>
      <ScrollView
        from={{
          opacity: 0,
          scale: 0.9,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          scale: 0.9,
        }}
        exitTransition={{
          type: 'timing',
          duration: 2500,
        }}
        className='pb-[300px]'
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
