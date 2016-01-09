
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
    "DELETE" : "Delete",
    "SEARCHRESULTS": "Search Results",
    "SEARCH" : "Search",
    "QCOUNTRY" : "Choose country ...",
    "ANYCOUNTRY" : "Any and All",
        'USA' : "UNITED STATES",
      'FR' : "FRANCE",
      'UK' : "UNITED KINDOM",
      'DR' : "DOMINICAN REPUBLIC",
      'PR' : "PUERTO RICO",
      'GR' : "GERMANY",
      'CA' : "CANADA",
      'IT' : "ITALY",
      'SP' : "SPAIN",
      'PT' : "PORTUGAL",
      'BR' : "BRAZIL",
      'CS' : "COSTA RICA",
      'MX' : "MEXICO",
      'CO' : "COLOMBIA",
      'CU' : "CUBA",
      'CONTACTSREQ' : "Request for Contact info Sent! ",
      'CONTACSREQHEAD' : "Info requested",
      'FAVORITE' : "Favorite",
      "MAIL" : "Mail",
      'CONVERSATIONTEXTAREA': "Chat",
      'HEADCONVERSATION': "Type your message",
      'SEND' : "Send",
      'TRANSLATE' : "Translate",
      'TRANSLATION' : "Translation",
      'SAMELANGUAGE' : "ERROR: it is in english",
      'SETUPCHANGE' : "Set up whatsapp, viber and/or skype",
      'CONTACTS' : "Contacts",
      'CHANGEPASSWORD' : "Change Password"
  };
  
  var espanol = {
    "LOGIN" : "iniciar sesión",
    "SIGNUP" : "Registrarse",
    "SIGNOUT" : "cerrar sesión",
    "USERNAME" : "Nombre de usuario: ",
    "PASSWORD" : "Contraseña ",
    "EMAILADDRESS" : "Correo",
    "AGE" : "Edad",
    "GENDER" : "Hombre o Mujer?",
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
    "DELETE" : "Borrar",
    "SEARCHRESULTS": "Resultados",
    "SEARCH" : "Buscar",
    "QCOUNTRY" : "Elije pais ...",
    "ANYCOUNTRY" : "Qualquier paises",
     'USA' : "ESTADOS UNIDOS",
     'USADOM' : "ESTADOS UNIDOS / (new york)",
      'FR' : "FRANCE",
      'UK' : "UNITED KINDOM",
      'DR' : "REPUBILCA DOMINICANA",
      'PR' : "PUERTO RICO",
      'GR' : "GERMANY",
      'CA' : "CANADA",
      'IT' : "ITALY",
      'SP' : "SPAIN",
      'PT' : "PORTUGAL",
      'BR' : "BRAZIL",
      'CS' : "COSTA RICA",
      'MX' : "MEXICO",
      'CO' : "COLOMBIA",
      'CU' : "CUBA",
      'CONTACTSREQ' : "los contactos  pedido",
      'CONTACSREQHEAD' : "info pedido",
      'FAVORITE' : "Favorito",
      "MAIL" : "Correo",
      'CONVERSATIONTEXTAREA': "Tecla mensaje",
      'HEADCONVERSATION': "Platico",
      'SEND': 'Enviar',
      'TRANSLATE' : "Traducir",
      'TRANSLATION' : " traducción:",
      'SAMELANGUAGE' : "ERROR: ya español",
      'SETUPCHANGE' : "Configurar whatsapp, viber o skype",
      'CONTACTS' : "Contactos",
      "CHANGEPASSWORD" : "Cambiar Contraseña"
   
  };
  var Lang = {};
  var languages = {};
   Lang['english'] = english;
   Lang['espanol'] = espanol;
   languages['es'] = "espanol";
   languages['en'] = "english";
  
  var app = angular.module("Date", ['ui.router','toastr' , 'pascalprecht.translate', 'ui.bootstrap' ,'angularSpinner' ]);
  
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
   $scope.dynamicPopover = {
    content: 'Hello, World!',
    templateUrl: 'myPopoverTemplate.html',
    title: 'Title'
  };
 
  
  $scope.close = function(){
     $scope.popov = false;
  }
 
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
  
  app.controller("Wizard", function($scope, toastr, $location){
    $scope.WHATSAPP = 1; 
    $scope.VIBER = 2; 
    $scope.SKYPE = 3;
    $scope.whatsapp = "";
    $scope.viber = "";
    $scope.skype = "";
    $scope.isDisabled = false;
    
    $scope.switcher = 1; 
    
    $scope.next = function(){
      $scope.switcher++;
      if($scope.switcher == 4){
        $scope.switcher = 1; 
      }
    }
    
    $scope.save = function(){
      $scope.isDisabled = true;
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
      $scope.$apply();
      $location.path("/dashboard");
      
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


  
  app.controller('Search', function($scope, Countries,  toastr, $translate, $q, $document){
     $scope.disableSearch = false;
   $scope.countries = Countries;
   $scope.isCollapsed = false;
  $scope.idx = "100";
   var chosen = [];
    $scope.showSpinner = false;
   $scope.loadLang = function(){
     var deferred = $q.defer();
           $translate('CONTACTSREQ').then(function (contacts) {
              $scope.contactsreq = contacts;
              deferred.notify("contacts set");
            });
            $translate('CONTACTSREQHEAD').then(function (contacts) {
              $scope.contactsreqhead = contacts;
              deferred.notify("contacts set");
            });
             deferred.resolve();
       return deferred.promise;
   }
   
   $scope.onContacts = function(ind){
     chosen.push(ind);
   
     $scope.idx = ind;
     el = document.querySelector('[frame="'+ind+'"]');
     el.addEventListener("transitionend", function(name1){
       console.log(name1);
        document.querySelector('[frame="'+ind+'"]').style.display = "none";
     }, true);
    document.querySelector('[frame="'+ind+'"]').style.opacity = 0;
   
    
    $scope.loadLang().then(function(){
      toastr.success($scope.contactsreq, $scope.contactsreqhead);
    }
    
    );
    
     
   }
   $scope.onFavorite = function(){
     console.log("fav");
   }
   $scope.onSend = function(){
     console.log("send");
   }
   
   
   $scope.onClick = function(){
     $scope.disableSearch = true;
     $scope.isCollapsed =  false; 
      $scope.showSpinner = true;
     if(window.screen.width < 376){
       $scope.isCollapsed = !$scope.isCollapsed;
       
     }else{
       $scope.isCollapsed =  false; 
     }
     
     Parse.initialize("eTSR27OWlKZsPlg8JBmDxLBVUiuw0A6qLe1yJwHK", "C7aQYWGQstNvi0F1yBYMrF82tM2gNkG0slF4cy3g");
  
    var Profile = Parse.Object.extend("Profile");
   
    var query = new Parse.Query(Profile);
    if($scope.location == "ANY"){
      
           if($scope.gender){
            console.log("gender set "+$scope.gender);
            query.equalTo("gender", $scope.gender)
          }
         
    }else{
       if($scope.gender){
            console.log("gender set "+$scope.gender);
            query.equalTo("gender", $scope.gender)
          }
          if($scope.location){
            console.log("location set "+$scope.location);
            query.equalTo("location", $scope.location);
          }
    }
    
    

    

     
      query.find({
        success: function(women) {
          console.log("queried");
          var rs = [];
          for(var i = 0; i < women.length; i++)
          {
            console.log(women)
            p = JSON.parse(JSON.stringify(women[i])); // weird
            rs.push(p);
          }
         $scope.results = rs;
         $scope.showSpinner = false;
         $scope.$apply();
         
        }
      });
   }
   
  });
  
  app.controller('Popover', function($scope, $translate){
    $translate.use('es');
  })
  
  app.controller('Login',['$scope', 'toastr', '$location', function($scope, toastr, $location){
    $scope.onSubmit = function(valid){
      toastr.clear();
       if(valid){
         
         console.log($scope.username+"   "+$scope.pw);
          Parse.initialize("eTSR27OWlKZsPlg8JBmDxLBVUiuw0A6qLe1yJwHK", "C7aQYWGQstNvi0F1yBYMrF82tM2gNkG0slF4cy3g");
              Parse.User.logIn($scope.username, $scope.pw, {
                success: function(user) {
                  
                  toastr.success('successful login', 'Login',{closeButton: true});
                  $scope.apply()
                  
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
  
  app.controller("Register", function($scope, toastr, $location, Countries){
    $scope.disabled = false;
    $scope.countries = Countries;
      $scope.onSubmit = function(isValid){
       Parse.initialize("eTSR27OWlKZsPlg8JBmDxLBVUiuw0A6qLe1yJwHK", "C7aQYWGQstNvi0F1yBYMrF82tM2gNkG0slF4cy3g");
       $scope.disabled = true;
       if(isValid){
          Parse.User.logOut();
            
            var user = new Parse.User();
            var custom_acl2 = new Parse.ACL();
            custom_acl2.setPublicReadAccess(true);
            user.setACL(custom_acl2);
            user.set("username", $scope.username);
            user.set("password", $scope.pwr);
            user.set("email", $scope.email);
            
           
            
            
            user.signUp(null, {
              success: function(user) {
                 var Profile = Parse.Object.extend("Profile");
            var custom_acl = new Parse.ACL();
            // give write access to the current user
            custom_acl.setWriteAccess( Parse.User.current(), true);
            // disable public read access
            custom_acl.setPublicReadAccess(true);
                        
            var prof = new Profile();
            prof.setACL(custom_acl);
            prof.set("username",  Parse.User.current().get("username") );
            prof.set("location", $scope.location);
            prof.set("gender", $scope.gender);
            prof.set("age", $scope.age);
                prof.set("user", Parse.User.current());
                
                
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


app.controller("Conversation", function($scope, $stateParams, $translate, $http) {
  Parse.initialize("eTSR27OWlKZsPlg8JBmDxLBVUiuw0A6qLe1yJwHK", "C7aQYWGQstNvi0F1yBYMrF82tM2gNkG0slF4cy3g");
    $translate('TRANSLATE').then(function (t) {
          $scope.translate = t;
     });
     $translate('SAMELANGUAGE').then(function (t) {
          $scope.samelanguage = t;
     });
     $scope.convoid = $stateParams.convoid;
    $scope.userConvo = Parse.User.current().get("username");
    $scope.spinnerOpen = false;
    $scope.translationresults = "";
    $scope.fromlang =  "";
    //https://www.googleapis.com/language/translate/v2?key=AIzaSyDCAF0_uLnCPNmbGCwVRb2cPa6TvT5m2b8&source=en&target=es&q=eat%20a%20dick
    //https://www.googleapis.com/language/translate/v2/detect?key=AIzaSyDCAF0_uLnCPNmbGCwVRb2cPa6TvT5m2b8&q=
    
     $scope.clear = function(){
       $scope.textarea = "";
     }
     
     $scope.textareachange = function(event){
      key = parseInt( event.keyCode);
        if(key ==13){
          $scope.update();
        }
     }
     
     $scope.update = function(){
       var audio = new Audio('audio/strum.mp3');
      audio.play()
       
       var el = document.getElementById("chat");
       var els = document.getElementsByClassName("chatbox")[0];
       var node = document.createElement("P"); 
       
       var box  = document.createElement("P");
       box.className = "white1";
       var button = document.createElement("BUTTON");
       button.className ="btn btn-default btn-xs pull-right";
       var btntext = document.createTextNode($scope.translate)
       button.appendChild(btntext)
       box.appendChild(button);
       
       node.className = "you"
       var txtinput = $scope.textarea;
       var textnode = document.createTextNode(txtinput);
       node.appendChild(textnode);
       node.appendChild(box);
       el.appendChild(node);
       
       
       $scope.clear();
       els.scrollTop = els.scrollHeight;
       
       button.addEventListener('click', function(){
         $scope.spinnerOpen = true;
         this.setAttribute('disabled', 'disabled');
         var trtxt = Lang[languages[$translate.use()]]['TRANSLATION'];
         $http({
            method: 'GET',
            url: 'https://www.googleapis.com/language/translate/v2/detect?key=AIzaSyDCAF0_uLnCPNmbGCwVRb2cPa6TvT5m2b8&q='+txtinput
          }).then(function successCallback(response) {
            $scope.fromlang = response.data.data.detections[0][0].language;
            var tolang = "es";
            if($scope.fromlang == $translate.use()){
              tolang="en";
              console.log("same language");
              var para = document.createElement("P");
                para.className = "white1";
                var paratxt = document.createTextNode(trtxt);
                var translation = document.createTextNode( $scope.samelanguage);
                var br = document.createElement("BR");
                var bold = document.createElement("B");
                bold.appendChild(translation);
                para.appendChild(paratxt);
                para.appendChild(br);
                para.appendChild(bold);
         node.appendChild(para);
         els.scrollTop = els.scrollHeight; 
              return;
            }
            
            
            $http({
              method: 'GET',
              url: 'https://www.googleapis.com/language/translate/v2?key=AIzaSyDCAF0_uLnCPNmbGCwVRb2cPa6TvT5m2b8&source='+$scope.fromlang+'&target='+tolang+'&q='+txtinput
            }).then(function successCallback(response1) {
                  
              $scope.translationresults = response1.data.data.translations[0].translatedText;
              console.log($scope.translationresults);
              
                var para = document.createElement("P");
                para.className = "white1";
                var paratxt = document.createTextNode(trtxt);
                var translation = document.createTextNode($scope.translationresults);
                var br = document.createElement("BR");
                var bold = document.createElement("B");
                bold.appendChild(translation);
                para.appendChild(paratxt);
                para.appendChild(br);
                para.appendChild(bold);
         node.appendChild(para); 
         els.scrollTop = els.scrollHeight;
         $scope.spinnerOpen = false;
        
              }, function errorCallback(response) {
                console.error(response);
              });
             
         
            }, function errorCallback(response) {
             console.error(response);
            });
         
       });
      
     }
});

  
app.controller("Dashboard", function($scope ){
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
      url: "/conversation/:convoid",
      templateUrl: "templates/conversation.html",
      controller: "Conversation"
    })
    .state('dashboard', {
      url: "/dashboard",
      templateUrl: "templates/dashboard.html",
      controller: "Dashboard"
    })
    
    
});