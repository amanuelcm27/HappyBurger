import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { View, Animated } from "react-native";

const TabIcon = ({ color, iconName, name, focused }) => {
  const animation = useRef(new Animated.Value(focused ? 1 : 0)).current;

  useEffect(() => {
    // Animate the transition when focused changes
    Animated.timing(animation, {
      toValue: focused ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [focused]);

  const backgroundColor = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["transparent", "black"], // Background animation for other icons
  });

  const size = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [25, name === "cart" ? 100 : 40], // Adjust sizes for cart vs others
  });

  return (
    <>
      {name === "cart" ? (
        <View className="bg-yellow-400 rounded-full mb-12 w-[80px] h-[80px] items-center justify-center">
          <FontAwesomeIcon
            icon={iconName}
            size={name === "cart" ? 50 : 25}
            color={color}
          />
        </View>
      ) : (
        <Animated.View
          style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor,
            borderRadius: 20, // Ensure rounded corners
            width: size,
            height: size,
          }}
        >
          <FontAwesomeIcon
            icon={iconName}
            size={25}
            color={focused ? "#facc15" : color}
          />
        </Animated.View>
      )}
    </>
  );
};

export default TabIcon;
