var ref = new Firebase('https://blogkassio.firebaseio.com');
var auth = new FirebaseSimpleLogin(ref, function(error, user) {
  if (error) {
    console.log('Authentication error: ', error);
  } else if (user) {
    console.log('User ' + user.id + ' authenticated via the ' + user.provider + ' provider!');
  } else {
    console.log("User is logged out.")
  }
});
