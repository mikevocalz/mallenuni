
import { ReactNode, ReactElement } from 'react'
import { View, Text, useWindowDimensions } from 'react-native'
import { WebHeader } from "app/components/WebHeader";
import WebFooter from "app/components/WebFooter";
import dynamic from "next/dynamic";
import { Main } from '@expo/html-elements'
function WebLayout({ children }): ReactElement {

  return (
    <View className="relative -z-40  flex-col bg-black min-h-full w-screen overflow-y-hidden ">
      <WebHeader />
      <Main className='w-full items-center mt-[70px]'>{children}</Main>
      <WebFooter />
    </View>
  )
}



export default dynamic(() => Promise.resolve(WebLayout), { ssr: false })
