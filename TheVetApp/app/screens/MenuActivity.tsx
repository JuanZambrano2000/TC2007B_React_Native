import { View, Text, Button, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { NavigationProp } from "@react-navigation/native";
import { FIREBASE_AUTH, FIREBASE_DB } from "../../FirebaseConfig";
import { collection, onSnapshot, query, doc, setDoc } from "firebase/firestore";

interface RouterProps {
    navigation: NavigationProp<any, any>;
}

const MenuActivity = ({navigation}: RouterProps) => {
    const [animals, setAnimals] = useState<{ id: string; name: string; age: number; weight: number; }[]>([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(query(collection(FIREBASE_DB, "animals")), (snapshot) => {
            const newAnimals = snapshot.docs.map((doc) => ({
                id: doc.id,
                name: doc.data().name,
                age: doc.data().age,
                weight: doc.data().weight
            }));
    
            setAnimals(newAnimals);
        });
    
        return () => unsubscribe();
    }, []);    

    const handleDetail = async (animal: { id: string; name: string; age: number; weight: number; }) => {
        await setDoc(doc(FIREBASE_DB, "currentAnimal"), animal);
        navigation.navigate('Detail');
    };

    return (
        <View>
            <FlatList
                data={animals}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <View>
                        <Text>{item.name}</Text>
                        <Button title="Check Details" onPress={() => handleDetail(item)} />
                    </View>
                )}
            />
            <Button title="Add new animal" onPress={() => navigation.navigate('Detail')} /> 
            <Button title="Sign out" onPress={() => FIREBASE_AUTH.signOut()} />
        </View>
    );
};

export default MenuActivity;
