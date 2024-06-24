import React from 'react';
import { View, Text } from 'react-native';
import MainTemplate from '../../templates/MainTemplate/MainTemplate';
import styles from './Profile.styles';

const Profile = () => {
  return (
    <MainTemplate>
      <View style={styles.container}>
        <Text style={styles.title}>User Profile</Text>
        {/* Aquí puedes agregar más información del perfil del usuario */}
      </View>
    </MainTemplate>
  );
};

export default Profile;
