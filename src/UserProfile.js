var UserProfile = (function() {
    var username = "";
    var useremail = "";
    var userId = "";
  
    var getName = function() {
      return username;
    };
    var getEmail = function() {
    return useremail;
    };
    var getUserId = function() {
    return userId;
    };
  
    var setName = function(name) {
        localStorage.setItem('username', name);  
    };
    var setEmail = function(email) {
        localStorage.setItem('useremail', email);
    };
    var setUserId = function(userId) {
        localStorage.setItem('userId', userId);
    };
  
    return {
      getName: getName,
      setName: setName,
      getEmail: getEmail,
      setEmail: setEmail,
      getUserId: getUserId,
      setUserId: setUserId
    }
  
  })();
  
  export default UserProfile;