import { View, Text } from "react-native";
import React from "react";
import { NavigationProp } from "@react-navigation/native";

interface RouterProps {
    navigation: NavigationProp<any, any>;
}
const MenuActivity = () => {
    return (
        <View>
            <Text>Menu</Text>
        </View>
    )
}

export default MenuActivity;