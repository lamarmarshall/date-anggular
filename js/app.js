
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
      'CHANGEPASSWORD' : "Change Password",
      "OPEN" : "Toggle",
      "ENGLISH" : "English",
      "SPANISH" : "Español",
      "LANG" : "en",
      "QLANGUAGE" : "LANG", 
      "CHANGELANGUAGE" : "Change Language",
      "USADOM" : "UNITED STATES",
      "SERVERDOWN" : "Server Down"
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
      'DR' : "REPUBLICA DOMINICANA",
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
      "CHANGEPASSWORD" : "Cambiar Contraseña",
      "OPEN" : "abrir",
      "ENGLISH" : "English",
      "SPANISH" : "Español",
      "QLANGUAGE" : "LANG",
      "CHANGELANGUAGE" : "Cambiar Idioma",
      "SERVERDOWN" : "Error no conexion",
      "LANG" : "es",
   
  };
  var Lang = {};
  var languages = {};
   Lang['english'] = english;
   Lang['espanol'] = espanol;
   languages['es'] = "espanol";
   languages['en'] = "english";
   
  
  
  var app = angular.module("Date", ['ui.router' , 'pascalprecht.translate', 'ui.bootstrap' ,'angularSpinner'  ]);
  
   


app.config(['$translateProvider', function ($translateProvider) {

  $translateProvider.translations('en',english);
  $translateProvider.translations('es', espanol);
  $translateProvider.preferredLanguage('en');
}]);

app.service('Preferance', function(){
   return {
       
       setCookie : function(cname, cvalue, exdays) {
            var d = new Date();
            d.setTime(d.getTime() + (exdays*24*60*60*1000));
            var expires = "expires="+d.toUTCString();
            document.cookie = cname + "=" + cvalue + "; " + expires;
        },
        
        getCookie: function(cname) {
            var name = cname + "=";
            var ca = document.cookie.split(';');
            for(var i=0; i<ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0)==' ') c = c.substring(1);
                if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
            }
            return "";
        }, 
         set : function(cname, cvalue) {
             var exdays = 90;
            var d = new Date();
            d.setTime(d.getTime() + (exdays*24*60*60*1000));
            var expires = "expires="+d.toUTCString();
            document.cookie = cname + "=" + cvalue + "; " + expires;
        },
        get: function(cname) {
            var name = cname + "=";
            var ca = document.cookie.split(';');
            for(var i=0; i<ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0)==' ') c = c.substring(1);
                if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
            }
            return "";
        },
        exists : function(cname){
            if(this.get(cname).length < 1){
                return false;
            }
            return true;
        }
    } 
});

