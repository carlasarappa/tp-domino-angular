app.service('LoginService', function($http) {

    var host = "http://localhost:9000/";

    return {
        login: function (loginRequest, cb, errorHandler) {
            return $http.post(host + "login", loginRequest)
                .then(cb)
                .catch(errorHandler);
        }
    }
});

