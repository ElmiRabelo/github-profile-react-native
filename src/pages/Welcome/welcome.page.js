import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

// import { Container } from './styles';

const Welcome = () => (
  <View style={styles.container}>
    <Text>Welcome Page</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Welcome;
