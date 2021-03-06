var app = angular.module("kravFit", ["ui.router", "ui.bootstrap"])
  .config(function($stateProvider, $urlRouterProvider){
      var partial_base = "/partials/";

      $urlRouterProvider.when("/gallery", "gallery/grand_opening");
      $urlRouterProvider.otherwise("/home");

      $stateProvider.
        state("gallery", {
          abstract: true,
          url: "/gallery",
          controller: function($scope){
            $scope.galleryName = "Grand Opening";
          },
          templateUrl: partial_base + "gallery.html"
        }).
        state("gallery.grand_opening", {
          url: "/grand_opening",
          controller: "grandOpeningController",
          templateUrl: partial_base + "gallery.carousel.html"
        }).
        state("gallery.women_self_defense", {
          url: "/women_self_defense",
          controller: "womenSelfDefenseController",
          templateUrl: partial_base + "gallery.carousel.html"
        }).
        state("gallery.in_the_news", {
          url: "/in_the_news",
          controller: "inTheNewsController",
          templateUrl: partial_base + "gallery.in_the_news.html"
        }).
        state("home", {
          url: "/home",
          templateUrl: partial_base + "home.html"
        }).
        state("adults", {
          url: "/adults",
          templateUrl: partial_base + "adults.html" 
        }).
        state("kids", {
          url: "/kids",
          templateUrl: partial_base + "kids.html"
        }).
        state("law", {
          url: "/law",
          templateUrl: partial_base + "law.html"
        }).
        state("schedule", {
          url: "/schedule",
          templateUrl: partial_base + "schedule.html"
        }).
        state("faq", {
          url: "/faq",
          templateUrl: partial_base + "faq.html"
        }).
        state("about", {
          url: "/about",
          templateUrl: partial_base + "about.html"
        });
    }
  );

