import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import styles, {barColor} from './welcome.styles';

import api from '../../services/api';

class Welcome extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };
  constructor() {
    super();
    this.state = {
      username: '',
      loading: false,
      error: false,
    };
  }

  checkUserExists = async username => {
    const user = await api.get(`/users/${username}`);

    return user;
  };

  saveUser = async username => {
    await AsyncStorage.setItem('@Githuber:username', username);
  };

  signIn = async () => {
    const {username} = this.state;
    const {navigation} = this.props;

    this.setState({loading: true});

    try {
      await this.checkUserExists(username);
      await this.saveUser(username);

      navigation.navigate('Repositories');
    } catch (err) {
      this.setState({loading: false, error: true});
    }
  };

  render() {
    const {username, loading, error} = this.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={barColor} />
        <Text style={styles.title}>Bem-vindo</Text>
        <Text style={styles.text}>
          Informe o nome do usuário do GitHub para continuar.
        </Text>

        {error && <Text style={styles.error}>O usuário não existe</Text>}
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            placeholder="Digite o nome do usuário"
            underlineColorAndroid="transparent"
            value={username}
            onChangeText={evt => this.setState({username: evt})}
          />
          <TouchableOpacity style={styles.button} onPress={this.signIn}>
            {loading ? (
              <ActivityIndicator size="small" color="#FFF" />
            ) : (
              <Text style={styles.buttonText}>Prosseguir</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Welcome;
