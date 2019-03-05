import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Constants } from 'expo';

import NumberPicker from './components/NumberPicker';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

function randomInRange(a, b) {
  return Math.floor(Math.random() * (b + 1 - a)) + a;
}

const Images = {
  thinking: require('./assets/thinking.png'),
  gotIt: require('./assets/got-it.png'),
};

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      number: undefined,
      numPlayers: 2,
    };
    this.reset();
  }
  reset() {
    this.setState({
      number: undefined,
    });
  }
  go() {
    this.setState({
      number: randomInRange(1, this.state.numPlayers),
    });
  }
  onPressNick() {
    if (this.state.number) {
      this.reset();
    } else {
      this.go();
    }
  }
  getImage() {
    if (this.state.number) {
      return Images.gotIt;
    } else {
      return Images.thinking;
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity activeOpacity={1} onPress={this.reset.bind(this)} style={styles.flex}>
          <NumberPicker
            selectedValue={this.state.numPlayers}
            onValueChange={value =>
              this.setState({numPlayers: value})
            }
            incrementEnabled={this.state.numPlayers <= 9}
            decrementEnabled={this.state.numPlayers > 1}
          />
          <View style={styles.resultContainer}>
            <Text style={styles.resultText}>
              {this.state.number || '?'}
            </Text>
          </View>
          <TouchableOpacity activeOpacity={1} style={styles.nickContainer} onPress={this.onPressNick.bind(this)}> 
            <Image
              resizeMode={'contain'}
              fadeDuration={0}
              style={styles.nickImage}
              source={this.getImage()}
            />
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  flex: {
    flex: 1,
  },
  nickContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  nickImage: {
    height: '100%',
  },
  resultContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  resultText: {
    fontSize: 120,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
