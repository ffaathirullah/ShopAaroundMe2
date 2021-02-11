import React from 'react';
import {
  Image,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import {Button, Gap, Header, TextInput} from '../../components';
import {Icon_back} from '../../assets';

const SignUp = ({navigation}) => {
  return (<ScrollView contentContainerStyle={styles.scroll}>
    <View style={styles.page}>
      <Header title="Sign Up" subTitle="Register and Buy Items" onBack={() => navigation.goBack()}/>
      <View style={styles.container}>
        <View style={styles.photo}>
          <TouchableOpacity >
            <View style={styles.borderPhoto}>
              <Image style={styles.photoContainer}/>
              <View style={styles.photoContainer}>
                <Text style={styles.addPhoto}>Add Photo</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <TextInput label="Full Name" placeholder="Type your full name"/>
        <Gap height={16}/>
        <TextInput label="Email Address" placeholder="Type your email address"/>
        <Gap height={16}/>
        <TextInput label="Password" placeholder="Type your password"/>
        <Gap height={24}/>
        <Button text="Continue" onPress={() => navigation.navigate("SignUpAddress")}/>
      </View>
    </View>
  </ScrollView>);
};

export default SignUp;

const styles = StyleSheet.create({
  scroll: {
    flexGrow: 1
  },
  page: {
    flex: 1
  },
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1
  },
  photo: {
    alignItems: 'center',
    marginTop: 26,
    marginBottom: 16
  },
  borderPhoto: {
    borderWidth: 1,
    borderColor: '#8D92A3',
    width: 110,
    height: 110,
    borderRadius: 110,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center'
  },
  photoContainer: {
    width: 90,
    height: 90,
    borderRadius: 90,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center'
  },
  addPhoto: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
    textAlign: 'center'
  }
});
