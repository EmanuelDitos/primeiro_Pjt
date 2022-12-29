import styles from "./Styles";
import { View, Text, TouchableOpacity } from "react-native";

const Objective = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.objectiveView}>
        <Text style={styles.objectiveTxt}>Qual seu objetivo?</Text>
      </View>
      <View style={styles.btnView}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.txtBtn}>Emagrecimento</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btnView}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.txtBtn}>Ganho muscular</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btnView}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.txtBtn}>Fisioterapia</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btnView}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.txtBtn}>Auxiliar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btnView2}>
        <TouchableOpacity
          style={styles.btn2}
          onPress={() => navigation.navigate("Hour")}>
          <Text style={{ color: "#FFF" }}>PRÓXIMO</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Objective;
