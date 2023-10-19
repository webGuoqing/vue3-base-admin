const TokenKey = 'Admin-Token';
const Refreshtoken = 'Admin-Refreshtoken';
// 获取token
export function getToken(key = 'token') {
    if (key === 'token') {
        return sessionStorage.getItem(TokenKey);
    } else {
        return sessionStorage.getItem(Refreshtoken);
    }
}
// 存储token
export function setToken(token: any, key = 'token') {
    if (key === 'token') {
        return sessionStorage.setItem(TokenKey, token);
    } else {
        return sessionStorage.setItem(Refreshtoken, token);
    }
}
// 删除token
export function removeToken(key = 'token') {
    if (key === 'token') {
        return sessionStorage.remove(TokenKey);
    } else if (key === 'all') {
        sessionStorage.remove(TokenKey)
        sessionStorage.remove(Refreshtoken)
    } else {
        sessionStorage.remove(Refreshtoken);
    }
}