import axios from 'axios';
import { apiUrl, appKey } from './env';
import AsyncStorage from '@react-native-async-storage/async-storage';

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'JWT fefege...'
}

export const setSession = async (data: any) => {
    try {
        AsyncStorage.setItem(appKey.sessionUser, JSON.stringify(data));
        AsyncStorage.setItem(appKey.apiToken, JSON.stringify(data.api_token));
        AsyncStorage.setItem(appKey.isLoggedIn, JSON.stringify(true));
      } catch (e) {
        throw e;
      }
};

/* User API */ 
export const registerUser = async ({fullname, email, password, passwordConfirmation}: any) => {
    const data = {
        fullname: fullname,
        email: email, 
        password: password,
        password_confirmation: passwordConfirmation
    };
    try {
        const res = await axios.post(`${apiUrl}/registerUser`, data, {
            headers: headers
        });
        return res.data;
    } catch (err) {
        throw err;
    }
};

export const loginUser = async ({email, password}: any) => {
    const data = {
        email: email, 
        password: password
    };
    try {
        const res = await axios.post(`${apiUrl}/loginUser`, data, {
            headers: headers
        });
        return res.data;
    } catch (err) {
        throw err;
    }
};

/* Doctor API */ 
export const registerDoctor = async ({fullname, email, password, passwordConfirmation}: any) => {
    const data = {
        fullname: fullname,
        email: email, 
        password: password,
        password_confirmation: passwordConfirmation
    };
    try {
        const res = await axios.post(`${apiUrl}/registerDoctor`, data, {
            headers: headers
        });
        return res.data;
    } catch (err) {
        throw err;
    }
};

export const loginDoctor = async ({email, password}: any) => {
    const data = {
        email: email, 
        password: password
    };
    try {
        const res = await axios.post(`${apiUrl}/loginDoctor`, data, {
            headers: headers
        });
        return res.data;
    } catch (err) {
        throw err;
    }
};

export const searchDoctor = async ({search}: any) => {
    const data = {
        search: search
    };
    try {
        const res = await axios.post(`${apiUrl}/searchDoctor`, data, {
            headers: headers
        });
        return res.data;
    } catch (err) {
        throw err;
    }
};

export const updateDoctorProfile = async ({updateUser}: any) => {
    const data = {
      updateUser: JSON.stringify(updateUser),
    };
    console.log('>>>>', data);
    try {
        const res = await axios.post(`${apiUrl}/updateDoctorProfile`, data, {
            headers: headers
        });
        return res.data;
    } catch (err) {
        throw err;
    }
};

/* * */ 


export default {
    setSession: setSession,
    // User api
    registerUser: registerUser,
    loginUser: loginUser,
    // Doctor api
    registerDoctor: registerDoctor,
    loginDoctor: loginDoctor,
    searchDoctor: searchDoctor,
    updateDoctorProfile: updateDoctorProfile,
    // Others
};