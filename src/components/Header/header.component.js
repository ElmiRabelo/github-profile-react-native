import React from 'react';
import PropTypes from 'prop-types';

import {View, Text, TouchableOpacity, StatusBar} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles, {barColor} from './header.styles';

const Header = ({title}) => (
  <View style={styles.container}>
    <StatusBar barStyle="dark-content" backgroundColor={barColor} />
    <View style={styles.left} />
    <Text style={styles.title}>{title}</Text>
    <TouchableOpacity onPress={() => {}}>
      <Icon name="exchange" size={16} style={styles.icon} />
    </TouchableOpacity>
  </View>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
