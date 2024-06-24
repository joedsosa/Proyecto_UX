import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import MainTemplate from '../../templates/MainTemplate/MainTemplate';
import styles from './Profile.styles';
import { auth } from '../../../services/firebase';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  if (!user) {
    return (
      <MainTemplate>
        <View style={styles.container}>
          <Text style={styles.title}>Loading...</Text>
        </View>
      </MainTemplate>
    );
  }

  return (
    <MainTemplate>
      <View style={styles.container}>
        <Text style={styles.title}>User Profile</Text>
        {user.photoURL ? (
          <Image source={{ uri: user.photoURL }} style={styles.avatar} />
        ) : (
          <View style={styles.avatarPlaceholder}>
            <Text style={styles.avatarText}>{user.email.charAt(0).toUpperCase()}</Text>
          </View>
        )}
        <Text style={styles.email}>{user.email}</Text>
      </View>
    </MainTemplate>
  );
};

export default Profile;
