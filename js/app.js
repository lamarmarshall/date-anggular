
    	var english ={
    "LOGIN" : "Log In",
    "SIGNUP" : "Sign Up",
    "SIGNOUT" : "Sign Out",
    "USERNAME" : "User Name: ",
    "PASSWORD" : "Password: ",
    "EMAILADDRESS" : "Email Address",
    "AGE" : "Age",
    "GENDER" : "Gender",
    "MALE" : "MALE",
    "FEMALE" : "FEMALE",
    "QWHATSAPP" : "Do you have Viber?",
    "MWHATSAPP" : "ENTER WHATSAPP NUMBER",
    "QVIBER" : "Do you have Viber?",
    "MVIBER" : "ENTER VIBER NUMBER",
    "QSKYPE" : "Do you have SKYPE?",
    "MSKYPE" : "ENTER Skype name",
    "COUNTRY" : "Country",
    "NEXT" : "Next",
    "SAVE" : "Save",
    "BETWEEN" : "Between",
    "AND" : "and",
    "MESSAGES" : "Messages",
    "LOCATION" : "location",
    "TIMESTAMP" : "Time Stamp",
    "DELETE" : "Delete"
  };
  
  var espanol = {
    "LOGIN" : "iniciar sesión",
    "SIGNUP" : "Registrarse",
    "SIGNOUT" : "cerrar sesión",
    "USERNAME" : "Nombre de usuario: ",
    "PASSWORD" : "Contraseña ",
    "EMAILADDRESS" : "Correo",
    "AGE" : "Edad",
    "GENDER" : "Homber o Mujer?",
    "MALE" : "Hombre",
    "FEMALE" : "Mujer",
    "QWHATSAPP" : "Tienes Whatsapp?",
    "MWHATSAPP" : "EL NUMERO MOVIL",
    "QVIBER" : "Tienes VIBER?",
    "MVIBER" : "EL NUMERO MOVIL",
    "QSKYPE" : "Tiense Skype?",
    "MSKYPE" : "Nomber de Skype",
    "COUNTRY" : "Pais",
    "NEXT" : "Sigue",
    "SAVE" : "Guardar",
    "BETWEEN" : "Entre",
    "AND" : " y ",
     "MESSAGES" : "Mensajes",
    "LOCATION" : "Ubicación",
    "TIMESTAMP" : "Fecha",
    "DELETE" : "Borrar"
  };
  var app = angular.module("Date", ['ui.router', 'ngSanitize', 'toastr' , 'pascalprecht.translate'] );
  
  app.config(function(toastrConfig) {
  angular.extend(toastrConfig, {
    autoDismiss: true,
    maxOpened: 1,    
    newestOnTop: true,
    positionClass: 'toast1',
    preventDuplicates: false,
    preventOpenDuplicates: false,
    target: '.row'
  });
});

app.config(['$translateProvider', function ($translateProvider) {

  $translateProvider.translations('en',english);
  $translateProvider.translations('es', espanol);
  $translateProvider.preferredLanguage('en');
}]);

