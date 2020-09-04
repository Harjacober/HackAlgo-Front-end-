import jwtDecode from 'jwt-decode';

export const authHeader = () => {
    // return authorization header with jwt token
    const token = window.localStorage.getItem('cg_jwttoken');
    if (token) {
        return { Authorization: `Bearer ${token}` };
    }
    return {};
};

export const setAuthToken = (token) => {
    window.localStorage.setItem('cg_jwttoken', token);
};

export const removeAuthToken = () => {
    window.localStorage.removeItem('cg_jwttoken');
};

export const isAuthenticated = () => {
    const currentTime = Date.now() / 1000;
    try {
        const token = window.localStorage.cg_jwttoken;
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
