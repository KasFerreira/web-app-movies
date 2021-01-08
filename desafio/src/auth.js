
import { getLocalStorage } from './helpers/localstorage'


export const isAuthenticated = () => getLocalStorage('TokenJWT');

