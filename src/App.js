import './config/ReactotronConfig';
import React, {Component} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import {View, Text} from 'react-native';

import createNavigator from './routes';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userChecked: false,
      userLogged: false,
    };
  }

  async componentDidMount() {
    const username = await AsyncStorage.getItem('@Githuber:username');

    this.setState({
      userChecked: true,
      userLogged: !!username,
    });
  }

  render() {
    const {userChecked, userLogged} = this.state;

    if (!userChecked) return null;

    const Routes = createNavigator(userLogged);

    return <Routes />;
  }
}

export default App;
