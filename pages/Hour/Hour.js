import styles from "./Styles";
import { View, Text, TouchableOpacity } from "react-native";

const Hour = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.morningView}>
        <Text style={styles.morningTxt}>Qual seu horário de treino?</Text>
      </View>
      <View style={styles.oiView}>
        <TouchableOpacity style={styles.btnMig}>
          <Text>Manhã</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.oiView}>
        <TouchableOpacity style={styles.btnMig}>
          <Text>Tarde</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.oiView}>
        <TouchableOpacity style={styles.btnMig}>
          <Text>Noite</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.oiView2}>
        <TouchableOpacity
          style={styles.btnMig2}
          onPress={() => navigation.navigate("Weight")}>
          <Text style={{ color: "#FFF" }}>PRÓXIMO</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Hour;
