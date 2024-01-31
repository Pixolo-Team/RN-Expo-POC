import AsyncStorage from "@react-native-async-storage/async-storage";

/**
 * @description Store data in AsyncStorage
 * @param {string} key - Key of the data to be stored
 * @returns {Promise<boolean>} - Returns true if data is stored successfully, else returns false
 */
export const storeDataInAsyncStorage = async (
	key: string,
	value: any
): Promise<boolean> => {
	try {
		await AsyncStorage.setItem(key, JSON.stringify(value));
		return true;
	} catch (error: any) {
		console.log("Error while storing the data", error);
		return false;
	}
};

/**
 * @description Get data from AsyncStorage
 * @param {string} key - Key of the data to be retrieved
 * @returns {Promise<any>} - Returns the data if found, else returns false
 */
export const getDataFromAsyncStorage = async (key: string): Promise<any> => {
	try {
		const value = await AsyncStorage.getItem(key);
		if (value !== null) {
			return JSON.parse(value);
		} else {
			return false;
		}
	} catch (error: any) {
		console.log("Error while retrieving the data", error);
		return false;
	}
};

/**
 * @description Remove data from AsyncStorage
 * @param {string} key - Key of the data to be removed
 * @returns {Promise<boolean>} - Returns true if data is removed successfully, else returns false
 */
export const removeDataFromAsyncStorage = async (
	key: string
): Promise<boolean> => {
	try {
		await AsyncStorage.removeItem(key);
		return true;
	} catch (error: any) {
		console.log("Error while removing the data", error);
		return false;
	}
};
