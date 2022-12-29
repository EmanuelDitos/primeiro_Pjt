import styles from "./Styles";
import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";

const Gender = ({ navigation }) => {
  const [colorselect, colorinselected] = useState(true);
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.headerTxt}>Qual seu gênero?</Text>
      </View>
      <View style={styles.genderView}>
        <View>
          <TouchableOpacity style={styles.btnGender}>
            <AntDesign name="man" size={60} color="black" />
          </TouchableOpacity>
          <Text style={styles.btnTxt}>Masculino</Text>
        </View>
        <View>
          <TouchableOpacity
            style={styles.btnGender}
            onPress={() => colorinselected(!colorselect)}>
            <AntDesign name="woman" size={60} color="black" />
          </TouchableOpacity>
          <Text style={styles.btnTxt}>Feminino</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.btnNext}
        onPress={() => navigation.navigate("Objective")}>
        <Text style={styles.nextTxt}>PRÓXIMO</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Gender;
