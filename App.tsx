import React, { useCallback, useEffect, useState } from 'react';
import * as Font from 'expo-font';
import { View, Text } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import AboutScreen from "./src/screens/AboutScreen";
import AppLoading from 'expo-app-loading';
import HomeScreen from './src/screens/HomeScreen';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => { 
    async function prepare() { 
      try { 
        await Font.loadAsync({
          'nunito-bold': require('./src/assets/fonts/Nunito-Bold.ttf'),
          'nunito-regular': require('./src/assets/fonts/Nunito-Regular.ttf')
        });
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch(e) { 
        console.warn("error");
        console.warn(e);
      } finally { 
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => { 
    if (appIsReady) { 
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) { 
    return null;
  } else {
    return (
      <View onLayout={onLayoutRootView}>
        <HomeScreen />
      </View>
    );
  }
}