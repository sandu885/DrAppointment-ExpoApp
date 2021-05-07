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

/* * */ 

export const updateProfile = async ({id, name, email}: any) => {
    const data = {
        id: id,
        name: name,
        email: email, 
    };
    try {
        const res = await axios.post(`${apiUrl}/updateProfile`, data, {
            headers: headers
        });
        return res.data;
    } catch (err) {
        throw err;
    }
};

export const loadMenu = async () => {
    try {
        const res = await axios.get(`${apiUrl}/loadMenu`, {
            headers: headers
        });
        return res.data;
    } catch (err) {
        throw err;
    }
}

export const loadProducts = async ({categoryId}: any) => {
    const data = {
        categoryId: categoryId
    };
    try {
        const res = await axios.post(`${apiUrl}/loadProducts`, data, {
            headers: headers
        });
        return res.data;
    } catch (err) {
        throw err;
    }
}

export const addToCart = async ({productId}: any) => {
    try {
        const _sessionUser = await AsyncStorage.getItem(appKey.sessionUser);
        if(_sessionUser !== null) {
            const sessionUser = JSON.parse(_sessionUser);
            const data = {
                userId: sessionUser.id,
                productId: productId
            };
            const res = await axios.post(`${apiUrl}/addToCart`, data, {
                headers: headers
            });
            return res.data;
        } else {
          return [];
        }
    } catch (err) {
        throw err;
    }
}

export const getCartData = async () => {
    try {
        const _sessionUser = await AsyncStorage.getItem(appKey.sessionUser);
        if(_sessionUser !== null) {
            const sessionUser = JSON.parse(_sessionUser);
            const data = {
                userId: sessionUser.id
            };
            const res = await axios.post(`${apiUrl}/getCartData`, data, {
                headers: headers
            });
            return res.data;
        } else {
          return [];
        }
    } catch (err) {
        throw err;
    }
}

export const changeQuantity = async ({orderItemId, quantity}: any) => {
    try {
        const _sessionUser = await AsyncStorage.getItem(appKey.sessionUser);
        if(_sessionUser !== null) {
            const sessionUser = JSON.parse(_sessionUser);
            const data = {
                userId: sessionUser.id,
                orderItemId: orderItemId,
                quantity: quantity
            };
            const res = await axios.post(`${apiUrl}/changeQuantity`, data, {
                headers: headers
            });
            return res.data;
        } else {
          return [];
        }
    } catch (err) {
        throw err;
    }
}

export default {
    setSession: setSession,
    registerUser: registerUser,
    loginUser: loginUser,
    registerDoctor: registerDoctor,
    loginDoctor: loginDoctor,
    updateProfile: updateProfile,
    loadMenu: loadMenu,
    loadProducts: loadProducts,
    addToCart: addToCart,
    getCartData: getCartData,
    changeQuantity: changeQuantity,
};