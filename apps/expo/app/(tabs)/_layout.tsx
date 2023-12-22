import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';



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
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'blue',
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
      {tabs.map((tab) => {
        return (
          <Tabs.Screen
            key={tab.id}
            name={`${tab.screen}`}
            options={{
              title: tab.title,
              tabBarIcon: ({ color }) => <TabBarIcon name={tab.icon} color={color} />
            }}

          />
        )
      })}
    </Tabs>
  );
}
