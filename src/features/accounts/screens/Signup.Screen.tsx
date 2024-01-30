// IMPORTS
import React, { useState } from "react";
import {
	View,
	ScrollView,
	StyleSheet,
	Text,
	Button,
} from "react-native";
import TextInputBox from "../../../components/common-components/TextInputBox";
import { signUpRequest } from "../../../services/api/users";
import { generateToast } from "../../../utils/toast";

// STYLES //

// CONTEXT //

/** Home screen component */
const SignupScreen: React.FC = () => {
	const [name, setName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("+91 ");
	const [nameError, setNameError] = useState<string>("");
	const [lastNameError, setLastNameError] = useState<string>("");
	const [emailError, setEmailError] = useState<string>("");
	const [phoneError, setPhoneError] = useState<string>("");

	/** Function which checks the validity */
	const validateInputs = () => {
		let valid = true;
		if (name === "") {
			setNameError("Name is missing");
			valid = false;
		} else {
			setNameError("");
		}

		if (lastName === "") {
			setLastNameError("Second name is missing");
			valid = false;
		} else {
			setLastNameError("");
		}

		if (email === "") {
			setEmailError("Email is missing");
			valid = false;
		} else {
			setEmailError("");
		}

		if (phone === "") {
			setPhoneError("Phone number is missing");
			valid = false;
		} else {
			setPhoneError("");
		}
		return valid;
	};
	/** Function which checks the validity */
	const handleClick = async () => {
		if (validateInputs()) {
			try {
				const signResponse = await signUpRequest(name, lastName, email, phone);
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
					onChangeText={(e) => setName(e)}
					onClear={() => {
						setName("");
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
					onChangeText={(e) => setLastName(e)}
					onClear={() => {
						setLastName("");
						setLastNameError("");
					}}
					value={lastName}
					type="text"
					isError={!!lastNameError}
					errorMessage={lastNameError}
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
