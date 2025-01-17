import { StyleSheet } from "react-native-web";


const styles = StyleSheet.create({

  /*CSS FORM */
  formContext:{
    width: "100%",
    height: "100%",
    bottom: 0,
    backgroundColor: '#ffffff',
    alignItems: "center",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop:30,
  },
  form: {
    width: "100%",
    height: "auto",
    marginTop: 30,
    padding: 10,
  },
  formLabels: {
    color: "#000000",
    fontSize: 18,
    paddingLeft: 20,
  },

  /*CSS Entrada de Dados (input & button) */
  input:{
    width: "90%",
    borderRadius: 50,
    backgroundColor: "#f6f6f6",
    height: 40,
    margin: 12,
    paddingLeft: 10,
  },
  textButtonCalculator: {
    fontSize: 20,
    color: "#ffffff",
    paddingHorizontal: "2rem",
    paddingVertical: "1rem",
    backgroundColor: "crimson",
    borderRadius: 10,
  },
  buttonCalculator: {
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    backgroundColor: "FF0043",
    paddingTop: 14,
    paddingBottom: 14,
    marginLeft: 12,
    marginTop: 30,
  }
});
export default styles