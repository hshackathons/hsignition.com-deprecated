var mlhApp=angular.module("mlhApp",["ngRoute"]);mlhApp.config(function(o){o.when("/",{templateUrl:"views/home.html",controller:"mainController"}).when("/about",{templateUrl:"views/about.html",controller:"aboutController"})}),mlhApp.controller("mainController",function(o,e){o.message="2014 Season Events",o.events={},e({method:"GET",url:"https://cors-anywhere.herokuapp.com/https://docs.google.com/spreadsheets/d/1y5iBt2jEQU3g8b9rxVtLyvfafkpxQ1oNZqKoAaqckAI/export?gid=1214435617&format=csv"}).success(function(e,t,l,n){for(var r=e.split("\n"),s=[],l=r[0].split(","),p=1;p<r.length;p++){for(var a={},c=r[p].split(","),m=0;m<l.length;m++)a[l[m]]=c[m];s.push(a)}o.events=angular.fromJson(s),console.log(o.events)}).error(function(o,e,t,l){console.log(e)})}),mlhApp.controller("aboutController",function(o,e){o.message="About Us"}),mlhApp.controller("indexController",function(o,e){});