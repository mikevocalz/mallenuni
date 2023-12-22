import { View, Text, Platform } from 'react-native'
import { TestimonySection } from 'app/components/TestimonySection';
import { NewsLetterSection } from 'app/components/NewsLetterSection';
import { HeroSection } from 'app/components/Hero';
import { ScrollView } from 'moti';

const isWeb = Platform.OS === 'web'

export function HomeScreen() {

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
        <HeroSection />
        <TestimonySection />
        <NewsLetterSection />
      </ScrollView>
    </View >
  )
}

