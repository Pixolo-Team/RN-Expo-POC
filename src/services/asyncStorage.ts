//IMPORTS//
import AsyncStorage from "@react-native-async-storage/async-storage";

/** Sets Data in Local Storage */
export const setDataInLocalStorage = async (
  key: string,
  value: string | Array<any> | object
): Promise<boolean> => {
  try {
    //Convert the value  to JSON for Storage//
    const serializedValue = JSON.stringify(value);
    //Stores the serialized value in local storage//
    await AsyncStorage.setItem(key, serializedValue);
    //Returns if the operation is done sucessfully or failed//
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
    //Gets the Serialized Value from the Local Storage//
    const value = await AsyncStorage.getItem(key);
    //Used for Parsing the value into an object//
    return value ? JSON.parse(value) : undefined;
  } catch (error) {
    //It is Used For Finding Any errors if present//
    console.error(error);
    //Display any further errors if any//
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
export const flushLocalStorage = async (): Promise<void> => {
  try {
    // Get all keys from local storage
    const storageKeys = await AsyncStorage.getAllKeys();
    //Waits  till all the keys are deleted//
    await AsyncStorage.multiRemove(storageKeys);
  } catch (error) {
    console.error(error);
    throw error;
  }
};
