import React from 'react';
import {StyleSheet, View, Text, Image, ScrollView} from 'react-native';
import {ProfileDummy} from '../../assets';
import {ItemsCard} from '../../components';
import Gap from './../../components/atoms/Gap';

function Home() {
  return (
    <View>
      <View style={styles.profileContainer}>
        <View>
          <Text style={styles.appName}>ShopAroundMe</Text>
          <Text style={styles.desc}>Let’s get some Items</Text>
        </View>
        <Image source={ProfileDummy} style={styles.profile} />
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.itemCardContainer}>
          <ItemsCard />
          <ItemsCard />
          <ItemsCard />
          <ItemsCard />
        </View>
      </ScrollView>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 24,
    backgroundColor: 'white',
  },
  appName: {fontSize: 22, fontFamily: 'Poppins-Medium', color: '#020202'},
  desc: {fontSize: 14, fontFamily: 'Poppins-Light', color: '#8D92A3'},
  profile: {width: 50, height: 50, borderRadius: 8},
  itemCardContainer: {flexDirection: 'row', marginVertical: 24},
});
