// IMPORTS
import React, { useState } from "react";
import { View, ScrollView, StyleSheet, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import TextInputBox from "../../../components/common-components/TextInputBox";

// STYLES //

// CONTEXT //

/** Home screen component */
const SignupScreen: React.FC = () => {
  const nav = useNavigation();
  const [name, setname] = useState("");
  const [secondname, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("+91 ");
  const [nameError, setNameError] = useState<string>("");
  const [secondnameError, setSecondnameError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [phoneError, setPhoneError] = useState<string>("");

  const validateInputs = () => {
    if (name === "") {
      setNameError("Name is missing");
    } else {
      setNameError("");
    }

    if (secondname === "") {
      setSecondnameError("Second name is missing");
    } else {
      setSecondnameError("");
    }

    if (email === "") {
      setEmailError("Email is missing");
    } else {
      setEmailError("");
    }

    if (phone === "") {
      setPhoneError("Phone number is missing");
    } else {
      setPhoneError("");
    }
  };

  const handleClick = () => {
    validateInputs();
    if (!(nameError || secondnameError || emailError || phoneError)) {
      
    }
  };

  return (
    <ScrollView>
      <View style={styles.main}>
        <Text style={styles.text}>Sign up</Text>
        <TextInputBox
          style={styles.box}
          label="First Name"
          placeholder="Enter Your First Name"
          onChangeText={(e) => setname(e)}
          onClear={() => {
            setname("");
            setNameError("");
          }}
          value={name}
          type="text"
          isError={!!nameError}
          errorMessage={nameError}
        />
        <TextInputBox
          style={styles.box}
          label="Second Name"
          placeholder="Enter Your Second Name"
          onChangeText={(e) => setSecondName(e)}
          onClear={() => {
            setSecondName("");
            setSecondnameError("");
          }}
          value={secondname}
          type="text"
          isError={!!secondnameError}
          errorMessage={secondnameError}
        />
        <TextInputBox
          style={styles.box}
          label="Email"
          placeholder="Enter Your Email Address"
          onChangeText={(e) => setEmail(e)}
          onClear={() => {
            setEmail("");
            setEmailError("");
          }}
          value={email}
          type="email"
          isError={!!emailError}
          errorMessage={emailError}
        />
        <TextInputBox
          style={styles.box}
          label="Phone"
          placeholder="Enter Your Phone"
          onChangeText={(e) => setPhone(e)}
          onClear={() => {
            setPhone("");
            setPhoneError("");
          }}
          value={phone}
          type="text"
          isError={!!phoneError}
          errorMessage={phoneError}
        />
        <View style={styles.box}>
          <Button title="Submit" color={"black"} onPress={handleClick} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main: {
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "black",
    borderRadius: 10,
    marginTop: 200,
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "700",
    margin: 10,
  },
  box: {
    margin: 15,
  },
});

export default SignupScreen;
