import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {Favorites, Restaurants} from "./pages"

const Tab = createBottomTabNavigator();

export function Router() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="RestaurantPage">
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
  );
}