app.controller("mainController", function($scope) {
  $scope.email = "info@kravfit.co";
  $scope.phone_number = "501.664.KRAV (5728)";
  $scope.day = new Date().getDay();

  var partial_base = "/partials/";
  var faq_base = partial_base + "faq/";

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

app.directive('navAutoClose', function () {
    return function (scope, elm, attrs) {
      var collapsible = $(elm).find(".navbar-collapse");
      var visible = false;

      collapsible.on("show.bs.collapse", function () {
        visible = true;
      });

      collapsible.on("hide.bs.collapse", function () {
        visible = false;
      });

      $(elm).find("a").each(function (index, element) {
        $(element).click(function (e) {
          if (visible) {
            collapsible.collapse("hide");
          }
        });
      });
    }
  });

app.controller("grandOpeningController", function($scope) {
   $scope.$parent.galleryName="Grand Opening";
   $scope.active = 0;
   $scope.interval = 5000;
   $scope.links = [
    { src:"/images/galleries/grand_opening/ArmBar.jpg", alt:"", caption:""},
    { src:"/images/galleries/grand_opening/BoxJumpForward.jpg", alt:"", caption:""},
    { src:"/images/galleries/grand_opening/CrunchAndPuch.jpg", alt:"", caption:""},
    { src:"/images/galleries/grand_opening/CrunchAndPunch2.jpg", alt:"", caption:""},
    { src:"/images/galleries/grand_opening/GunFromSide.jpg", alt:"", caption:""},
    { src:"/images/galleries/grand_opening/GunFront2.jpg", alt:"", caption:""},
    { src:"/images/galleries/grand_opening/GunFront.jpg", alt:"", caption:""},
    { src:"/images/galleries/grand_opening/GunMount2.jpg", alt:"", caption:""},
    { src:"/images/galleries/grand_opening/GunMount3.jpg", alt:"", caption:""},
    { src:"/images/galleries/grand_opening/KickOffFromGuard.jpg", alt:"", caption:""},
    { src:"/images/galleries/grand_opening/KickOffWithGun.jpg", alt:"", caption:""},
    { src:"/images/galleries/grand_opening/KidGetUpFromGround.jpg", alt:"", caption:""},
    { src:"/images/galleries/grand_opening/KidGroundRoundKick.jpg", alt:"", caption:""},
    { src:"/images/galleries/grand_opening/MountedGun.jpg", alt:"", caption:""},
    { src:"/images/galleries/grand_opening/PunchFront2.jpg", alt:"", caption:""},
    { src:"/images/galleries/grand_opening/PunchFront.jpg", alt:"", caption:""},
    { src:"/images/galleries/grand_opening/PunchOnGroundWithGun.jpg", alt:"", caption:""},
    { src:"/images/galleries/grand_opening/Stacking2.jpg", alt:"", caption:""},
    { src:"/images/galleries/grand_opening/Stacking.jpg", alt:"", caption:""}
  ];
});

app.controller("womenSelfDefenseController", function($scope) {
   $scope.$parent.galleryName="Women's Self Defense";
   $scope.active = 0;
   $scope.interval = 5000;
   $scope.links = [
    { src:"/images/galleries/women_self_defense/BearHugFromBehind2.jpg", alt:"", caption:""},
    { src:"/images/galleries/women_self_defense/BearHugFromBehind.jpg", alt:"", caption:""},
    { src:"/images/galleries/women_self_defense/Elbow2.jpg", alt:"", caption:""},
    { src:"/images/galleries/women_self_defense/Elbow3.jpg", alt:"", caption:""},
    { src:"/images/galleries/women_self_defense/Elbow.jpg", alt:"", caption:""},
    { src:"/images/galleries/women_self_defense/ElbowToFace.jpg", alt:"", caption:""},
    { src:"/images/galleries/women_self_defense/ElbowToPad.jpg", alt:"", caption:""},
    { src:"/images/galleries/women_self_defense/FrontKick2.gif", alt:"", caption:""},
    { src:"/images/galleries/women_self_defense/FrontKick3.gif", alt:"", caption:""},
    { src:"/images/galleries/women_self_defense/FrontKick4.jpg", alt:"", caption:""},
    { src:"/images/galleries/women_self_defense/FrontKick.jpg", alt:"", caption:""},
    { src:"/images/galleries/women_self_defense/FrontKickToGroin2.jpg", alt:"", caption:""},
    { src:"/images/galleries/women_self_defense/FrontKickToGroin.jpg", alt:"", caption:""},
    { src:"/images/galleries/women_self_defense/GroupTalk.jpg", alt:"", caption:""},
    { src:"/images/galleries/women_self_defense/HeadLockFromBehind.jpg", alt:"", caption:""},
    { src:"/images/galleries/women_self_defense/Knee2.jpg", alt:"", caption:""},
    { src:"/images/galleries/women_self_defense/Knee3.jpg", alt:"", caption:""},
    { src:"/images/galleries/women_self_defense/Knee4.jpg", alt:"", caption:""},
    { src:"/images/galleries/women_self_defense/Knee.jpg", alt:"", caption:""},
    { src:"/images/galleries/women_self_defense/KneeWithSuit.jpg", alt:"", caption:""},
    { src:"/images/galleries/women_self_defense/Movement2.jpg", alt:"", caption:""},
    { src:"/images/galleries/women_self_defense/Movement.jpg", alt:"", caption:""},
    { src:"/images/galleries/women_self_defense/PalmStrike2.jpg", alt:"", caption:""},
    { src:"/images/galleries/women_self_defense/PalmStrike.jpg", alt:"", caption:""},
    { src:"/images/galleries/women_self_defense/PalmStrikes3.jpg", alt:"", caption:""},
    { src:"/images/galleries/women_self_defense/PalmStrikes.jpg", alt:"", caption:""},
    { src:"/images/galleries/women_self_defense/Pull.jpg", alt:"", caption:""},
    { src:"/images/galleries/women_self_defense/Punching.jpg", alt:"", caption:""}
  ];
});
app.controller("inTheNewsController", function($scope) {
   $scope.$parent.galleryName="In the News";
});
