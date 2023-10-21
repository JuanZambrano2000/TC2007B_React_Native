import { View, Text, TextInput, Button } from "react-native";
import React, { useState } from "react";
import { FIREBASE_DB } from "../../FirebaseConfig";
import { collection, addDoc } from "firebase/firestore";
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

        try {
            await addDoc(collection(FIREBASE_DB, "animals"), {
                name: name,
                age: parseInt(age),
                weight: parseFloat(weight)
            });
            alert("Animal registered successfully!");
        } catch (e) {
            alert("Error registering animal: ", e);
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
                title="Register"
                onPress={handleRegister}
            />
        </View>
    );
};

export default DetailActivity;
