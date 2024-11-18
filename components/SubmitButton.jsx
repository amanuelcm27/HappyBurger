import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const SubmitButton = ({ otherStyles, textStyles, text, loading , handlePress }) => {
  return (
    <>
      {loading ? (
        <TouchableOpacity className={`${otherStyles}`}>
          <Text className={`${textStyles} text-center opacity-50`}>{text} ...</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={handlePress} className={`${otherStyles}`}>
          <Text className={`${textStyles} text-center `}>{text}</Text>
        </TouchableOpacity>
      )}
    </>
  );
};

export default SubmitButton;
