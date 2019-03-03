import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Start from './containers/Start'
import Play from './containers/Play'
import Win from './containers/Win'
import Lose from './containers/Lose'
import Game from './Game'

export const states = {
  START: 'Start',
  PLAY: 'Play',
  WIN: 'Win',
  LOSE: 'Lose'
}

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      currentState: states.START,
      gameWord: ''
    },
      this.game = new Game()
  }

  setAppState = (newPage) => {
    //console.log(newPage)
    this.setState({
      currentState: newPage
    }
    )
  }

  startGame = () => {
    this.setAppState(states.PLAY)
    this.setState({
      gameWord : this.game.getRandomWord()
    })
  }

  render() {

    let container
    switch (this.state.currentState) {
      case states.START:
        container = <Start startGame={this.startGame} />
        break
      case states.PLAY:
        container = <Play setAppState={this.setAppState} gameWord={this.state.gameWord}/>
        break
      case states.WIN:
        container = <Win setAppState={this.setAppState} />
        break
      case states.LOSE:
        container = <Lose setAppState={this.setAppState} />
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
