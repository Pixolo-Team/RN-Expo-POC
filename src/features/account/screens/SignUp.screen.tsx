// IMPORTS
// REACT //
import React, { useState } from "react";

// REACT NATIVE //
import { View, ScrollView, Button } from "react-native";

// TYPES //
import { UserData } from "../../../types/user";
import { SignUpFormErrors } from "../../../types/accounts";

// COMPONENTS //
import TextInputBox from "../../../components/common-components/TextInputBox";

// API SERVICES //

// UTILS //
import { isNumericWithMinDigits, validateEmail } from "../../../utils/validation.util";
import { createUserRequest } from "../../../services/api/users";

/** Sign up screen component */
const SignUpScreen: React.FC = () => {
	// Define States
	const [formInputs, setFormInputs] = useState<Partial<UserData>>({
		first_name: "",
		last_name: "",
		email: "",
		phone_number: "",
		password: "",
	});

	// Error States
	const [formErrors, setFormErrors] = useState<SignUpFormErrors>({
		first_name: "",
		last_name: "",
		email: "",
		phone_number: "",
		password: "",
		error_message: "",
	});

	// Helper Functions
	/** Function which resets the error back to the initial value */
	const resetErrors = () => {
		setFormErrors({
			first_name: "",
			last_name: "",
			email: "",
			phone_number: "",
			password: "",
			error_message: "",
		});
	};

	/** Function which checks the validity */
	const validateSignUpFormInputs = () => {
		let valid = true;

		// Validates the Name Input Field
		if (formInputs.first_name === "") {
			setFormErrors((pastErrors) => ({
				...pastErrors,
				name: "You need to enter a name",
			}));
			valid = false;
		}

		// Validates the Last Name Input Field
		if (formInputs.last_name === "") {
			setFormErrors((pastErrors) => ({
				...pastErrors,
				lastName: "You need to enter you last name",
			}));
			valid = false;
		}

		// Validates the Email Input Field
		if (!formInputs.email || !validateEmail(formInputs.email)) {
			setFormErrors((pastErrors) => ({
				...pastErrors,
				email: "You need to enter a valid email address",
			}));
			valid = false;
		}

		// Validates the Phone Input Field
		if (
			formInputs.phone_number === "" ||
			!isNumericWithMinDigits(formInputs.phone_number ?? "")
		) {
			setFormErrors((pastErrors) => ({
				...pastErrors,
				phone: "Invalid Phone number",
			}));
			valid = false;
		}
		return valid;
	};

	/** Submit the Sign Up Form */
	const handleSignUp = async () => {
		// setIsLoading(true);
		// Reset the errors
		resetErrors();
		// Check Form validity
		if (validateSignUpFormInputs()) {
			const user: Partial<UserData> = {
				first_name: formInputs.first_name,
				last_name: formInputs.last_name,
				email: formInputs.email,
				phone_number: formInputs.phone_number,
				password: formInputs.password,
				devices: [
					// {
					// 	expo_id: await getPushToken(),
					// 	device_id: CONSTANTS.IS_ANDROID
					// 		? androidId
					// 		: await getIosIdForVendorAsync(),
					// 	platform: CONSTANTS.OS,
					// 	device_name: device.brand ?? "Unknown Device",
					// },
				],
			};

			// try {
			// 	// Send the data to the endpoint
			// 	const signUpResponse = await createUserRequest(user);
			// 	if (signUpResponse.status) {
			// 		// Log the event in Firebase Analytics for User Sign Up , when the user signs up successfully
			// 		logEvents(FirebaseAnalyticsEvents.USER_SIGN_UP, {
			// 			user_id: signUpResponse.data.id,
			// 			username: signUpResponse.data.username,
			// 			email: signUpResponse.data.email,
			// 		});
			// 		// Login the user into the App
			// 		loginUser(signUpResponse.data);
			// 		// On successful sign up, reset the onboarding context
			// 		resetContext();
			// 	} else {
			// 		// Handle sign up error
			// 		console.log(signUpResponse);
			// 		setErrorMessage(signUpResponse.message as string);
			// 	}
			// } catch (error) {
			// 	console.error("Error signing up:", error);
			// 	setErrorMessage("An error occurred while signing up.");
			// }
		} else {
			// Handle username availability error
			// setErrorMessage("This Username already exists");
		}
	};

	// View starts
	return (
		<ScrollView>
			<View>
				{/* Input for First Name */}
				<TextInputBox
					label="First Name"
					placeholder="Enter Your First Name"
					onChangeText={(e) => setFormInputs((inputs) => ({ ...inputs, name: e }))}
					onClear={() => setFormInputs((inputs) => ({ ...inputs, name: "" }))}
					value={formInputs.first_name ?? ""}
					type="text"
					isError={formErrors.first_name !== ""}
					errorMessage={formErrors.first_name}
				/>

				{/* Input for Last Name */}
				<TextInputBox
					label="Second Name"
					placeholder="Enter Your Second Name"
					onChangeText={(e) =>
						setFormInputs((inputs) => ({ ...inputs, lastName: e }))
					}
					onClear={() => setFormInputs((inputs) => ({ ...inputs, lastName: "" }))}
					value={formInputs.last_name ?? ""}
					type="text"
					isError={formErrors.last_name !== ""}
					errorMessage={formErrors.last_name}
				/>

				{/* Input for Email Address */}
				<TextInputBox
					label="Email"
					placeholder="Enter Your Email Address"
					onChangeText={(e) => setFormInputs((inputs) => ({ ...inputs, email: e }))}
					onClear={() => setFormInputs((inputs) => ({ ...inputs, email: "" }))}
					value={formInputs.email ?? ""}
					type="email"
					isError={formErrors.email !== ""}
					errorMessage={formErrors.email}
				/>

				{/* Input for Phone number */}
				<TextInputBox
					label="Phone"
					placeholder="Enter Your Phone"
					onChangeText={(e) => setFormInputs((inputs) => ({ ...inputs, phone: e }))}
					onClear={() => setFormInputs((inputs) => ({ ...inputs, phone: "" }))}
					value={formInputs.phone_number ?? ""}
					type="text"
					isError={formErrors.phone_number !== ""}
					errorMessage={formErrors.phone_number}
				/>

				{/* Input for Password */}
				<TextInputBox
					label="Password"
					placeholder="Enter Your Password"
					onChangeText={(e) =>
						setFormInputs((inputs) => ({ ...inputs, password: e }))
					}
					onClear={() => setFormInputs((inputs) => ({ ...inputs, password: "" }))}
					value={formInputs.password as string}
					type="text"
					isError={formErrors.password !== ""}
					errorMessage={formErrors.password}
				/>

				{/* Submit Button  odo: Use Custom Button Component Here */}
				<Button title="Submit" color={"black"} onPress={handleSignUp} />
			</View>
		</ScrollView>
	);
};

export default SignUpScreen;
