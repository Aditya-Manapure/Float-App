import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import HomeScreen from '../screens/HomeScreen';
//import ChatScreen from '../screens/ChatScreen';
import ProfileScreen from '../screens/ProfileScreen';
//import AddPostScreen from '../screens/AddPostScreen';
//import MessagesScreen from '../screens/MessagesScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import AddVehicle from '../screens/AddVehicle';
import MapScreen from '../screens/MapScreen';
import AddUserData from '../screens/AddUserData';
import Register from '../screens/Register';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const FeedStack = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Map"
      component={MapScreen}
      options={{
        headerShown: false,
        /*headerTitleAlign: 'center',
        headerTitleStyle: {
          color: '#2e64e5',
          fontFamily: 'Kufam-SemiBoldItalic',
          fontSize: 18,
        },
       /* headerStyle: {
          shadowColor: '#fff',
          elevation: 0,
        },*/
        /*headerRight: () => (
          <View style={{marginRight: 10}}>
            <FontAwesome5.Button
              name="plus"
              size={22}
              backgroundColor="#fff"
              color="#2e64e5"
              onPress={() => navigation.navigate('AddPost')}
            />
          </View>
        ),*/
      }}
    />
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerShown: false,
        /*title: '',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#2e64e515',
          shadowColor: '#2e64e515',
          elevation: 0,
        },
        headerBackTitleVisible: false,
        headerBackImage: () => (
          <View style={{marginLeft: 15}}>
            <Ionicons name="arrow-back" size={25} color="#2e64e5" />
          </View>
        ),*/
      }}
    />
    <Stack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        headerShown: false,
        /*title: '',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#fff',
          shadowColor: '#fff',
          elevation: 0,
        },
        headerBackTitleVisible: false,
        headerBackImage: () => (
          <View style={{marginLeft: 15}}>
            <Ionicons name="arrow-back" size={25} color="#2e64e5" />
          </View>
        ),*/
      }}
    />
  </Stack.Navigator>
);
const RegistrationStack = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen name="Register" 
    options={{
      headerShown: false,
      headerBackTitleVisible: false,
    }}
    component={Register} />
  </Stack.Navigator>
);

const MessageStack = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen name="AddUserData" component={AddUserData} />
    <Stack.Screen
      name="EditProfile"
      component={EditProfileScreen}
      options={({ route }) => ({
        headerShown: false,
        title: route.params.userName,
        headerBackTitleVisible: false,
      })}
    />
  </Stack.Navigator>
);

const ProfileStack = ({ navigation }) => (
  <Stack.Navigator
  screenOptions = {{
    headerShown : false
  }}
  >
    <Stack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="EditProfile"
      component={EditProfileScreen}
      options={{
        headerTitle: 'Edit Profile',
        headerBackTitleVisible: false,
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#fff',
          shadowColor: '#fff',
          elevation: 0,
        },
      }}
    />
    <Stack.Screen
      name="Register"
      component={RegistrationStack}
      options={{
        headerBackTitleVisible: false,
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#fff',
          shadowColor: '#fff',
          elevation: 0,
        },
      }}
    />
    <Stack.Screen
      name="AddVehicle"
      component={AddVehicle}
      options={{
        headerShown: true,
        headerTitle: 'Add Vehicle',
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 62ccc8d5fddeca75af26e4b006e3fca85b602ea0
>>>>>>> 46455c7fb3e2f904a23a14c0e04353cc626ee1c3
        headerBackTitleVisible: false,
=======
        headerBackTitleVisible: true,
>>>>>>> 3d1786fc58868fe540b57648e357a1339d12ac46
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#fff',
          shadowColor: '#fff',
          elevation: 0,
        },
      }}
    />
  </Stack.Navigator>
);

const AppStack = () => {
  const getTabBarVisibility = (route) => {
    const routeName = route.state
      ? route.state.routes[route.state.index].name
      : '';

    if (routeName === 'Chat') {
      return false;
    }
    return true;
  };

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#2e64e5',
      }}>
      <Tab.Screen
        name="Home"
        component={FeedStack}
        options={({ route }) => ({
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarVisible: route.state && route.state.index === 0,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="home-outline"
              color={color}
              size={size}
            />
          ),
        })}
      />
      <Tab.Screen
        name="AddUserData"
        component={AddUserData}
        options={({ route }) => ({
          headerShown: false,
          tabBarVisible: getTabBarVisibility(route),
          // Or Hide tabbar when push!
          // https://github.com/react-navigation/react-navigation/issues/7677
          // tabBarVisible: route.state && route.state.index === 0,
          // tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="chatbox-ellipses-outline"
              color={color}
              size={size}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppStack;