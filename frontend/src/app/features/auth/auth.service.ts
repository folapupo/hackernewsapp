import { Injectable } from "@angular/core";
import { OAuthService } from "angular-oauth2-oidc";
import { hackerNewsStoryAuthConfig } from "./auth.config";

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(private oauthService: OAuthService) {

    //console.log(hackerNewsStoryAuthConfig)

    this.oauthService.configure(hackerNewsStoryAuthConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin().then(() => {
      
      if (!this.oauthService.hasValidAccessToken()) {

        // 🔐 Force logout if user is authenticated but something went wrong
        this.oauthService.logOut(true); // full IdP logout
        this.oauthService.initCodeFlow();
      }
      // console.log('Access Token:', this.oauthService.getAccessToken());
      // console.log('ID Token:', this.oauthService.getIdToken());
      // console.log('User Info:', this.oauthService.getIdentityClaims());
    
    }).catch((error) => {
      //console.log(error);
    });
  }


  login() {
    this.oauthService.initCodeFlow();
  }

  logout(){
    this.oauthService.logOut();
  }

  get token() : string{
    return this.oauthService.getAccessToken();
  }

  get isLoggedIn() : boolean {
    return this.oauthService.hasValidAccessToken();
  }
}