const jwtDecode = require('jwt-decode');
import * as rawToken from './token';

export function tokenDecodeBot() {
   if(typeof (rawToken.getToken()) === 'string') {
      const decodedToken = jwtDecode(rawToken.getToken());
      return decodedToken;
    }
    else {
        return '';
    }
}
