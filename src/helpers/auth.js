import jwtDecode from 'jwt-decode';

export const authHeader = () => {
    // return authorization header with jwt token
    const token = localStorage.getItem('jwtoken');
    // console.log(token);
    if (token) {
        return { Authorization: `Bearer ${token}` };
    }
    return {};
};

export const setAuthToken = (token) => {
    window.localStorage.setItem('jwtoken', token);
};

export const removeAuthToken = () => {
    window.localStorage.removeItem('jwtoken');
};

export const isAuthenticated = () => {
    const currentTime = Date.now() / 1000;
    try {
        const token = window.localStorage.jwtoken;
        const user = token && jwtDecode(token);
        if (token && user.exp > currentTime) {
            return user.identity;
        }
        removeAuthToken();
        return false;
    } catch (error) {
        return false;
    }
};
