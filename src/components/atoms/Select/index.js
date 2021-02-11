import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Picker} from '@react-native-community/picker';

const Select = ({label, value, onSelectChange}) => {
  return (<View>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.input}>
      <Picker selectedValue={value} onValueChange={(itemValue) => onSelectChange(itemValue)}>
        <Picker.Item label="Bandung" value="Bandung"/>
        <Picker.Item label="Jakarta" value="Jakarta"/>
        <Picker.Item label="Lampung" value="Lampung"/>
        <Picker.Item label="Aceh" value="Aceh"/>
        <Picker.Item label="Surakarta" value="Surakarta"/>
      </Picker>
    </View>
  </View>);
};

export default Select;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    color: '#020202'
  },
  input: {
    borderWidth: 1,
    borderColor: '#020202',
    borderRadius: 8,
    paddingHorizontal: 2,
    paddingVertical: 0
  }
});
