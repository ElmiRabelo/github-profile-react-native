import React from 'react';

import {View, Text, TextInput, TouchableOpacity, StatusBar} from 'react-native';

import styles, {barColor} from './welcome.styles';

const Welcome = () => (
  <View style={styles.container}>
    <StatusBar barStyle="light-content" backgroundColor={barColor} />
    <Text style={styles.title}>Bem-vindo</Text>
    <Text style={styles.text}>
      Informe o nome do usuário do GitHub para continuar.
    </Text>
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        placeholder="Digite o nome do usuário"
        underlineColorAndroid="transparent"
      />
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Prosseguir</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default Welcome;
