//IMPORTS//
import AsyncStorage from "@react-native-async-storage/async-storage";

/** Sets Data in Local Storage */
export const setDataInLocalStorage = async (
  key: string,
  value: string | Array<any> | object
): Promise<boolean> => {
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
): Promise<any | undefined> => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value ? JSON.parse(value) : undefined;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

/** Remove Data from Local Storage */
export const removeDataFromLocalStorage = async (key: string): Promise<void> => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

/** Remove Multiple Data/Keys from Local Storage */
export const removeMultipleDataFromLocalStorage = async (): Promise<void> => {
  try {
    // Get all keys from local storage
    const value = await AsyncStorage.getAllKeys();
    // Remove all local storage items except "saved_companies" and "remembered_user"
    const filteredKeys = value.filter(
      (key) => key !== "saved_companies" && key !== "remembered_user"
    );
    await AsyncStorage.multiRemove(filteredKeys);
  } catch (error) {
    console.error(error);
    throw error;
  }
};
