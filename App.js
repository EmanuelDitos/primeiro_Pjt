import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppRoutes from "./routes/AppRoutes";
export default function App() {
  return (
    <>
      <AppRoutes />
      <StatusBar style="light" />
    </>
  );
}
