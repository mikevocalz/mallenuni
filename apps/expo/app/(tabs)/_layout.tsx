import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';
import { SolitoImage } from 'solito/image';
import logoImg from '../../assets/images/5thgalx-hor.png';



// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

const tabs = [
  { id: 1, screen: 'index', title: 'home', icon: 'home' },
  { id: 2, screen: 'work', title: 'work', icon: 'list' },
  { id: 3, screen: 'about', title: 'about', icon: 'book' }
]

export default function TabLayout() {

  return (
    <Tabs
      initialRouteName='index'
      screenOptions={{
        headerTitleAlign: 'left',
        headerTitle: () =>
          <SolitoImage
            alt='logo'
            src={logoImg}
            width={200}
            height={150}
            contentFit={'contain'}
            style={{
              width: 210,
              height: 80,
              marginBottom: 3,
              marginLeft: -12
            }}
            priority
            unoptimized
          />,
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#e5e7eb',
        headerStyle: {
          backgroundColor: '#a78bfa',
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0
        },
        tabBarStyle: {
          backgroundColor: '#4c1d95',
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          borderWidth: 0
        },
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: true,
        headerRight: () => (
          <Link href="/modal" asChild>
            <Pressable>
              {({ pressed }) => (
                <FontAwesome
                  name="shopping-cart"
                  size={25}
                  color={'red'}
                  style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                />
              )}
            </Pressable>
          </Link>
        )
      }}>
      {
        tabs.map((tab) => {
          return (
            <Tabs.Screen
              key={tab.id}
              name={`${tab.screen}`}
              options={{
                title: tab.title.toUpperCase(),
                tabBarIcon: ({ color }) => <TabBarIcon name={tab.icon} color={color} />
              }}

            />
          )
        })
      }
    </Tabs >
  );
}
