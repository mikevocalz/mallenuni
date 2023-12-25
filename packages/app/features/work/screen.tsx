
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
import { WorkCard } from 'app/components/WorkCard';



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



export interface Work {
  id: string;
  imgURL: string;
  text: string;
}

export interface ItemProps {
  item: Work;
  index: number;
}





export function WorkScreen() {

  const renderItem = ({ item, index }): ReactElement => {
    return (
      <WorkCard item={item} index={index} />
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
          marginTop: 40,

        }}
        contentContainerClassName='flex w-full'
        ListHeaderComponent={
          <H2 className="mt-6 mb-[80px] text-3xl text-white text-center font-bold">Portfolio Showcase</H2>
        }

        data={data}
        renderItem={(item: any) => renderItem(item)}
        keyExtractor={(item: Work) => item.id}
        numColumns={3}
      />
    </View >
  )
}
