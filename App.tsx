// IMPORTS //
import React, { useState } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";

// COMPONENTS //
import CommonTextInput from "./src/components/common-compoents/CommonTextInput";

/* APP */
export default function App() {
  // States
  const [userNameInput, setUserNameInput] = useState<string>("");
  const [isErrorUserName, setIsErrorUserName] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  /* Handles changes in the input field.  */
  const handleUserNameInputChange = (text: any) => {
    setUserNameInput(text);
    setIsErrorUserName(false); // Reset error state when user starts typing
  };

  /* This function is called when the user wants to clear the input.  */
  const toClearUserNameInput = () => {
    setUserNameInput("");
    setIsErrorUserName(false); // Reset error state when clearing input
  };

  /* Validates the user name input based on custom rules. */
  const handleValidateUserName = () => {
    // Check if the user name is empty or too short
    if (userNameInput.trim() === "" || userNameInput.length < 3) {
      setIsErrorUserName(true);
      setErrorMessage(
        userNameInput.trim() === ""
          ? "Username cannot be empty"
          : "Username must be at least 3 characters long"
      );
    } else {
      // Validation succeeded
      Alert.alert("User name is correct"); // Added for testing purpose
      setIsErrorUserName(false);
      setErrorMessage("");
    }
  };

  // View starts here
  return (
    <View style={styles.container}>
      <View style={{ height: 110 }}>
        <CommonTextInput
          label="User Name"
          placeholder="User Name"
          isError={isErrorUserName}
          value={userNameInput}
          onClear={toClearUserNameInput}
          onChangeText={handleUserNameInputChange}
          onBlur={handleValidateUserName}
        />
        <View style={{ position: "relative" }}>
          {/* Error message  */}
          {isErrorUserName && (
            // Display an error message only if isErrorUserName is true (an error occurred)
            <Text style={styles.errorMessageStyle}>{errorMessage}</Text>
          )}
        </View>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={handleValidateUserName}
      >
        <Text>Click to Check</Text>
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
  errorMessageStyle: {
    fontSize: 14,
    color: "#F31700",
  },
  button: {
    marginTop: 60,
  },
});
