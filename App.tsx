// IMPORTS //
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

// COMPONENTS //
import CommonTextInput from "./src/components/common-compoents/CommonTextInput";

/* APP */
export default function App() {
  const [textInputValue, setTextInputValue] = useState("");
  const [userNameInput, setUserNameInput] = useState<string>("");
  const [isErrorUserName, setIsErrorUserName] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleUserNameInputChange = (text: any) => {
    setUserNameInput(text);
    setIsErrorUserName(false); // Reset error state when user starts typing
  };

  const handleClearUserNameInput = () => {
    setUserNameInput("");
    setIsErrorUserName(false); // Reset error state when clearing input
  };

  const handleValidateUserName = () => {
    // You can implement your validation logic here
    // For example, checking if the username is empty
    if (userNameInput.trim() === "") {
      setIsErrorUserName(true);
      setErrorMessage("Username cannot be empty");
    } else if (userNameInput.length < 3) {
      // You can add more validation checks as needed
      setIsErrorUserName(true);
      setErrorMessage("Username must be at least 3 characters long");
    } else {
      setIsErrorUserName(false);
      setErrorMessage(""); // Clear the error message if there are no errors
    }
  };

  // View starts here
  return (
    <View style={styles.container}>
      <CommonTextInput
        label="User Name"
        placeholder="User Name"
        isError={isErrorUserName}
        value={userNameInput}
        onClear={handleClearUserNameInput}
        onChangeText={handleUserNameInputChange}
        onBlur={handleValidateUserName}
      />
      <View style={{ position: "absolute", backgroundColor: "pink" }}>
        {/* Error message for invalid combination of company name and password */}
        {isErrorUserName && (
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        )}
      </View>
      <TouchableOpacity
        style={{ position: "absolute" , marginTop:50}}
        onPress={handleValidateUserName}
      >
        <Text>Click on this </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  loginErrorMessage: {
    fontFamily: "primary-regular",
    fontSize: 12,
    color: "#F31700",
    marginTop: 4,
  },
  loginFormError: {
    marginTop: 32,
  },
  errorMessage: {
    fontFamily: "primary-regular",
    fontSize: 12,
    color: "#F31700",
    // marginTop: 4,
  },
});
