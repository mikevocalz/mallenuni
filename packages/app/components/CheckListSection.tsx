/* eslint-disable react/no-unescaped-entities */
import { View, Text, TextInput, Pressable, Button, Platform } from "react-native"
import { Section, Div, Article, P, Span, H2, H4, BR } from '@expo/html-elements'
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
    description: 'Our web apps provides a versatile and accessible solution accessible from any browser, ensuring a consistent experience across Diverse platforms. With a responsive design and a user-friendly interface, our web app offers the flexibility of access from desktops, laptops, and mobile devices. Powered by cutting-edge web technologies, it provides a robust and scalable software experience for users on the go.',
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


const list = [
  {
    id: 1,
    title: 'Analytics',
  },
  {
    id: 2,
    title: 'Updates'
  },
  {
    id: 3,
    title: 'Tech Support'
  },
  {
    id: 4,
    title: 'Yearly Maintenance'
  },
  {
    id: 5,
    title: 'Push Notifications'
  }, {
    id: 6,
    title: 'Hosting'
  },
  {
    id: 7,
    title: 'UI/UX'
  }, {
    id: 8,
    title: 'Authentication'
  }, {
    id: 9,
    title: 'Design Services'
  }
]


export function CheckListSection() {
  return (
    <Section className=" rounded-lg mt-[60px]">



      <Div
        className=" bg-zinc-950 items-center px-8 py-12  ">
        <H2 className="mb-6 text-3xl text-white text-center font-bold">Why 5th Galaxy Studio's?</H2>
        <H4 className="mb-8 text-neutral-200 text-center leading-9 max-w-5xl">
          Our apps boasts a diverse array of features, ranging from intuitive user interfaces to robust functionality, ensuring a seamless experience for both novice and advanced users. With a focus on innovation and user-centric design, our software delivers unparalleled convenience, making it an indispensable tool for your needs.
        </H4>

        <Div className={`${isWeb ? 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3' : ' flex-row max-w-4xl justify-center flex-wrap'} items-center   gap-x-6 `}>

          {list.map((item, index) => {
            return (
              <Div key={index} className="flex mr-4">
                <P className="justify-center items-center space-x-3 mb-6">
                  <Icon name={'check'}
                    as={MaterialCommunityIcons}
                    size={30}
                    color={'#ca8a04'}
                  />
                  <Text className="text-white text-left text-lg ml-2">{item.title}</Text>
                </P>
              </Div>
            )
          })}
        </Div>


      </Div>

    </Section>
  )
}