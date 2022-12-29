import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",
  },
  headerView: {
    alignItems: "center",
    marginTop: 80,
  },
  headerTxt: {
    color: "#fff",
    fontSize: 25,
  },
  genderView: {
    marginTop: 137,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  btnGender: {
    backgroundColor: "#fff",
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  btnTxt: {
    color: "#fff",
    fontSize: 20,
    marginTop: 40,
  },
  btnNext: {
    marginTop: 240,
    width: 300,
    height: 40,
    backgroundColor: "#2562FF",
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
  },
  nextTxt: {
    color: "#FFF",
  },
});
export default styles;
