import firebase from 'firebase';

const registerUser = user => {
  // user object is passed in
  return firebase.auth().createUserWithEmailAndPassword(user.email, user.password);
  // no promise needed here
};

export default {registerUser};
