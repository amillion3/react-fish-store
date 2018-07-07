import firebase from 'firebase';

const registerUser = user => {
  // user object is passed in
  return firebase.auth().createUserWithEmailAndPassword(user.email, user.password);
  // no promise needed here
};

const loginUser = user => {
  return firebase.auth().signInWithEmailAndPassword(user.email, user.password);
};

export default {registerUser, loginUser};
