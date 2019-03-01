import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Start from './containers/Start'
import Play from './containers/Play'
import Win from './containers/Win'
import Lose from './containers/Lose'

export const states = {
  START : 'Start',
  PLAY : 'Play',
  WIN : 'Win',
  LOSE : 'Lose'
}

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      currentState: states.START
    }

  }
  render() {

    let container 
    switch(this.state.currentState) {
      case states.START : 
      container = <Start />
      break
      case states.PLAY :
      container = <Play />
      break
      case states.WIN : 
      container = <Win />
      break
      case states.LOSE :
      container = <Lose />
    }

    return (
      <View style={styles.container}>
        {container}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
