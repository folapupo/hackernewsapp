export const environment = {
    production: true,
    oidc: {
      tenantId: 'your-tenant-id',
      clientId: 'your-client-id',
      issuer: 'https://login.microsoftonline.com/common/v2.0',
      redirectUri: 'https://yourdomain.com',
      scopes: 'openid profile email'
    },
    apiBaseUrl: 'https://api.yourdomain.com/api'
  };