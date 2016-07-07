angular.module('starter.controllers', [])


.controller("EnterController", function ($scope, $ionicModal,User) {
    $ionicModal.fromTemplateUrl('/menu/page1', { scope: $scope })
    .then(function (modal) {
        $scope.modal = modal;
    });
    
    $scope.message = User.all[0].txt;
    $scope.user = User.all[0];
   
    $scope.checkuser = function (log,pas) {
        $scope.message = User.check(log,pas);
         $scope.modal.show();
        console.log($scope.message);
    }
    

    $scope.inmenu = function () {
        $scope.modal.show();
    };

})

.controller("MenuController" ,function($scope){
  $scope.menus = [
    {title: "Книга рецептов"},
    {title: "Журнал"},
    {title: "Форум"},
    {title: "Добавь своё"},
    {title: "Книга рецептов"},
    {title: "Полезное"},
    {title: "Конкурсы"},
    {title: "Найди рецепт"},
    {title: "Фотографии"},
    {title: "Советы"},
    {title: "Однокурсники"},
    {title: "Настройки"}
  ];
  $scope.pers = { name: "Aleksey Pirogov" , balls : 0};
    
})

.controller("PageController" ,function($scope){
})


.controller("HeadController", function ($scope) {
})
