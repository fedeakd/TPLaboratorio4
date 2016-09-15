var miApp= angular.module("AngularABM",['ui.router','Juego']);
miApp.config(function($stateProvider,$urlRouterProvider){
	$stateProvider
	.state(
		"inicio",{
			url:"/inicio",
			templateUrl:"Templetes/inicio2.html",
			controller:"controlInicio"
		}
		)
	.state(
		"persona",{
			url:"/persona",
			abstract:true,
			templateUrl:"Templetes/abstractaPersona.html",
			controller:"controlPersonaAbstracta"
		}
		)
	.state(
		"persona.menu",{
			url:"/menu",
			views:{
				"contenido":{
					templateUrl:"Templetes/personaMenu.html",
					controller:"controlPersonaMenu"
				}
				
			}

		}
		)	
	.state(
		"persona.alta",{
			url:"/alta",
			views:{
				"contenido":{
					templateUrl:"Templetes/personaalta.html",
					controller:"controlPersonaalta"
				}
				
			}

		}
		)
	.state(
		"persona.grilla",{
			url:"/grilla",
			views:{
				"contenido":{
					templateUrl:"Templetes/personaGrilla.html",
					controller:"controlPersonagrilla"
				}
				
			}

		}
		).state(
		"registro",{
			url:"/registro",
			templateUrl:"Templetes/registro.html",
			controller:"controlRegistro"

		}
		).state(
		"login",{
			url:"/login",
			templateUrl:"Templetes/login.html",
			controller:"controlLogin"

		}
		)

		$urlRouterProvider.otherwise("/inicio");


	});

miApp.controller("controlInicio",function($scope,$state){
	$scope.IrAlRegistro= function(){
		$state.go("registro")
		console.log("hola mundo");
	}
	$scope.IrAlLogin= function(){
		$state.go("registro");
		console.log("hola mundo");
	}
	$scope.IrAlJuego=function(){
		$state.go("juego");
	}

});

miApp.controller("controlPersonaAbstracta",function($scope,$state){
	$scope.irAAlta=function(){

		$state.go("persona.alta");

	}

	$scope.IrAGrilla=function(){
		$state.go("persona.grilla");

	}
	$scope.IrAInicio=function(){
		$state.go("persona.menu");

	}

});

miApp.controller("controlPersonaMenu",function($scope, $state){

	$scope.irAAlta=function(){

		$state.go("persona.alta");

	}

	$scope.IrAGrilla=function(){
		$state.go("persona.grilla");
		console.log("hoal prueba");
	}

});

miApp.controller("controlPersonaalta",function($scope){



});
miApp.controller("controlPersonagrilla",function($scope){



});


miApp.controller("controlRegistro",function($scope,$state){
	$scope.IrAlLogin= function(){
		$state.go("login")
	}


});

miApp.controller("controlLogin",function($scope, $state){
	$scope.IrAlRegistro= function(){
		$state.go("registro")
	}

	$scope.prueba=function(){
		alert("hola");
	}

});