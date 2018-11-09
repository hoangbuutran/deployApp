// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCY2NNig01KLbYj5iV6uofnIenHtegDw-w',
    authDomain: 'takecareofpets-pad.firebaseapp.com',
    databaseURL: 'https://takecareofpets-pad.firebaseio.com',
    projectId: 'takecareofpets-pad',
    storageBucket: 'takecareofpets-pad.appspot.com',
    messagingSenderId: '91500132005'
  }
};
