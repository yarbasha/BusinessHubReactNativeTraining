import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";

export default function Test(props) {
  console.log("props", props);
  const [name, setName] = useState("yusuf");
  useEffect(() => {
    console.log("1", name);
    setName("Aghiad");
    console.log("2", name);
  }, []);
  console.log("3", name);
  return (
    <View>
      {console.log("4", name)}
      <Text>{name}</Text>
    </View>
  )
}