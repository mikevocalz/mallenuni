import { View, Text, Pressable, useWindowDimensions } from 'react-native'
import { Header, Nav } from '@expo/html-elements'
import { Link } from 'solito/link';
import { SolitoImage } from 'solito/image';
import Icon from 'react-native-vector-icons/MaterialIcons';
//@ts-ignore
import logoImg from '../../../apps/expo/assets/images/5thgalx-hor.png';

import SideBar from './SideBar';
import { MotiLink } from 'solito/moti'
import { usePathname } from 'solito/navigation'




const headerLinks: Array<{
  pathname: string
  isActive(pathname: string): boolean
  name: string
  protected?: boolean
}> = [
    {
      pathname: '/',
      isActive: (pathname) => pathname === '/',
      name: 'Home',
      protected: false
    },
    {
      pathname: '/work',
      isActive: (pathname) => pathname.startsWith('/work'),
      name: 'Work',
      protected: false
    },
    {
      pathname: '/about',
      isActive: (pathname) => pathname.startsWith('/about'),
      name: 'About',
      protected: false
    },
    {
      pathname: '/contact',
      isActive: (pathname) => pathname.startsWith('/contact'),
      name: 'Contact',
      protected: false
    }
  ]

export function WebHeader() {
  let session
  let comments
  const items: number = 10

  const { width, height } = useWindowDimensions();
  const pathname = usePathname()


  return (
    <Header className='headingNav fixed inset-x-0  left-0 top-0 right-0 z-40 border-b-[0.5px] border-black bg-violet-400  h-[70px]' >
      <View className='flex w-full items-center left-0 right-0 justify-center  sticky'>
        <View className=' flex-row w-screen max-w-7xl pr-2 justify-between'>
          <View className="flex items-center justify-center ml-[8px] md:ml-4">
            <Link href="/">
              <Pressable className="relative h-[70px]  cursor-pointer transition hover:opacity-90">
                <SolitoImage
                  alt='logo'
                  src={logoImg}
                  width={260}
                  height={200}
                  contentFit={'contain'}
                  style={{
                    width: width > 390 ? 220 : 300,
                    height: 70
                  }}
                  priority
                />
              </Pressable>
            </Link>
          </View>
          <Nav
            className="hiddenNav"
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',

            }}  >

            {headerLinks.map((headerLink: any, idx: number) => {
              const active = headerLink.isActive(pathname)

              return (
                <MotiLink
                  key={idx}
                  href={headerLink.pathname}
                  animate={({ hovered, pressed }) => {
                    'worklet'
                    return {
                      scale: pressed ? 0.95 : hovered ? 1.2 : 1,
                    }
                  }}
                  transition={{
                    type: 'timing',
                    duration: 150,
                  }}
                  style={{ marginHorizontal: 16 }}
                >
                  <Text className={`hidden md:flex text-[26px]  stroke-red-600 tracking-wider leading-10 uppercase font-[BebasNeue-Bold] ${active ? 'text-black text-[28px]' : 'text-zinc-50'}`} >{headerLink.name}</Text>
                </MotiLink>
              )
            }
            )}


          </Nav>
          <View className="flex items-center flex-row justify-center ">

            <Link href="/cart">
              <View className="relative cursor-pointer mr-[2px]">
                {/* {items.length > 0 && ( */}
                <Text className="absolute right-2 -top-1 z-50 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-red-600 to-red-900 text-[10px] font-bold text-white">
                  {/* {items.length} */}
                  10
                </Text>
                {/*  )} */}
                <Pressable className="headerIcon mr-3" onClick={() => null}>
                  <Icon name="shopping-cart" size={36} color="#000" />
                </Pressable>
              </View>
            </Link>

            {
              <SideBar />
            }
          </View>
        </View>
      </View>
    </Header>
  )
}


