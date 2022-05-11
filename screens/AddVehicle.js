import { StatusBar } from "expo-status-bar";
import React, { useContext, useEffect, useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    Button,
} from "react-native";
import Constants from "expo-constants";
import GlobalContext from "../navigations/GlobalContext";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { pickImage, askForPermission, uploadImage } from "../utils";
import { auth, db, storage } from "../firebaseConfig";
import { updateProfile } from "@firebase/auth";
import { doc, setDoc } from "@firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from '../navigations/AuthContext';
import { RadioButton } from "react-native-paper";

const AddVehicle = () => {

    const [checked, setChecked] = React.useState('Car');
    const handlePress = () => {
        db.collection('users').add({

        })
    }
    return (
        <React.Fragment>
            <StatusBar style="auto" />
            <View
                style={{
                    alignItems: "center",
                    justifyContent: "center",
                    flex: 1,
                    paddingTop: Constants.statusBarHeight + 20,
                    padding: 20,
                }}
            >
                <TextInput
                    placeholder="Enter vehicle number"
                    // value={displayName}
                    // onChangeText={setDisplayName}
                    style={{

                        marginTop: 40,
                        borderBottomWidth: 2,
                        width: "100%",
                    }}
                />
                <TextInput
                    placeholder="Model name"
                    // value={displayName}
                    // onChangeText={setDisplayName}
                    style={{

                        marginTop: 40,
                        borderBottomWidth: 2,
                        width: "100%",
                    }}
                />
                <View>
                    <RadioButton
                        label='Car'
                        value='Car'
                        status={checked === 'Car' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('Car')}
                    />
                    <RadioButton
                        value="Bike"
                        status={checked === 'Bike' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('Bike')}
                    />
                </View>
                <View style={{ marginTop: "auto", width: 80 }}>
                    <Button
                        title="Next"
                        onPress={handlePress}
                    />
                </View>
            </View>
        </React.Fragment>
    );
}
export default AddVehicle;