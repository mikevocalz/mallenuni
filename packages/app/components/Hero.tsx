import { View, Text, TextInput, Pressable, Button } from "react-native"
import { Section, Div, P, Span, H1, H3, LI, UL, A } from '@expo/html-elements'
import { SolitoImage } from 'solito/image'
import { MotiPressable } from "moti/interactions"
import RocketImg from '../../../apps/expo/assets/images/rocket-r.jpg';
import CirclesGrid from "./svgs/CirclesGrid";
import { MotiView, motify } from 'moti'

const MotifiedPress = motify(Pressable)()

export function HeroSection() {

  return (
    <Section className="w-full flex   pb-[110px] pt-[120px] dark:bg-dark lg:pt-[50px]">
      <Div className="mx-4 flex flex-row flex-wrap">
        <Div className="w-full  px-4 lg:w-5/12">
          <Div className="hero-content mb-20  ">
            <H1 className="mb-5 text-4xl font-bold leading-[50px]  lg:text-center text-white sm:text-[42px] lg:text-[40px] xl:text-5xl">
              Kickstart Your Future, Launch Your Dreams 🚀
            </H1>
            <P className="mb-8 max-w-[480px] sm:text-left text-center text-xl leading-9 text-white">
              Crafting Tomorrow's Solutions Today. We Innovate, You Excel. Elevate Your Vision with Apps</P>
            <UL className="flex ">
              <LI className="flex items-center sm:items-start">
                <MotiPressable
                  href="/about"
                  animate={({ hovered, pressed }) => {
                    'worklet'
                    return {
                      scale: pressed ? 0.9 : hovered ? 1.1 : 1,
                    }
                  }}
                // className="w-[300px]  items-center justify-center "
                >
                  <H3 className="px-10 py-4 w-[300px]  bg-violet-600 rounded-lg hover:bg-violet-500 text-center text-white">Get Started</H3>
                </MotiPressable>
              </LI>
            </UL>

          </Div>
        </Div>
        <Div className="hidden px-4 lg:block lg:w-1/12"></Div>

        <Div className="w-full h-full px-4 lg:w-6/12 ">
          <Div className="lg:ml-auto lg:text-right">
            <Div className="relative w-full z-10 inline-block pt-11 lg:pt-0">
              <SolitoImage

                src={RocketImg}
                alt="hero"
                priority
                contentFit="cover"
                alt="main image"
                width={500}
                height={700}
                style={{
                  width: '100%',
                  height: 700
                }}
                contentPosition={{ top: '5%', left: '50%' }}
              />
              <Span className="absolute -bottom-8 -left-8 z-[-1]">
                <CirclesGrid />
              </Span>
            </Div>
          </Div>
        </Div>
      </Div>
    </Section >
  )
}