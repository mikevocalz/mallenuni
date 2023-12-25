import { View, Text, TextInput, Pressable, Button, Platform } from "react-native"
import { Section, Div, Article, P, Span, H2, H5, BR } from '@expo/html-elements'
import { SolitoImage } from 'solito/image'
import { MotiPressable } from "moti/interactions"
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const isWeb = Platform.OS === 'web'
const services = [
  {
    id: 1,
    title: 'Web',
    icon: 'web',
    description: 'Our web apps provides a versatile and accessible solution accessible from any browser, ensuring a consistent experience across diverse platforms. With a responsive design and a user-friendly interface, our web app offers the flexibility of access from desktops, laptops, and mobile devices. Powered by cutting-edge web technologies, it provides a robust and scalable software experience for users on the go.',
  }, {
    id: 2,
    title: 'iOS',
    icon: 'apple-ios',
    description: 'Catering to the discerning iOS audience, our application for Apple devices delivers a polished and elegant user experience. With a focus on the latest iOS design principles, our app integrates seamlessly with Apple\'s ecosystem, offering a fluid and responsive interface.Users can expect a sophisticated and reliable software solution that takes full advantage of iOS capabilities.',
  }, {
    id: 3,
    title: 'Android',
    icon: 'android',
    description: 'Our Android application offers a seamless mobile experience, harnessing the power of the world\'s most popular operating system.Designed for optimal performance on a wide range of devices, our app provides users with a feature- rich interface and efficient functionalities, ensuring an immersive and intuitive experience for Android users.',
  },
]
export function AppSection() {
  return (
    <Section className="mb-3  w-full flex  ">
      <H2 className="my-20 text-3xl text-center text-white font-bold">Discover Our Software Solutions</H2>

      <Div className={`${isWeb ? 'grid lg:grid-cols-3 lg:gap-x-12' : 'flex flex-row flex-wrap'} px-6 mt-[70px] `}>
        {services.map((service) => (
          <Article key={service.id} className="mb-[80px] my-auto lg:mb-0 w-full">
            <Div
              className="block h-full rounded-lg bg-zinc-950 pb-[10px]">
              <Div className="flex justify-center">
                <Div className="-mt-8 mx-auto items-center justify-center rounded-full bg-violet-900 w-20 h-20 p-4 text-primary ">
                  <Icon name={service.icon}
                    as={MaterialCommunityIcons}
                    size={50}
                    color={'#fff'}
                  />
                </Div>
              </Div>
              <Div className="p-6 items-center  ">
                <H2 className="mb-5 text-white font-bold">{service.title}</H2>
                <P className="text-left text-[15px] text-zinc-300 font-bold leading-9">
                  {service.description}
                </P>
              </Div>
            </Div>
          </Article>
        ))}

      </Div>
    </Section>
  )
}