app.controller('Navbar', function($scope, $translate){
   
    $translate.use("es");
  
  Parse.initialize("eTSR27OWlKZsPlg8JBmDxLBVUiuw0A6qLe1yJwHK", "C7aQYWGQstNvi0F1yBYMrF82tM2gNkG0slF4cy3g");
  var currentUser = Parse.User.current();
if (currentUser) {
    $scope.loggedin = true;
    
    $scope.user = Parse.User.current().get("username");
} else {
  $scope.loggedin = false;
}

});
  
  app.controller("Wizard", function($scope, toastr){
    $scope.WHATSAPP = 1; 
    $scope.VIBER = 2; 
    $scope.SKYPE = 3;
    $scope.whatsapp = "";
    $scope.viber = "";
    $scope.skype = "";
    
    $scope.switcher = 1; 
    
    $scope.next = function(){
      $scope.switcher++;
      if($scope.switcher == 4){
        $scope.switcher = 1; 
      }
    }
    
    $scope.save = function(){
      console.log($scope.whatsapp+"   "+$scope.viber+"  "+$scope.skype);
      
       Parse.initialize("eTSR27OWlKZsPlg8JBmDxLBVUiuw0A6qLe1yJwHK", "C7aQYWGQstNvi0F1yBYMrF82tM2gNkG0slF4cy3g");
       var Social = Parse.Object.extend("Social");
       var soc = new Social();
       soc.set("whatsapp", $scope.whatsapp);
       soc.set("viber", $scope.viber);
       soc.set("skype", $scope.skype);
       soc.set("user", Parse.User.current());
        var profACL = new Parse.ACL(Parse.User.current());
            profACL.setPublicReadAccess(true);
            soc.setACL(profACL);
       soc.save(null, {
          success: function(gameScore) {
            toastr
            
          },
          error: function(gameScore, error) {
        
          }
        });
      toastr.success("Saved", "save social");
      
    };
    
   
  });
  
  app.service("User", function(){
    return function(){
      return "hola";

    }
  });
  
  app.service("Countries", function(){
    return {
      USA: "UNITED STATES",
      FR: "FRANCE",
      UK: "UNITED KINDOM",
      DR: "DOMINICAN REPUBLIC",
      PR: "PUERTO RICO",
      GR: "GERMANY",
      CA: "CANADA",
      IT: "ITALY",
      SP: "SPAIN",
      PT: "PORTUGAL",
      BR: "BRAZIL",
      CS: "COSTA RICA",
      MX: "MEXICO",
      CO: "COLOMBIA",
      CU: "CUBA"
      
    };
  })
  
  app.filter('range', function() {
  return function(input, total) {
    total = parseInt(total);

    for (var i=18; i<total; i++) {
      input.push(i);
    }

    return input;
  };
});


  
  app.controller('Search', function($scope, Countries){
   $scope.countries = Countries;
  });
  
  app.controller('Login',['$scope', 'toastr', '$location', function($scope, toastr, $location){
    $scope.onSubmit = function(valid){
      toastr.clear();
       if(valid){
         
         console.log($scope.username+"   "+$scope.pw);
          Parse.initialize("eTSR27OWlKZsPlg8JBmDxLBVUiuw0A6qLe1yJwHK", "C7aQYWGQstNvi0F1yBYMrF82tM2gNkG0slF4cy3g");
              Parse.User.logIn($scope.username, $scope.pw, {
                success: function(user) {
                  
                  toastr.success('successful login', 'Login',{closeButton: true});
                  window.location.reload();
                  
                },
                error: function(user, error) {
                  toastr.error(error.message, error.code,{closeButton: true});
                }
          });
       }
       else{
          toastr.error('form invalid', 'Error',{closeButton: true});
       }
    }
    
  }]);
  
  app.controller("Register", function($scope, toastr, $location){
    $scope.disabled = false;
    
      $scope.onSubmit = function(isValid){
       Parse.initialize("eTSR27OWlKZsPlg8JBmDxLBVUiuw0A6qLe1yJwHK", "C7aQYWGQstNvi0F1yBYMrF82tM2gNkG0slF4cy3g");
       $scope.disabled = true;
       if(isValid){
          Parse.User.logOut();
            
            var user = new Parse.User();
            user.set("username", $scope.username);
            user.set("password", $scope.pwr);
            user.set("email", $scope.email);
            
            var Profile = Parse.Object.extend("Profile");
            
            var prof = new Profile();
            var profACL = new Parse.ACL(Parse.User.current());
            profACL.setPublicReadAccess(true);
            prof.setACL(profACL);
            prof.set("gender", $scope.gender);
            prof.set("age", $scope.age);
            
            
            user.signUp(null, {
              success: function(user) {
                // Hooray! Let them use the app now.
                prof.set("user", Parse.User.current());
                
                prof.setACL(new Parse.ACL(Parse.User.current()));
                prof.save()
                toastr.success('successful sign up', 'Sign Up',{closeButton: true});
                $location.path("/wizard");
              },
              error: function(user, error) {
                // Show the error message somewhere and let the user try again.
                 toastr.error(error.message, error.code,{closeButton: true});
              
              }
            });
        }
        
        console.log($scope.email+" "+$scope.username+"  "+$scope.pwd+" "+$scope.age+" "+$scope.gender)
      
        }
    });

app.controller("Logout", function($scope, $location){
  Parse.initialize("eTSR27OWlKZsPlg8JBmDxLBVUiuw0A6qLe1yJwHK", "C7aQYWGQstNvi0F1yBYMrF82tM2gNkG0slF4cy3g");
  Parse.User.logOut();
  window.location.reload();
  $location.path("/");
});	

app.controller("Mail", function(){
  
});
app.controller("Conversation", function($scope, $stateParams) {
     $scope.convoid = $stateParams.convoid;
  });
  
app.controller("Dashboard", function($scope){
  
});

app.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/home");
  //
  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "templates/home.html"
    })
    .state('list', {
      url: "/list",
      templateUrl: "templates/list.html"
    })
    .state('login', {
      url: "/login",
      templateUrl: "login.html",
      controller: "Login"
    })
    .state('register', {
      url: "/register",
      templateUrl: "register.html",
      controller: "Register"
    })
     .state('wizard', {
      url: "/wizard",
      templateUrl: "templates/wizard.html",
      controller: "Wizard"
    })
    .state('search', {
      url: "/search",
      templateUrl: "templates/search.html",
      controller: "Search"
    })
    .state('logout', {
      url: "/logout",
      template: "logged out",
      controller: "Logout"
    })
    .state('mail', {
      url: "/mail",
      templateUrl: "templates/mail.html",
      controller: "Mail"
    })
    .state('conversation', {
      url: "/mail/conversation/:convoid",
      templateUrl: "templates/conversation.html",
      controller: "Conversation"
    })
    .state('dashboard', {
      url: "dashboard",
      templateUrl: "templates/dashboard.html",
      controller: "Dashboard"
    })
    
    
});