var app = angular.module("kravFit", ["ui.router"])
  .config(function($stateProvider, $urlRouterProvider){
      var fragment_base = "/fragments/";

      $urlRouterProvider.otherwise("/home");

      $stateProvider.
        state("home", {
          url: "/home",
          templateUrl: fragment_base + "home.html",
        }).
        state("adults", {
          url: "/adults",
          templateUrl: fragment_base + "adults.html", 
        }).
        state("kids", {
          url: "/kids",
          templateUrl: fragment_base + "kids.html", 
        }).
        state("law", {
          url: "/law",
          templateUrl: fragment_base + "law.html", 
        }).
        state("faq", {
          url: "/faq",
          templateUrl: fragment_base + "faq.html", 
        }).
        state("gear", {
          url: "/gear",
          templateUrl: fragment_base + "gear.html", 
        }).
        state("about", {
          url: "/about",
          templateUrl: fragment_base + "about.html", 
        }).
        state("login", {
          url: "/login",
          templateUrl: fragment_base + "login.html", 
        });
    }
  );

app.controller('mainController', function($scope) {
  $scope.email = "info@kravfit.co";
  $scope.phone_number = "501.664.KRAV (5728)";

  var fragment_base = "/fragments/";
  var faq_base = fragment_base + "faq/";

  function Faq(faq_id, desc) {
    this.id = faq_id;
    this.description = desc;
    this.url = faq_base + faq_id + ".html";
  }

  $scope.faqs = [
    new Faq("what_is","What is Krav Maga?"),
    new Faq("what_should_i_wear", "What should I wear?"),
    new Faq("law", "Is Krav appropriate for members of miliary or law enforcement?"),
    new Faq("cost", "How much does it cost?"),
    new Faq("coed", "Are the classes coed?"),
    new Faq("results", "How long will me to notice results from Krav Maga training?"),
    new Faq("weight", "Will I lose weight training Krav Maga?"),
    new Faq("difference", "How does Krava Maga training differ from other martial arts?"),
    new Faq("typical", "What is a typical class like?"),
    new Faq("personal_safety", "Is Krav Maga just for people who are worried about personal safety?")
  ];
});
