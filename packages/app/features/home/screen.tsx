
import { View, Text, Platform } from 'react-native'
import { TestimonySection } from 'app/components/TestimonySection';
import { NewsLetterSection } from 'app/components/NewsLetterSection';
import { HeroSection } from 'app/components/Hero';

export function HomeScreen() {

  const isWeb = Platform.OS === 'web'
  return (
    <View className='flex-1 items-center min-h-screen max-w-7xl w-full '>
      <HeroSection />
      <TestimonySection />
      <NewsLetterSection />
    </View >
  )
}

