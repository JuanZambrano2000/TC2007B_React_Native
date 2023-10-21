import { View, Text, Button } from "react-native";
import React from "react";
import { NavigationProp } from "@react-navigation/native";
import { FIREBASE_AUTH } from "../../FirebaseConfig";

interface RouterProps {
    navigation: NavigationProp<any, any>;
}
const MenuActivity = ({navigation}: RouterProps) => {
    return (
        <View>
           <Button title="Add new animal" onPress={() => navigation.navigate('Detail')}/> 
           <Button title="Sign out" onPress={() => FIREBASE_AUTH.signOut()}/>

        </View>
    );
};

export default MenuActivity;