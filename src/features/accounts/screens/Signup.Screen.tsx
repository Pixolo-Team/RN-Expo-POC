// IMPORTS
import React, { useState } from "react";
import { View, ScrollView, StyleSheet, Text, Button } from "react-native";

// STYLES //
import { signupStyles } from "./components/signup.styles";

// COMPONENTS //
import TextInputBox from "../../../components/common-components/TextInputBox";

// SERVICES //
import { signUpRequest } from "../../../services/api/users";

// CONTEXT //

// UTILS //
import { generateToast } from "../../../utils/toast";
import { isNumeric, validateEmail } from "../../../utils/validation.util";

/** Sign up screen component */
const SignupScreen: React.FC = () => {
	// Usestates for forms //
	const [FormInputs, setFormInputs] = useState({
		name: "",
		lastName: "",
		email: "",
		phone: "",
	});

	// Usestates for Errors //
	const [FormErrors, setFormErrors] = useState({
		name: "",
		lastName: "",
		email: "",
		phone: "",
		errormessage: "",
	});

	/** Function which resets the error back to the initial value */
	const resetErrors = () => {
		setFormErrors({
			name: "",
			lastName: "",
			email: "",
			phone: "",
			errormessage: "",
		});
	};

	/** Function which checks the validity */
	const validateSignupFormInputs = () => {
		let valid = true;
		/**Validates the Name Input Field */
		if (FormInputs.name === "") {
			setFormErrors((pastErrors) => ({
				...pastErrors,
				name: "You need to enter a name",
			}));
			valid = false;
		}

		/**Validates the Last Name Input Field */
		if (FormInputs.lastName === "") {
			setFormErrors((pastErrors) => ({
				...pastErrors,
				lastName: "You need to enter you last name",
			}));
			valid = false;
		}

		/**Validates the email Input Field */
		if (FormInputs.email === "") {
			setFormErrors((pastErrors) => ({
				...pastErrors,
				email: "You need to enter an email address",
			}));
			valid = false;
		} else if (!validateEmail(FormInputs.email)) {
			setFormErrors((pastErrors) => ({
				...pastErrors,
				email: "Please enter a valid email address",
			}));
			valid = false;
		}

		/**Validates the Phone Input Field */
		if (
			FormInputs.phone === "" ||
			FormInputs.phone.length < 10 ||
			!isNumeric(FormInputs.phone)
		) {
			setFormErrors((pastErrors) => ({
				...pastErrors,
				phone: "Invalid Phone number",
			}));
			valid = false;
		}
		return valid;
	};

	/** Function which checks the validity */
	const handleClick = async () => {
		/** Resets the error messages */
		resetErrors();
		if (validateSignupFormInputs()) {
			try {
				const signResponse = await signUpRequest(
					FormInputs.name,
					FormInputs.lastName,
					FormInputs.email,
					FormInputs.phone
				);
				if (signResponse.status) {
					generateToast("Account Created Successfully");
				} else {
					generateToast(signResponse.message);
				}
			} catch (err) {
				generateToast("Looks like we faced some network issues. Please try again.");
			}
		}
	};
	// View starts
	return (
		<ScrollView>
			<View style={signupStyles.main}>
				<Text style={signupStyles.text}>Sign up</Text>
				
				{/* Input for First Name */}
				<TextInputBox
					style={signupStyles.inputBox}
					label="First Name"
					placeholder="Enter Your First Name"
					onChangeText={(e) => setFormInputs((inputs) => ({ ...inputs, name: e }))}
					onClear={() => setFormInputs((inputs) => ({ ...inputs, name: "" }))}
					value={FormInputs.name}
					type="text"
					isError={FormErrors.name !== ""}
					errorMessage={FormErrors.name}
				/>

				{/* Input for Last Name */}
				<TextInputBox
					style={signupStyles.inputBox}
					label="Second Name"
					placeholder="Enter Your Second Name"
					onChangeText={(e) =>
						setFormInputs((inputs) => ({ ...inputs, lastName: e }))
					}
					onClear={() => setFormInputs((inputs) => ({ ...inputs, lastName: "" }))}
					value={FormInputs.lastName}
					type="text"
					isError={FormErrors.lastName !== ""}
					errorMessage={FormErrors.lastName}
				/>

				{/* Input for Last Name */}
				<TextInputBox
					style={signupStyles.inputBox}
					label="Email"
					placeholder="Enter Your Email Address"
					onChangeText={(e) => setFormInputs((inputs) => ({ ...inputs, email: e }))}
					onClear={() => setFormInputs((inputs) => ({ ...inputs, email: "" }))}
					value={FormInputs.email}
					type="email"
					isError={FormErrors.email !== ""}
					errorMessage={FormErrors.email}
				/>
				
				{/* Input for Phone number */}
				<TextInputBox
					style={signupStyles.inputBox}
					label="Phone"
					placeholder="Enter Your Phone"
					onChangeText={(e) => setFormInputs((inputs) => ({ ...inputs, phone: e }))}
					onClear={() => setFormInputs((inputs) => ({ ...inputs, phone: "" }))}
					value={FormInputs.phone}
					type="text"
					isError={FormErrors.phone !== ""}
					errorMessage={FormErrors.phone}
				/>
				<View style={signupStyles.inputBox}>
					<Button title="Submit" color={"black"} onPress={handleClick} />
				</View>
			</View>
		</ScrollView>
	);
};

export default SignupScreen;
