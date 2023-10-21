import React from "react";
import {View, Text, StyleSheet, Button, TextInput, ActivityIndicator} from "react-native";
import { FIREBASE_AUTH } from "../../FirebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const auth = FIREBASE_AUTH;

    const signIn = async () => {
        setLoading(true);
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            console.log("Success!");
        } catch (error: any) {
            console.log(error);
            alert("Sign in failed: " + error.message);
        } finally {
            setLoading(false);
        }
    }

    const signUp = async () => {
            setLoading(true);
            try {
                const response = await createUserWithEmailAndPassword(auth, email, password);
                console.log(response);
                alert("Account created succesfully");
            } catch (error: any) {
                console.log(error);
                alert("Sign up failed: " + error.message);
            } finally {
                setLoading(false);
            }
        }
    
    return (
        <View style={styles.container}>
            <TextInput value={email} style={styles.input} placeholder="Email" 
            autoCapitalize="none" onChangeText={(text) => setEmail(text)}></TextInput>
            
            <TextInput secureTextEntry={true} style={styles.input} placeholder="Password" 
            autoCapitalize="none" onChangeText={(text) => setPassword(text)}></TextInput>
            
            {loading ? (
                <ActivityIndicator size="large" color="#0000ff" /> 
            ) : (
                <>
                    <Button title="Sign In" onPress={signIn}/>
                    
                    <Button title="Create account" onPress={signUp}/>
                </>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
    input: {
        width: '80%',
        marginVertical: 4,
        height: 40,
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,   
        backgroundColor: '#fff'
    },
    button: {
        width: '30%',
        marginVertical: 4,
        height: 50,
        borderWidth: 1,
        borderRadius: 4,
        padding: 15
    }
});
export default Login;