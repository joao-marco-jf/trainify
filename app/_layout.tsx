import '../tamagui-web.css'

import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
// import { useColorScheme } from 'react-native'

import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'


import { TamaguiProvider } from 'tamagui'
import appConfig from '../tamagui.config'

export default function RootLayout() {
  const colorScheme = "dark" //useColorScheme()
  const [ loaded ] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })

  if (!loaded) return null;

  return (
    <TamaguiProvider config={appConfig} defaultTheme={colorScheme!}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </ThemeProvider>
    </TamaguiProvider>
  )
}