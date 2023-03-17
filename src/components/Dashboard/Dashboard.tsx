import React from 'react';
import { Pressable, Text, View } from 'react-native';

import styles from './styles';

import { useAppSelector } from '../../store/app/hooks';

const Dashboard = () => {
  // const userInfo = useAppSelector(state => state).userInfo;

  // const allAccounts = () => {
  //   for (let i = 0; i <= userInfo.accounts.length; i++) {
  //     return <Text>£{userInfo.accounts[i].currentBalance.toFixed(2)}</Text>;
  //   }
  // };

  return (
    <View style={styles.container}>
      <View style={styles.mainAccountContainer}>
        <Text style={styles.title}>Main account</Text>
        <Text style={styles.mainValue}>0</Text>
      </View>
      <View style={styles.secondaryInfo}>
        <View>
          <Text>This week:</Text>
          <Text>£0</Text>
        </View>
        <View>
          <Pressable>
            <Text>All accounts:</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Dashboard;
