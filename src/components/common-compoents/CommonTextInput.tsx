// IMPORTS //
import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  Text,
  Platform,
  SafeAreaView,
} from "react-native";

// SVG //
import CloseIcon from "../../../assets/icons/close.svg";

// Interface
interface CommonTextInputProps {
  label: string;
  placeholder: string;
  errorMessage?: string;
  style?: StyleProp<ViewStyle>;
  isError?: boolean;
  value: string;
  onClear?: () => void;
  onChangeText: (text: string) => void;
  type?: "text" | "password" | "email";
  multiline?: boolean;
  numberOfLines?: number;
  onBlur?: () => void; // Add onBlur prop
}

// CommonTextInput Component
const CommonTextInput: React.FC<CommonTextInputProps> = ({
  label = "",
  placeholder,
  style,
  isError = false,
  value = "", // Use the value prop here
  onClear,
  onChangeText, // Use the onChangeText prop here
  multiline = false,
  numberOfLines = 1,
  type = "text",
}) => {
  // States
  const [isFocused, setIsFocused] = useState(false);
  const [userName, setUserName] = useState("");
  const [isErrorUserName, setIsErrorUserName] = useState<boolean>(false);
  const [isErrorAll, setIsErrorAll] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  /** Handling the common error of the screen */
  const errorCommon = (message: string) => {
    setIsErrorAll(true);
    setIsErrorUserName(true);
    setErrorMessage(message);
  };

  // View Starts here
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        {/* Label for TextInput */}
        {label !== "" && <Text style={styles.textboxLabel}>{label}</Text>}

        <View style={{}}>
          <TextInput
            multiline={multiline}
            numberOfLines={numberOfLines}
            placeholder={placeholder}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            value={value}
            onChangeText={(text) => onChangeText(text)}
            secureTextEntry={type === "password" ? true : false}
            autoCapitalize="none"
            style={[
              styles.loginInput,
              style,
              isFocused ? styles.isFocused : null,
              isError ? styles.inputError : null,
              multiline
                ? Platform.OS === "ios"
                  ? { height: 100 }
                  : null
                : { height: 40 },
              multiline ? styles.multiline : null,
            ]}
          />

          <View style={styles.inputIconsWrap}>
            {/* Clear Button */}
            {value.length > 0 && (
              <TouchableOpacity
                activeOpacity={0.4}
                style={[
                  styles.inputActionButtons,
                  multiline ? styles.inputActionButtosMultiline : null,
                ]}
                onPress={onClear}
              >
                <CloseIcon />
              </TouchableOpacity>
            )}
          </View>
        </View>
        
        {/* Error message */}
        {errorMessage && isError && (
          <Text style={styles.loginErrorMessage}>{errorMessage}</Text>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    alignItems: "center",
    marginTop: 20,
    backgroundColor: "#ffffff",
  },
  inputIconsWrap: {
    position: "absolute",
    right: 5,
    top: 0,
    flexDirection: "row",
    alignItems: "center",
    height: "100%",
  },
  loginInput: {
    borderColor: "#DCEFFA",
    color: "#707070",
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 4,
    fontSize: 14,
    justifyContent: "flex-start",
    width: 300,
  },
  input: {
    width: 250,
    height: 44,
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: "#e8e8e8",
  },
  textboxLabel: {
    alignSelf: "flex-start",
    fontSize: 12,
    marginBottom: 10,
  },
  isFocused: {
    borderColor: "#0277BD",
  },
  inputError: {
    borderColor: "#F31700",
  },
  multiline: {
    textAlignVertical: "top",
    paddingTop: 5,
  },
  inputActionButtons: {
    alignItems: "center",
    justifyContent: "center",
    // height: "100%",
    width: 25,
  },
  inputActionButtosMultiline: {
    justifyContent: "flex-start",
    paddingTop: 10,
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
});

export default CommonTextInput;
