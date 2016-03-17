(function(angular, undefined) {
  angular.module("myNewProjectApp.constants", [])

.constant("appConfig", {
	"userRoles": [
		"guest",
		"user",
		"admin"
	]
})

;
})(angular);