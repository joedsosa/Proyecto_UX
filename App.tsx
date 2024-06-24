import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native'; 
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LoginScreen from './src/pages/Login/Login';
import SignUpScreen from './src/pages/SignUp/SignUp';
import HomeScreen from './src/pages/Home/Home';
import MovieDetailsScreen from './src/pages/MovieDetails/MovieDetails';
import ProfileScreen from './src/pages/Profile/Profile';
import VideoPlayerScreen from './src/pages/VideoPlayer/VideoPlayerScreen';
import { signOut } from 'firebase/auth';
import { auth } from './services/firebase';
import { useNavigation } from '@react-navigation/native';


type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  Main: undefined;
  MovieDetails: { movieId: string };
  VideoPlayer: { videoUrl: string };
};

type RootTabParamList = {
  Home: undefined;
  Profile: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootTabParamList>();

const tabBarIcon = (
  route: RouteProp<RootTabParamList, keyof RootTabParamList>,
  focused: boolean,
  color: string,
  size: number
) => {
  let tabLabel = '';

  if (route.name === 'Home') {
    tabLabel = '🏠︎';
  } else if (route.name === 'Profile') {
    tabLabel = '👤';
  }

  return <Text style={{ color: focused ? '#ffffff' : '#aaaaaa', fontSize: 25 }}>{tabLabel}</Text>;
};

const HeaderRight = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigation.replace('Login');
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error signing out:', error.message);
      } else {
        console.error('Error signing out:', error);
      }
    }
  };

  return (
    <TouchableOpacity onPress={handleSignOut} style={{ marginRight: 16 }}>
      <Text style={{ color: '#ff0000', fontWeight: 'bold' }}>Sign Out</Text>
    </TouchableOpacity>
  );
};

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => tabBarIcon(route, focused, color, size),
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: '#aaaaaa',
        tabBarStyle: { backgroundColor: '#1c1c1c' },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Stream-IT!',
          headerRight: () => <HeaderRight />,
          headerTitleStyle: { color: '#ffffff', fontWeight: 'bold' },
          headerStyle: { backgroundColor: '#1c1c1c' },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          headerRight: () => <HeaderRight />,
          headerTitleStyle: { color: '#ffffff', fontWeight: 'bold' },
          headerStyle: { backgroundColor: '#1c1c1c' },
        }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: { backgroundColor: 'black' },
          headerTintColor: 'red',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen
          name="Main"
          component={MainTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MovieDetails"
          component={MovieDetailsScreen}
          options={{ title: 'Movie Details' }}
        />
        <Stack.Screen
          name="VideoPlayer"
          component={VideoPlayerScreen}
          options={{ title: 'Trailer' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;