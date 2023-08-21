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
  inputType?: "text" | "password" | "email";
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
  inputType = "text",
  onBlur,
  errorMessage,
}) => {
  // States
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (onBlur) {
      onBlur(); // Call onBlur if it's provided
    }
  };

  // View Starts here
  return (
      <View style={styles.container}>
        {/* Label for TextInput */}
        {label !== "" && <Text style={styles.textboxLabel}>{label}</Text>}

        <View style={{}}>
          <TextInput
            multiline={multiline}
            numberOfLines={numberOfLines}
            placeholder={placeholder}
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={value}
            onChangeText={(text) => onChangeText(text)}
            secureTextEntry={inputType === "password" ? true : false}
            autoCapitalize="none"
            style={[
              styles.inputStyle,
              style,
              isFocused && styles.isFocused,
              isError && styles.inputError,
              multiline && styles.multiline,
              multiline ? { height: 100 } : { height: 40 },
            ]}
          />

          <View style={styles.clearIconView}>
            {/* Clear Button */}
            {value.length > 0 && (
              <TouchableOpacity
                activeOpacity={0.4}
                style={[
                  styles.clearButton,
                  multiline && styles.clearIconButtonForMultiline,
                ]}
                onPress={onClear}
              >
                <CloseIcon />
              </TouchableOpacity>
            )}
          </View>
        </View>

        {/* Error message */}
        {isError && (
          <Text style={styles.errorMessageStyle}>{errorMessage}</Text>
        )}
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    alignItems: "center",
    marginTop: 20,
    backgroundColor: "#ffffff",
    
  },
  clearIconView: {
    position: "absolute",
    right: 5,
    top: 0,
    flexDirection: "row",
    alignItems: "center",
    height: "100%",
  },
  inputStyle: {
    borderColor: "#DCEFFA",
    color: "#707070",
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 4,
    fontSize: 14,
    justifyContent: "flex-start",
    width: 300,
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
  clearButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 25,
  },
  clearIconButtonForMultiline: {
    justifyContent: "flex-start",
    paddingTop: 10,
  },
  errorMessageStyle: {
    fontSize: 12,
    color: "#F31700",
    marginTop: 4,
  },
});

export default CommonTextInput;
