export const environment = {
    production: false,
    oidc: {
      tenantId: 'ce7287f4-a3d6-499c-8554-1acd43361d31',
      clientId: 'd18a6535-d6c3-4c6a-a6f8-34ad0d5f4bfd',
      issuer: 'https://login.microsoftonline.com/common/v2.0',
      loginUrl: 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize',
      //issuer: 'https://login.microsoftonline.com/common/v2.0',
      redirectUri: 'http://localhost:4200',
      scopes: 'openid profile email api://d18a6535-d6c3-4c6a-a6f8-34ad0d5f4bfd/access_as_user'
    },
    apiBaseUrl: 'http://localhost:5269/api'    
  };

  