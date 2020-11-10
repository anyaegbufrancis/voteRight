 import * as React from 'react';
 import { Text, View } from "react-native";
 import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
 
 
 export default function SettingsScreen() {
    return (
      <View style={{ flex: 1, alignItems: "center", marginTop: 100 }}>
        <Text style={{ fontSize: 25, fontWeight: "bold", color: "blue" }}>
          Settings Screen
        </Text>
        <Text style={{ fontSize: 18, marginTop: 20, fontWeight: "bold" }}>
          User Details
        </Text>
        <Text style={{ fontSize: 18, marginTop: hp("5%"), width: wp("90%") }}>
          Visit www.prorepublic.com for more detailed information
        </Text>
      </View>
    );
  }