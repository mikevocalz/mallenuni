
import { ContactHero } from 'app/components/ContactHero'
import { View, Text, ScrollView, Platform } from 'react-native'
import { MotiLink } from 'solito/moti'


const isWeb = Platform.OS === 'web'

export function ContactScreen() {


  return (
    <View
      className='flex-1 items-center min-h-screen max-w-7xl w-full bg-black '>
      <ScrollView className='pb-[300px]'
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: !isWeb ? 200 : null,
          paddingTop: !isWeb ? 40 : 0
        }}
        contentContainerClassName='flex-1 w-full bg-black '>
        <ContactHero />
      </ScrollView>
    </View >
  )
}
