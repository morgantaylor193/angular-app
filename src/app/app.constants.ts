export const OAuthSettings = {
  authority: 'https://login.microsoftonline.com/1aff0669-ee5f-40b8-9800-b5ec4f39c48e',
  appId: 'fcc368e8-62b4-443c-95a5-2cc92916bf42',
  redirectUri: 'http://localhost:4200',
  scopes: [
    'user.read',
    'calendars.read',
    'user.readbasic.all'
    // 'openid',
    // 'profile',
    // 'offline_access',
    // 'calendars.readwrite'
  ]
};