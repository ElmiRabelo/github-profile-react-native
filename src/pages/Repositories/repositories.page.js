import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

console.tron.log('Será que vai aGORA?? ');
const Repositories = () => (
  <View style={styles.container}>
    <Text>Repositories Page</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Repositories;
