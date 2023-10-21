import { View, Text, TextInput, Button } from "react-native";
import React, { useState } from "react";
import { FIREBASE_DB } from "../../FirebaseConfig";
import { collection, setDoc, doc, addDoc } from "firebase/firestore";
import { RouteProp } from "@react-navigation/native";

type RootStackParamList = {
    Detail: { animal?: { id: string; name: string; age: number; weight: number; } };
};
  
type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;
  
interface Props {
    route: DetailScreenRouteProp;
}

const DetailActivity = ({ route }: Props) => {
    const animal = route.params?.animal;
    const [name, setName] = useState(animal?.name || "");
    const [age, setAge] = useState(animal?.age ? animal.age.toString() : "");
    const [weight, setWeight] = useState(animal?.weight ? animal.weight.toString() : "");

    const handleRegister = async () => {
        if (isNaN(Number(age)) || isNaN(Number(weight))) {
            alert("Age and weight must be numerical values.");
            return;
        }
    
        const animalData = {
            name: name,
            age: parseInt(age),
            weight: parseFloat(weight)
        };
    
        try {
            if (animal) {
                await setDoc(doc(FIREBASE_DB, "animals", animal.id), animalData);
                alert("Animal updated successfully!");
            } else {
                await addDoc(collection(FIREBASE_DB, "animals"), animalData);
                alert("Animal registered successfully!");
            }
        } catch (e) {
            alert("Error registering or updating animal: ", e);
        }
    };
    

    return (
        <View>
            <Text>Detail</Text>
            <TextInput
                placeholder="Name"
                onChangeText={setName}
                value={name}
            />
            <TextInput
                placeholder="Age"
                onChangeText={setAge}
                value={age}
                keyboardType="numeric"
            />
            <TextInput
                placeholder="Weight"
                onChangeText={setWeight}
                value={weight}
                keyboardType="numeric"
            />
            <Button
                title={animal ? "Update" : "Register"}
                onPress={handleRegister}
            />
        </View>
    );
};

export default DetailActivity;
