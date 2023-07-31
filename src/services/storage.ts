//IMPORTS//
import AsyncStorage from "@react-native-async-storage/async-storage";

/** Sets Data in Local Storage */
export const setDataInLocalStorage = async (
	key: string,
	value: string | Array<any> | object
) => {
	try {
		const serializedValue = JSON.stringify(value);
		await AsyncStorage.setItem(key, serializedValue);
		return true;
	} catch (error) {
		console.error(error);
		return false;
	}
};

/** Gets Data from Local Storage */
export const getDataFromLocalStorage = async (
	key: string
): Promise<undefined | any> => {
	try {
		const value = await AsyncStorage.getItem(key);
		if (value !== null) {
			return JSON.parse(value);
		}
	} catch (error) {
		console.error(error);
	}
};

/** Remove Data from Local Storage */
export const removeDataFromLocalStroage = async (key: string) => {
	try {
		const value = await AsyncStorage.removeItem(key);
		if (value !== null) {
			return value;
		}
	} catch (error) {
		console.error(error);
	}
};

