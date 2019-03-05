import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class NumberPicker extends React.Component {
  onIncrement() {
    this.props.onValueChange(this.props.selectedValue + 1);
  }
  onDecrement() {
    this.props.onValueChange(this.props.selectedValue - 1);
  }
  render() {
    const decrementEnabled = this.props.decrementEnabled;
    const incrementEnabled = this.props.incrementEnabled;
  
    return (
      <View style={styles.container}>
        <TouchableOpacity 
          style={[styles.button].concat(decrementEnabled ? [] : [styles.disabledButton])}
          onPress={this.onDecrement.bind(this)}
          disabled={!this.props.decrementEnabled}  
        >
          <Ionicons name="md-remove-circle" size={32} color="black" />
        </TouchableOpacity>
        <Text style={styles.currentValue}>
          {this.props.selectedValue}
        </Text>
        <TouchableOpacity 
          style={[styles.button].concat(incrementEnabled ? [] : [styles.disabledButton])}
          onPress={this.onIncrement.bind(this)} 
          disabled={!this.props.incrementEnabled}
        >
          <Ionicons name="md-add-circle" size={32} color="black" />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    margin: 16,
    flexDirection: 'row',
    borderRadius: 5,
    backgroundColor: '#eee',
  },
  currentValue: {
    fontSize: 40,
    color: 'black',
  },
  button: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  disabledButton: {
    opacity: 0.5,
  },
});
