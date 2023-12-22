import { View, Text, Platform } from "react-native"
import { Section, BlockQuote, Article, P, Span } from '@expo/html-elements'
import SVGStar from "./svgs/SVGStars"
import { SolitoImage } from 'solito/image'
import { remapProps } from "nativewind"

import FontAwesome from '@expo/vector-icons/FontAwesome'
import Icon from 'react-native-vector-icons/FontAwesome';

const RNSection = remapProps(Section, { className: "style" });
const mobile = Platform.OS !== 'web'
const testimonials = [
  {
    id: 1,
    name: 'Paul Starr',
    stars: 5,
    avatar: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
  },
  {
    id: 2,
    name: 'Tasha Middleton',
    stars: 5,
    avatar: 'https://images.unsplash.com/photo-1507152832244-10d45c7eda57?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    name: 'James Adams',
    stars: 5,
    avatar: 'https://images.unsplash.com/photo-1645378999496-33c8c2afe38d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 4,
    name: 'Rose Dominguez',
    stars: 5,
    avatar: 'https://images.unsplash.com/photo-1617737164424-bb12fad85e0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGJsYWNrJTIwbGF0aW5vJTIwd29tYW58ZW58MHx8MHx8fDA%3D',
  },
  {
    id: 5,
    name: 'Azuza Nwankwo',
    stars: 5,
    avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJsYWNrJTIwd29tYW58ZW58MHx8MHx8fDA%3D',
  },
  {
    id: 6,
    name: 'Victor Rodriguez',
    stars: 5,
    avatar: 'https://images.unsplash.com/photo-1603208636390-4bce7c1d3846?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGJsYWNrJTIwbGF0aW5vJTIwbWFufGVufDB8fDB8fHww',
  },

]

const numItemsToRender = mobile ? 3 : 6;

export function TestimonySection() {
  return (
    <Section className="flex pb-[200px]">
      <View className="mx-auto  max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16 items-center">
        <Text style={{ marginTop: mobile ? 60 : null }}
          className="text-center mb-10 max-w-[500px] leading-lose text-4xl font-bold  text-gray-100 sm:text-5xl">
          Read Trusted Reviews
        </Text>

        <View className={`mt-8  ${mobile ? 'flex-row flex-wrap gap-3' : 'mx-8  grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-14 lg:gap-20 '} `}>
          {testimonials.slice(0, numItemsToRender).map((testimony, i) => {
            return (
              <Article key={i} className="mb-4 items-center justify-center rounded-xl  min-w-[300px] p-3 bg-zinc-950">
                <BlockQuote
                  style={{
                    padding: 10,
                  }}
                >
                  <View className="flex flex-row items-center gap-4">

                    <SolitoImage
                      width={56}
                      height={56}
                      alt="student avatar"
                      priority
                      src={testimony.avatar}
                      contentFit="cover"
                      style={{
                        //flex: 1,
                        borderRadius: 56 / 2,
                        right: 0,
                        width: 56,
                        height: 56
                      }}
                    />
                    <View>

                      <View className="flex flex-row  gap-0.5">
                        {[0, 1, 2, 3, 4].map((_, i) => {
                          return (
                            <SVGStar
                              key={i}
                              width={20}
                              height={20}
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              className="text-yellow-300"
                            />
                          )
                        }
                        )}
                      </View>

                      <Text className="mt-0.5 text-lg  text-gray-100 font-semibold ">{testimony.name}</Text>
                    </View>
                  </View>

                  <P className="mt-4 text-[18px] leading-7 text-gray-300">
                    <Span className="text-4xl mr-1 text-yellow-600"><Icon name={'quote-left'}
                      as={FontAwesome}
                      size={30}
                    /></Span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a
                    consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus
                    error officiis atque voluptates magnam!<Span className="text-4xl ml-1 text-yellow-600 leading-[20px]"><Icon
                      name={'quote-right'}
                      as={FontAwesome}
                      size={30}
                    /></Span>
                  </P>
                </BlockQuote>
              </Article>



            )
          })}
        </View>
      </View>

    </Section >
  )
}