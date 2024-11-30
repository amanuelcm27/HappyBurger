import React from "react";
import { Tabs } from "expo-router";

import TabIcon from "../../components/TabIcon";
import { TabBar } from "../../components/TabBar";

const TabLayout = () => {
  return (
    <Tabs tabBar={(props) => <TabBar {...props} />}>
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color  , focused}) => (
            <TabIcon color={color} name="home" iconName={"fa-house"} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          headerShown: true,
          tabBarIcon: ({ color , focused }) => (
            <TabIcon color={color} name="menu" iconName={"fa-utensils"}  focused={focused}/>
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          headerShown: true,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              color={color}
              name="cart"
              iconName={"fa-basket-shopping "}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="notification"
        options={{
          headerShown: true,
          tabBarIcon: ({ color , focused}) => (
            <TabIcon color={color} name="notification" iconName={"fa-bell"} focused={focused}/>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: true,
          tabBarIcon: ({ color , focused}) => (
            <TabIcon color={color} name="profile" iconName={"fa-user"} focused={focused}/>
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
