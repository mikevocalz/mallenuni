import { View, Text, TextInput, Pressable, Button } from "react-native"
import { Section, Div, Article, P, Span, H1 } from '@expo/html-elements'
import { SolitoImage } from 'solito/image'
import { MotiPressable } from "moti/interactions"
import BGImage from '../../../apps/expo/assets/images/purple-space.jpg';



export function NewsLetterSection() {

  return (
    <Section className="2xl:mx-auto 2xl:container mx-4 flex w-full">
      <Div className="w-full relative flex items-center justify-center p-4">
        <SolitoImage
          src={BGImage}
          width={1920}
          height={1080}
          alt="dining"
          className="w-full h-full absolute z-0  xl:block"
          priority
          contentFit="cover"
          contentPosition={{ top: '5%', left: '50%' }}

        />
        <Div className="bg-slate-600 max-w-5xl rounded-3xl sm:rounded-2xl bg-opacity-80 md:my-16 lg:py-16 py-10 w-full md:mx-24 md:px-12 px-4 flex flex-col items-center justify-center relative z-40">
          <H1 className="text-4xl font-semibold leading-9 text-white text-center">Don’t miss out!</H1>
          <P className="text-lg leading-8 text-center text-white mt-6">
            Subscribe to your newsletter to stay in the loop. Our newsletter is sent once in <br />
            a week on every friday so subscribe to get latest news and updates.
          </P>
          <Div className="rounded-xl sm:bg-white flex-col sm:flex-row flex items-center lg:w-5/12 w-full mt-12 space-y-4 sm:space-y-0">
            <TextInput placeholderClassName="pl-8" placeholderTextColor={'#000'}
              className="rounded-xl border border-white sm:border-transparent text-base w-full font-medium leading-none text-black p-4 focus:outline-none bg-white placeholder-zinc-500" placeholder="Email Address" />
            <Pressable className="bg-violet-800 rounded-xl focus:outline-none focus:ring-offset-2 focus:ring border border-white sm:border-transparent w-full sm:w-auto py-4 px-6 hover:bg-opacity-75">
              <Text className="text-center text-white font-bold text-lg">Subscribe</Text></Pressable>
          </Div>
        </Div>
      </Div>
    </Section>
  )
}