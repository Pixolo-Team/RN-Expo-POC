// IMPORTS
import React, { useState } from "react";
import { View, ScrollView, StyleSheet, Text, Button } from "react-native";
import TextInputBox from "../../../components/common-components/TextInputBox";
import { signUpRequest } from "../../../services/api/users";
import { generateToast } from "../../../utils/toast";

// STYLES //

// CONTEXT //

/** Home screen component */
const SignupScreen: React.FC = () => {
	//Usestates for forms//
	const [FormInputs, setFormInputs] = useState({
		name: "",
		lastName: "",
		email: "",
		phone: "",
	});
	const [FormErrors, setFormErrors] = useState({
		name: "",
		lastName: "",
		email: "",
		phone: "",
		errormessage: "",
	});
	/** Function which resets the error to basic value */
	const resetErrors = () => {
		setFormErrors({
			name: "",
			lastName: "",
			email: "",
			phone: "",
			errormessage: "",
		});
	};
	/**Function to check email validity */
	const validateEmail = (email: string) => {
		// Regular expression to validate email format
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	};

	/** Function which checks the validity */
	const validateInputs = () => {
		let valid = true;
		if(FormInputs.name ===""){
			setFormErrors((pastErrors)=>({...pastErrors,name:"You need to enter a name"}));
			valid=false;
		}

		if (FormInputs.lastName === "") {
			setFormErrors((pastErrors)=>({...pastErrors,lastName:"You need to enter you last name"}));
			valid=false;
		} 

		if (FormInputs.email === "" ) {
			setFormErrors((pastErrors)=>({...pastErrors,email:"You need to enter an email address"}));
			valid=false;
		} else if (!validateEmail(FormInputs.email)) {
			setFormErrors((pastErrors) => ({ ...pastErrors, email: "Please enter a valid email address" }));
			valid = false;
		}

		if (FormInputs.phone === "") {
			setFormErrors((pastErrors)=>({...pastErrors,phone:"You need to enter a Phone number"}));
			valid = false;
		}else if (FormInputs.phone.length < 10) {
			setFormErrors((pastErrors) => ({ ...pastErrors, phone: "Phone number invalid" }));
			valid = false;
		} else if (!/^\d+$/.test(FormInputs.phone)) {
			setFormErrors((pastErrors) => ({ ...pastErrors, phone: "Phone number must contain only numeric characters" }));
			valid = false;
		}
		return valid;
	};
	/** Function which checks the validity */
	const handleClick = async () => {
		resetErrors();
		if (validateInputs()) {
			try {
				const signResponse = await signUpRequest(FormInputs.name, FormInputs.lastName, FormInputs.email, FormInputs.phone);
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

	return (
		<ScrollView>
			<View style={styles.main}>
				<Text style={styles.text}>Sign up</Text>
				<TextInputBox
					style={styles.box}
					label="First Name"
					placeholder="Enter Your First Name"
					onChangeText={(e) => setFormInputs((inputs) => ({ ...inputs, name: e }))}
					onClear={() => setFormInputs((inputs) => ({ ...inputs, name: "" }))}
					value={FormInputs.name}
					type="text"
					isError={FormErrors.name !== ""}
					errorMessage={FormErrors.name}
				/>
				<TextInputBox
					style={styles.box}
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
				<TextInputBox
					style={styles.box}
					label="Email"
					placeholder="Enter Your Email Address"
					onChangeText={(e) => setFormInputs((inputs) => ({ ...inputs, email: e }))}
					onClear={() => setFormInputs((inputs) => ({ ...inputs, email: "" }))}
					value={FormInputs.email}
					type="email"
					isError={FormErrors.email !== ""}
					errorMessage={FormErrors.email}
				/>
				<TextInputBox
					style={styles.box}
					label="Phone"
					placeholder="Enter Your Phone"
					onChangeText={(e) => setFormInputs((inputs) => ({ ...inputs, phone: e }))}
					onClear={() => setFormInputs((inputs) => ({ ...inputs, phone: "" }))}
					value={FormInputs.phone}
					type="text"
					isError={FormErrors.phone !== ""}
					errorMessage={FormErrors.phone}
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
