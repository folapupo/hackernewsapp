import { AuthConfig } from 'angular-oauth2-oidc';
import { environment } from '../../../environments/environment';


export const hackerNewsStoryAuthConfig : AuthConfig = {
    
    issuer: 'https://login.microsoftonline.com/common/v2.0',
    redirectUri: window.location.origin,
    clientId: 'd18a6535-d6c3-4c6a-a6f8-34ad0d5f4bfd',
    responseType: 'code',
    scope: 'openid profile email api://d18a6535-d6c3-4c6a-a6f8-34ad0d5f4bfd/access_as_user',
    strictDiscoveryDocumentValidation: false,
    showDebugInformation: true,
    skipIssuerCheck: true
}