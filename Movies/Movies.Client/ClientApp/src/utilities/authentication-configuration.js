
import { AuthenticationContext, runWithAdal  } from 'react-adal';

const adalConfig = {
    tenant: '6d6dabbb-4c20-4ec9-881c-750834547e9d',
    clientId: '5167abb2-b301-4d97-aeae-82aa72017b6d',
    endpoints: {
      api: 'https://my-org.onmicrosoft.com/5167abb2-b301-4d97-aeae-82aa72017b6d'
    },
    postLogoutRedirectUri: window.location.origin,
    redirectUri: 'https://testdeployment1.azurewebsites.net',
    cacheLocation: 'localStorage'
};

export const authContext = new AuthenticationContext(adalConfig);

export const getToken = () => {
 return authContext.getCachedToken(authContext.config.clientId);
};

export const authenticate = () => {
    var isCallback = authContext.isCallback(window.location.origin);
    authContext.handleWindowCallback();

    if (isCallback && !authContext.getLoginError()) {
        window.location = authContext._getItem(authContext.CONSTANTS.STORAGE.LOGIN_REQUEST);
    }

    var user = authContext.getCachedUser();

    if (user) {
        return;
    } else {
        console.log("error");
        authContext.config.redirectUri = window.location.origin;
        authContext.login();
    }
}