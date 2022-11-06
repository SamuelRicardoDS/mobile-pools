import { StyleSheet } from 'react-native';
import { NativeBaseProvider, StatusBar  } from 'native-base';

import { Loading } from './src/components/Loading';
import { THEME } from './src/styles/theme'
import { SignIn } from './src/screens/SignIn';

import { useFonts, Roboto_400Regular, Roboto_500Medium,  Roboto_700Bold } from '@expo-google-fonts/roboto';
export default function App() {
  const [fontsLoaded] = useFonts({
    useFonts, Roboto_400Regular, Roboto_500Medium,  Roboto_700Bold
  })

  return (
    <NativeBaseProvider theme={THEME}>
        <StatusBar barStyle='light-content' backgroundColor="transparent" translucent />
        {fontsLoaded ? <SignIn /> : <Loading />}
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#FFF',
    fontSize: 24
  }
});
