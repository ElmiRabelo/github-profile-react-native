import Reactotron from 'reactotron-react-native';
import {AsyncStorage} from 'react-native';

if (__DEV__) {
  const tron = Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure({host: '127.0.0.1'}) // controls connection & communication settings
    .useReactNative()
    .connect();
  console.tron = tron;
  tron.clear();
}
