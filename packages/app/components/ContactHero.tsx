import { View, Text, TextInput, Pressable, Button, Platform } from "react-native"
import { Section, Div, P, Span, H1, H3, LI, UL, A } from '@expo/html-elements'
import { SolitoImage } from 'solito/image'
import { MotiPressable } from "moti/interactions"
import LeftImg from '../../../apps/expo/assets/images/m-office.jpg';
import RightImg from '../../../apps/expo/assets/images/f-office.jpg';
import CirclesGrid from "./svgs/CirclesGrid";
import { MotiView, motify } from 'moti'

const isWeb = Platform.OS === 'web'

export function ContactHero() {

  return (
    <Section className="w-full flex   pb-[110px] sm:pt-[120px]  lg:pt-[50px]">
      <Div className="mx-4 flex flex-row flex-wrap mb-[70px]">
        <Div className="w-full justify-center px-4 lg:w-5/12">
          <Div className="hero-content mb-20  ">
            <H1 className="mb-5 text-4xl font-bold leading-[50px]  lg:text-center text-white sm:text-[42px] lg:text-[40px] xl:text-5xl">
              Connect with Our Team
            </H1>
          </Div>
        </Div>
        <Div className="hidden px-4 lg:block lg:w-1/12"></Div>

        <Div style={{ paddingHorizontal: !isWeb ? 0 : 16 }}
          className="w-full h-full lg:w-6/12 ">
          <Div className="lg:ml-auto lg:text-right">
            <Div className="relative w-full z-10 inline-block pt-11 lg:pt-0">
              <SolitoImage
                src={LeftImg}
                alt="hero"
                priority
                contentFit="cover"
                alt="main image"
                width={500}
                height={700}
                style={{
                  width: '100%',
                  height: 400
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




      <Div className="mx-4 flex flex-row flex-wrap !mt-[100px]">


        <Div style={{ paddingHorizontal: !isWeb ? 0 : 16 }}
          className="w-full h-full lg:w-6/12 ">
          <Div className="lg:ml-auto lg:text-right">
            <Div className="relative w-full z-10 inline-block pt-11 lg:pt-0">
              <SolitoImage
                src={RightImg}
                alt="hero"
                priority
                contentFit="cover"
                alt="main image"
                width={500}
                height={700}
                style={{
                  width: '100%',
                  height: 400
                }}
                contentPosition={{ top: '5%', left: '50%' }}
              />
              <Span className="absolute -bottom-8 -right-8 z-[-1]">
                <CirclesGrid />
              </Span>
            </Div>
          </Div>
        </Div>

        <Div className="hidden px-4 lg:block lg:w-1/12"></Div>


        <Div className="w-full justify-center px-4 lg:w-5/12">
          <Div className="hero-content ">
            <H1 className="mb-5 text-4xl font-bold leading-[50px]  lg:text-center text-white sm:text-[42px] lg:text-[40px] xl:text-5xl">
              Contact Us for Your Next Project
            </H1>
          </Div>
        </Div>
      </Div>
    </Section >
  )
}