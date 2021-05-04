import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from "react-native-vector-icons/FontAwesome";
import {Provider} from "react-redux";
import {createStore} from "redux";

import {Favorites, Restaurants} from "./pages"
import {initialState} from "./context/store";
import {reducer} from "./context/reducer";

const Tab = createBottomTabNavigator();

const store = createStore(reducer,initialState)

export function Router() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator 
        initialRouteName="RestaurantPage"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'FavoritePage') {
              iconName = "gratipay";
            } else if (route.name === 'RestaurantPage') {
              iconName = "cutlery"
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen
          name="RestaurantPage"
          component={Restaurants}
          options={{
            title: "Restaurantlar"
          }}
        />
        <Tab.Screen 
          name="FavoritePage" 
          component={Favorites}
          options={{
            title: "Favori Mekanlar"
          }}
        />
      </Tab.Navigator>
      </NavigationContainer>
    </Provider>
 );
}