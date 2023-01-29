import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import { useAppSelector } from '../../features/app/hooks';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

const Dashboard = ({ navigation }: any) => {
  const userInfo = useAppSelector(state => state).userInfo;

  const allAccounts = () => {
    for (let i = 0; i <= userInfo.accounts.length; i++) {
      return <Text>£{userInfo.accounts[i].currentBalance.toFixed(2)}</Text>;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainAccountContainer}>
        <Text style={styles.title}>Main account</Text>
        <Text style={styles.mainValue}>
          £{userInfo.accounts[0].currentBalance.toFixed(2)}
        </Text>
      </View>
      <View style={styles.secondaryInfo}>
        <View>
          <Text>This week:</Text>
          <Text>£{userInfo.totalSpending.week.toFixed(2)}</Text>
        </View>
        <View>
          <Pressable>
            <Text>All accounts:</Text>
            {allAccounts()}
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Dashboard;