app.controller('Navbar', function($scope, $translate, Preferance, BrowserLanguage){

BrowserLanguage.get
/*
swal({
    title: "hello",
    text: " hello world"
});
*/


if(Preferance.exists("Language")){
     $translate.use(Preferance.get("Language"));
}else{
    $translate.use(BrowserLanguage.get);
}
$scope.$on('changelanguage', function(e, data){
   $translate.use(data);
});
   $scope.dynamicPopover = {
    content: 'Hello, World!',
    templateUrl: 'myPopoverTemplate.html',
    title: 'Title'
  };
 $scope.$on('loggedin', function(event, args) {

    $scope.loggedin = true;
    console.log("logged in");
    // do what you want to do
});
  
  $scope.close = function(){
     $scope.popov = false;
  }
 
 
  
  Parse.initialize("eTSR27OWlKZsPlg8JBmDxLBVUiuw0A6qLe1yJwHK", "C7aQYWGQstNvi0F1yBYMrF82tM2gNkG0slF4cy3g");
  var currentUser = Parse.User.current();
if (currentUser) {
    $scope.loggedin = true;
    
    $scope.user = Parse.User.current().get("username");
} else {
  $scope.loggedin = false;
}

});
  
  app.controller("Wizard", function($scope,  $location){
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
    
    $scope.saveIt = function(){
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
      
            
          },
          error: function(gameScore, error) {
        
          }
        });
    
      $scope.$apply();
      $location.path("/dashboard");
      
    };
    
   
  });
  
  app.service("User", function(){
    return function(){
      return "hola";

    }
  });
  
  app.service("BrowserLanguage", function(){
      var l = window.navigator.language.split('-');
      return{
          get : l[0]
      } ;
  });
  
  app.service('Cache', function(){
      return {
  
            set : function(key, value){
            if(localStorage){
                var d = moment();
                var obj = {
                text : JSON.stringify(value),
                timestamp: d
                }
                localStorage.setItem(key, JSON.stringify(obj) );
            }

            
            }, 
            get: function(key){
            
                
                return JSON.parse( JSON.parse( localStorage.getItem(key) ).text );
                
                
            },
            getTimeStamp: function(key){
            
                var ux = JSON.parse( localStorage.getItem(key) ).timestamp ;
                
                return   moment().subtract(moment(ux).minutes(), 'minutes').minutes();
                
                
            },
            exists : function(key){
                return localStorage.getItem(key) != null;

            },
            last : function(key){
                var obj = this.getTimeStamp(key);
                return obj;
            },
            lastAccess : function(key){
                var obj = this.getTimeStamp(key);
                return obj;
            },
            add: function(key, value){
                if(this.exists(key)){
                    var val = this.get(key);
                    val.push(value);
                    this.set(key, val);
                    return;
                }
                var val = [];
                val.push(value);
                this.set(key, val );
            }
            
        };
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
  app.service("MyParse", function($q){
      return{
          username : function(){
              Parse.initialize("eTSR27OWlKZsPlg8JBmDxLBVUiuw0A6qLe1yJwHK", "C7aQYWGQstNvi0F1yBYMrF82tM2gNkG0slF4cy3g");
              parse = Parse.User.current();
              return parse.get("username");
          },
          addSecure: function(objname, objvalue){
              Parse.initialize("eTSR27OWlKZsPlg8JBmDxLBVUiuw0A6qLe1yJwHK", "C7aQYWGQstNvi0F1yBYMrF82tM2gNkG0slF4cy3g");
              var Profile = Parse.Object.extend(objname);
              var custom_acl = new Parse.ACL();
            // give write access to the current user
            custom_acl.setWriteAccess( Parse.User.current(), true);
            // disable public read access
            custom_acl.setPublicReadAccess(true);
                        
            var prof = new Profile();
           prof.save(objvalue, {
                success: function(gameTurnAgain) {
    
                },
                error: function(gameTurnAgain, error) {
                    swal({
                        title: error,
                        content: error,
                        type: error
                    });
                    }
                });
      
              
          },
            inflate: function(input){
              var p = JSON.parse(JSON.stringify(input)); // weird
              return p;
          },
          skope: function(){
              return this;
          }
          ,
          getMessages: function(to){
              var defered = $q.defer();
               Parse.initialize("eTSR27OWlKZsPlg8JBmDxLBVUiuw0A6qLe1yJwHK", "C7aQYWGQstNvi0F1yBYMrF82tM2gNkG0slF4cy3g");
              var username = Parse.User.current();
              username = username.get("username");
              
              var toquery = new Parse.Query("messages")
              toquery.equalTo("to", to );
              toquery.equalTo("from", username );
               
              var fromquery = new Parse.Query("messages")
              fromquery.equalTo("to", username );
              fromquery.equalTo("from", to );
              
              var mainQuery = Parse.Query.or(toquery, fromquery);
              mainQuery.ascending("createdAt");
              
              mainQuery.find({
                success: function(results) {
                    console.log(results);
                    defered.resolve( results );
                  
                },
                error: function(error) {
                    console.log(error);
                    return false;
                }
                });
              
             return defered.promise; 
          },
        
          getContacts: function(mclass){
              var defered = $q.defer();
              Parse.initialize("eTSR27OWlKZsPlg8JBmDxLBVUiuw0A6qLe1yJwHK", "C7aQYWGQstNvi0F1yBYMrF82tM2gNkG0slF4cy3g");
              var username = Parse.User.current();
              username = username.get("username");
              var query = new Parse.Query(mclass)
              query.equalTo("from", username);
         
                    query.find({
                    success: function(results) {
                           var rs = [];
                        for(var i = 0; i < results.length; i++)
                        {
                         
                            var p = JSON.parse(JSON.stringify(results[i])); // weird
                             console.log(p.to)  
                            rs.push({to: p.to, from: p.from});
                            
                        
                        }
                       
                        defered.resolve(_.uniq(rs, 'to') );
                    },

                    error: function(error) {
                        // error is an instance of Parse.Error.
                    }
                });
                
                return defered.promise;

          } 
          
  
      }
  });
  
  app.filter('range', function() {
  return function(input, total) {
    total = parseInt(total);

    for (var i=18; i<total; i++) {
      input.push(i);
    }

    return input;
  };
});
app.filter('Gender', function(){
    return function(input, gen){
        var res = [];
     
           for(var i = 0; i < input.length; i++) {
             
               if(input[i].gender == gen){
                res.push(input[i]);
            }
           }

        return res;
    }
});

app.filter("Location", function(){
    return function(input, pais){
          var res = [];
      console.log(pais);
           for(var i = 0; i < input.length; i++) {
                if(pais == "ANY"){
                    res.push(input[i]);
                    continue;
                }
               if( input[i].location == pais ){
                   console.log( input[i].location );
                   res.push(input[i]);
               }
               
            
           }
           
           return res;
        
    }
})




  
  app.controller('Search', function($scope, Countries,  $translate, $q, $document, Cache, MyParse){
      
     $scope.disableSearch = false;
   $scope.countries = Countries;
  $scope.location = "ANY";
   $scope.isCollapsed = false;
   $scope.gen = "FEMALE";
  $scope.idx = "100";
  
   var chosen = [];
    $scope.showSpinner = false;
   
    if( Cache.exists("favorites") ){
           var val = Cache.get("favorites"); 
           var res = Cache.get("results");
            console.log("favorites loaded");
            
               
              for(var p = 0; p < res.length ; p++){
                  for(var i = 0; i < val.length; i++){
                   
                      //console.log(_.findIndex(res, 'username', val[i].value  ) ); 
                      if( _.includes(res[p], val[i].value) ){
                         res =  _.drop(res,  p);
                      }
                    }
              }
               
                      
                    
              
                
        
         $scope.results = res;
         console.log( Cache.last("results") );
         console.log("from cache");
         $scope.showSpinner = false;
        
     }
     
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
   
   $scope.onContacts = function(ind, username){
     chosen.push(ind);
   
     $scope.idx = ind;
     el = document.querySelector('[frame="'+ind+'"]');
     el.addEventListener("transitionend", function(name1){
       Cache.add("ContactRequest", { to: username, from: MyParse.username(), shared: false });
       MyParse.addSecure("ContactRequest", { to: username, from: MyParse.username(), shared: false })
       
        document.querySelector('[frame="'+ind+'"]').style.display = "none";
     }, true);
    document.querySelector('[frame="'+ind+'"]').style.opacity = 0;
   
    
    $scope.loadLang().then(function(){
  
    }
    
    );
    
     
   }
   $scope.onFavorite = function(username){
       var user = MyParse.username();
  
       var Favorite ={
           key: user,
           value: username
       }
       
       if(Cache.exists("favorites")){
           var favorites = _.uniq( Cache.get("favorites"), 'value');
          
          favorites.forEach(function(input){
              if(input.key == user){
                  if(input.value == username){
                      console.log("not added");
                      
                  }
              }
             
          });
       }
       
       Cache.add("favorites", Favorite);
       MyParse.addSecure("favorites", Favorite);
       
       
      // MyParse.addSecure("favorites", Favorite);
    /*
            var Profile = Parse.Object.extend("Profile");
        
            var query = new Parse.Query(Profile); 
            */
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
     if( Cache.exists("results") ){
         var rs = Cache.get("results");
         /*
            if($scope.gender){
             switch($scope.gender){
                 case  "FEMALE":
                 rs = rs.filter(filterFemale);
                 console.log("female");
                 break;
                 case "MALE" :
                 rs = rs.filter(filterMale);
                 console.log("male");
                 break;
             }
         }*/
         $scope.results = rs;
         console.log( Cache.last("results") );
         console.log("from cache");
         $scope.showSpinner = false;
         return;
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
          Cache.set("results", rs);
         
         if($scope.gender){
             switch($scope.gender){
                 case  "FEMALE":
                 rs = rs.filter(filterFemale);
                 break;
                 case "MALE" :
                 rs = rs.filter(filterMale);
                 break;
             }
         }
         
         
         $scope.results = rs;
         $scope.showSpinner = false;
         $scope.$apply();
         
        }
      });
   }
   
   var filterFemale = function(input){
       
       
          return input.gender == "FEMALE";
       
   }
   
      var filterMale = function(input){
       
       
          return input.gender == "MALE";
       
   }
   
  });
  
  app.controller('Popover', function($scope){
    
  })
  
  app.controller('Login',['$scope', '$location', '$rootScope', 'MyParse', function($scope,  $location, $rootScope, MyParse){
       $scope.$on("$destroy", function() {
     
    });


    try{
        MyParse.username()
         swal({
                      title : "",
                  
                      type: "success"
                  },function(){
                      $location.path("/dashboard");
                  });
    }catch(e){
        
    }
     
                  
    $scope.onSubmit = function(valid){

       if(valid){
         
         console.log($scope.username+"   "+$scope.pw);
          Parse.initialize("eTSR27OWlKZsPlg8JBmDxLBVUiuw0A6qLe1yJwHK", "C7aQYWGQstNvi0F1yBYMrF82tM2gNkG0slF4cy3g");
              Parse.User.logIn($scope.username, $scope.pw, {
                success: function(user) {
                 
                  document.getElementsByClassName("login-btns")[0].style.display = "none";
                  document.getElementsByClassName("actionbar")[0].style.display = "block";
                  //$location.path("/dashboard");
                  $rootScope.$broadcast('loggedin', true);
                  location.reload();
                 
                },
                error: function(user, error) {
                    swal({
                      title : ":}",
                      text : error.message,
                      type: "error"
                  });
       
                  
                }
          });
       }
       else{
       
       }
    }
   
  }]);
  
  app.controller("Register", function($scope, $location, Countries){
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
               
                $location.path("/wizard");
              },
              error: function(user, error) {
                // Show the error message somewhere and let the user try again.
                 swal({title: error.message, cotent: error.code, type: error});
              
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

app.controller("Contacts", function($scope, Cache, MyParse){
    $scope.results =[];
    document.getElementsByTagName('nav')[0].style.display = "none";
    if( Cache.exists("ContactRequest") ){
        $scope.results = Cache.get("ContactRequest");
        
    }else{
        MyParse.getContacts("ContactRequest").then(function(rs){
            $scope.results = rs;
            Cache.set("ContactRequest", rs);
        });
    }
    
    $scope.refresh = function(){
        if(localStorage){
            localStorage.removeItem("ContactRequest");
            
        }
        MyParse.getContacts("ContactRequest").then(function(rs){
            $scope.results = rs;
        });
      
        //location.reload();
        
    }

 $scope.$on("$destroy", function() {
     document.getElementsByTagName('nav')[0].style.display = "block";
});
  
});

/*
      angular.forEach(items, function (item) {
        var valueToCheck, isDuplicate = false;

        for (var i = 0; i < newItems.length; i++) {
          if (angular.equals(extractValueToCompare(newItems[i]), extractValueToCompare(item))) {
            isDuplicate = true;
            break;
          }
        }
        if (!isDuplicate) {
          newItems.push(item);
        }

      });
      items = newItems;
    }
    return items;
  };
});*/

app.controller("Conversation", function($scope, $stateParams, $translate, $http, MyParse) {
    $scope.textarea = "";
    $scope.konsole = "status good";
    $scope.glow = false;
    $scope.disabletalk = false;
    var inflate =  function(input){
              var p = JSON.parse(JSON.stringify(input)); // weird
              return p;
     }
    MyParse.getMessages($stateParams.convoid).then(function(rs)
   {
       var user = Parse.User.current();
       user = user.get("username")
       console.log(rs);
       rs.forEach(function( input, index, array){
           console.log(input);
            _display( inflate(input), user );
            
       });
       
    })
    
 
  
  $scope.onTalk = function(event) {
         if (!('webkitSpeechRecognition' in window)) {
             document.getElementById("talk").style.display = "none";
            console.log("update your browser");
            } else {
            var recognition = new webkitSpeechRecognition();
            $scope.glow = true;
            $scope.disabletalk = true;
            recognition.continuous = false;
            console.log("speach init");
            
    final_transcript = '';
    recognition.lang = $translate.use();
  
    recognition.onerror = function(){
         $scope.glow =false;
         $scope.disabletalk = false;
 
    }
    recognition.onresult = function(event) {
 

   
              
                    final_transcript += event.results[0][0].transcript;
             
   
            
            

            $scope.textarea = final_transcript ;
            $scope.konsole = "results generating";
            $scope.glow =false;
            $scope.disabletalk = false;
            $scope.$apply();
            
       
            
            
         
       
        };
   }
   
     recognition.onend = function() {
         
            $scope.glow = false;
            $scope.disabletalk = false;
            $scope.konsole = "results complete";
              
            return;
          
     }
   
   
  recognition.start();
  }
/*
  recognition.onstart = function() { ... }
  recognition.onresult = function(event) { ... }
  recognition.onerror = function(event) { ... }
  recognition.onend = function() { ... }
  */
  

document.getElementsByTagName('nav')[0].style.display = "none";

 $scope.$on("$destroy", function() {
     document.getElementsByTagName('nav')[0].style.display = "block";
});
    

  Parse.initialize("eTSR27OWlKZsPlg8JBmDxLBVUiuw0A6qLe1yJwHK", "C7aQYWGQstNvi0F1yBYMrF82tM2gNkG0slF4cy3g");
    $translate('TRANSLATE').then(function (t) {
          $scope.translate = t;
     });
     $translate('SAMELANGUAGE').then(function (t) {
          $scope.samelanguage = t;
     });
     
     $translate('SERVERDOWN').then(function (t) {
          $scope.serverDown = t;
     });
     $scope.convoid = $stateParams.convoid;
    $scope.userConvo = Parse.User.current().get("username");
    $scope.spinnerOpen = false;
    $scope.translationresults = "";
    $scope.fromlang =  "";
    //https://www.googleapis.com/language/translate/v2?key=AIzaSyDCAF0_uLnCPNmbGCwVRb2cPa6TvT5m2b8&source=en&target=es&q=eat%20a%20dick
    //https://www.googleapis.com/language/translate/v2/detect?key=AIzaSyDCAF0_uLnCPNmbGCwVRb2cPa6TvT5m2b8&q=
    
     $scope.clear = function(username){
       $scope.textarea = "";
     }
     
     $scope.textareachange = function(event){
      key = parseInt( event.keyCode);
        if(key ==13){
          $scope.update();
        }
     }
     
     var _display = function(input, user){
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
       if(user==input.from){
           node.className = "me"
       }else{
            node.className = "you"    
       }
       
 
       var txtinput = input.from+": "+input.message;
       var textnode = document.createTextNode(txtinput);
       node.appendChild(textnode);
       node.appendChild(box);
       el.appendChild(node);
        var els = document.getElementsByClassName("chatbox")[0];
       els.scrollTop = els.scrollHeight;
          //eturn {node: node, button:  button, chat: els};
          
          
                button.addEventListener('click', function(){

         this.setAttribute('disabled', 'disabled');
         var trtxt = Lang[languages[$translate.use()]]['TRANSLATION'];
         $http({
            method: 'GET',
            url: 'https://www.googleapis.com/language/translate/v2/detect?key=AIzaSyDCAF0_uLnCPNmbGCwVRb2cPa6TvT5m2b8&q='+txtinput
          }).then(function successCallback(response) {
            $scope.fromlang = response.data.data.detections[0][0].language;
            var tolang = "es";
            console.log("before translate")
            if($scope.fromlang == $translate.use()){
           
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
              
            }else{
                tolang = $translate.use()
                console.log(tolang);
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
                  
                    $scope.spinnerOpen = false;
                    swal({
                       title: $scope.serverDown,
                       type: "error" 
                    });
                console.error(response);
              });
             
         
            }, function errorCallback(response) {
             console.error(response);
            });
         
       });
      }
    $scope.refresh = function(){
            MyParse.getMessages($stateParams.convoid).then(function(rs)
   {
       var user = Parse.User.current();
       user = user.get("username")
       console.log(rs);
       rs.forEach(function( input, index, array){
           console.log(input);
            _display( inflate(input), user );
            
       });
       
    })
    } 
     $scope.update = function(){
      
         
      if(typeof $scope.textarea === 'undefined'){
        return;
      }
      if($scope.textarea.length == 0){
        return;
      }
      
      
         var message = {
             to: $stateParams.convoid,
             from: MyParse.username(),
             message: $scope.textarea,
             type: "message"
         };
         
         MyParse.addSecure("messages", message);
        console.log(message);
      
       var audio = new Audio('audio/strum.mp3');
      audio.play()
       
    
       
 
      var output =  _display(message, message.from);
   
       
       $scope.clear();
      
     }
});

  
app.controller("Dashboard", function($scope ){
});

app.controller("Profile", function($scope, $stateParams){
    $scope.prof = "place";
   Parse.initialize("eTSR27OWlKZsPlg8JBmDxLBVUiuw0A6qLe1yJwHK", "C7aQYWGQstNvi0F1yBYMrF82tM2gNkG0slF4cy3g");
  
    var Profile = Parse.Object.extend("Profile");
   
    var query = new Parse.Query(Profile);
    query.equalTo("username", $stateParams.username);
    query.limit(1);
    
    

    

     
      query.find({
        success: function(input) {
          console.log("queried");
            var p = JSON.parse(JSON.stringify( input[0] ));
            $scope.prof = p;
            $scope.$apply();
            console.log(p.gender);
          console.log($stateParams.username);
          
          /*
          var rs = [];
          for(var i = 0; i < women.length; i++)
          {
            console.log(women)
            p = JSON.parse(JSON.stringify(women[i])); // weird
            rs.push(p);
          }
         $scope.results = rs;
         $scope.showSpinner = false;
         $scope.$apply()*/;
         
        }
      });
  
});

app.controller("Language", function($scope, $rootScope, Preferance, $location ){
    $scope.onLang = function(lang){
        Preferance.setCookie("Language", lang);
        //console.log(Preferance.exists("language"));
        $rootScope.$broadcast('changelanguage', lang);
        $location.path(document.referrer);
        
    }
    
});

app.controller('Favorites', function($scope, Cache, MyParse){
    if(Cache.exists("favorites")){
        
            $scope.myFavorites = _.uniq( Cache.get("favorites"), 'value' );
            
    }
    
  
});

app.controller('Photo', function($scope, $translate, MyParse){
    
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
    .state('profile', {
      url: "/profile/:username",
      templateUrl: "templates/profile.html",
      controller: "Profile"
    })
    .state('contacts', {
      url: "/contacts",
      templateUrl: "templates/contacts.html",
      controller: "Contacts"
    }).state('favorites', {
      url: "/favorites",
      templateUrl: "templates/favorites.html",
      controller: "Favorites"
    })
     .state('language', {
      url: "/language",
      templateUrl: "templates/Language.html",
      controller: "Language"
    })
     .state('photo', {
      url: "/photo",
      templateUrl: "templates/photo.html",
      controller: "Photo"
    })
    
});