import { SafeArea } from './safe-area'
import { GestureHandlerRootView } from 'react-native-gesture-handler';


export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <GestureHandlerRootView>
      <SafeArea>
        {children}
      </SafeArea>
    </GestureHandlerRootView>
  )
}
