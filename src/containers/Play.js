import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Play extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.gameWord}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
