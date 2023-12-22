
import { View, Text, FlatList, Pressable, ScrollView, Platform, Image, Dimensions } from 'react-native'
import { Section, Div, Article, P, Span, H2, H4, BR } from '@expo/html-elements'
import { MotiView, motify } from 'moti'
import MasonryList from '@react-native-seoul/masonry-list';
import type { FC, ReactElement } from 'react';
import { SolitoImage } from 'solito/image'

import React, { useMemo } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';

const MotiFlatList = motify(MasonryList)()

const isWeb = Platform.OS === 'web'
import clagart from '../../../../apps/expo/assets/images/clagart.png';
import { MotiLink } from 'solito/moti';



const data: Work[] = [
  {
    id: 'id123',
    imgURL: 'https://mir-s3-cdn-cf.behance.net/projects/808/700b1c90699979.Y3JvcCw4MDgsNjMyLDAsMA.jpg',
    text: 'WhatSupps',
  },
  {
    id: 'id124',
    imgURL: 'https://mir-s3-cdn-cf.behance.net/projects/404/cd2ada47709425.Y3JvcCw2MzksNTAwLDY2LDcx.jpg',
    text: 'Power Rangers Unlimited',
  },
  {
    id: 'id125',
    imgURL: clagart,
    text: 'Clagart',
  },
  {
    id: 'id126',
    imgURL: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/97d89e47709825.5882456166270.jpg',
    text: 'the Wiz Flyer',
  },
  {
    id: 'id127',
    imgURL: 'https://mir-s3-cdn-cf.behance.net/projects/202/3005753.545acf006b917.jpg',
    text: 'Mackability Logo',
  }, {
    id: 'id128',
    imgURL: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/9f6a8c47711073.58824c9893cbb.jpg',
    text: 'Mount Sinai Hospital',
  }
]



interface Work {
  id: string;
  imgURL: string;
  text: string;
}

const { width, height } = Dimensions.get('window');

const WorkCard: FC<{ item: Work }> = ({
  item
}) => {

  return (
    <MotiLink
      href={"/user/fernando"}
      from={{
        opacity: 0,
        scale: 0.9,
      }}
      animate={({ hovered, pressed }) => {
        'worklet'
        return {
          scale: pressed ? 0.9 : hovered ? 1.1 : 1,
          opacity: 1,

        }
      }}

      exit={{
        opacity: 0,
        scale: 0.9,
      }}
      exitTransition={{
        type: 'timing',
        duration: 2500,
      }}
    >
      <View key={item.id}
        className='mt-2 flex-1 bg-zinc-950 p-2 mx-4 rounded-xl overflow-hidden mb-[30px]'
      >
        <SolitoImage
          width={56}
          height={56}
          alt="student avatar"
          priority
          unoptimized
          src={item.imgURL}
          contentFit="cover"
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            resizeMode: 'contain',
            borderRadius: 12,
            //aspectRatio: 4 / 3,
            width: width,
            //height: height / 3,
            alignSelf: 'stretch',
          }}
        />
        <Text
          className='text-center text-zinc-200 my-4 font-bold'>
          {item.text}
        </Text>
      </View>
    </MotiLink>
  );
};

export function WorkScreen() {

  const renderItem = ({ item, i }): ReactElement => {
    return (
      <WorkCard item={item} />
    );
  };

  return (
    <View
      className='flex-1 items-center min-h-screen max-w-7xl w-full  bg-black   '>
      <MotiFlatList
        className='pb-[300px]'
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: !isWeb ? 200 : null,
          paddingTop: !isWeb ? 40 : null,
          paddingHorizontal: 24,
          marginTop: 40
        }}
        contentContainerClassName='flex w-full'
        ListHeaderComponent={
          <H2 className="my-14 mb-[80px] text-3xl text-white text-center font-bold">Portfolio Showcase</H2>
        }

        data={data}
        renderItem={renderItem}
        keyExtractor={(item: Work): string => item.id}
        numColumns={3}
      />
    </View >
  )
}
