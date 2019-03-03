import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { states } from '../App'

export default class Start extends React.Component {

    

  render() {
    return (
      <View style={styles.container}>
        <Button title="START" onPress={this.props.startGame}></Button>
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
