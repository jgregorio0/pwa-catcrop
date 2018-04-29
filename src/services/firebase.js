import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyBxisSEIpsVKWzGDcl67rOzs4KdjMMRqsg',
  authDomain: 'cropchat-1d098.firebaseapp.com',
  databaseURL: 'https://cropchat-1d098.firebaseio.com',
  projectId: 'cropchat-1d098',
  storageBucket: 'cropchat-1d098.appspot.com',
  messagingSenderId: '334183176859'
}
firebase.initializeApp(config)

export default {
  database: firebase.database(),
  storage: firebase.storage()
}
