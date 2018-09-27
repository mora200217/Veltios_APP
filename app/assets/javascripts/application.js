// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
// = require rails-ujs
// = require turbolinks
// = require_tree .
// = require jquery
// = require bootstrap-datepicker


var expanded = false;
var onSearch = false;

var KEYCODE_ESC = 27;
function toggleSideBar() {
  if(!expanded){
    expandSideBar();
  }else{
    contractSideBar();
  }
}

function toggleSearchBar() {
  if(!onSearch && expanded){
    contractSideBar();
    expandSearchBar();
  }else if(onSearch != true ){
    expandSearchBar();
  }else{
    contractSearchBar();
  }
}





$(document).ready(function(){
  contractSideBar();
  contractSearchBar();
  $('.datepicker').datepicker();
  $('.datepicker').datepicker({
    format: 'mm/dd/yyyy',
    startDate: '-3d'
  });

});

$(window).resize(function() {
  if ($(this).width() < 990) {
    contractSideBar();
  }
});

function expandSideBar(){
  document.getElementById("side-bar").style.width = "250px";
  document.getElementById("elements-list-container").style.left = "250px";
  document.getElementById("float-but").style.left = "80px";
  document.getElementById("float-but").style.background = "none";
  document.getElementById("float-but").style.boxShadow = "none";
  expanded = true;
}

function contractSideBar(){
  document.getElementById("side-bar").style.width = "0";
  document.getElementById("elements-list-container").style.left = "0";
  document.getElementById("float-but").style.left = "92%";
  document.getElementById("float-but").style.background = "#e74c3c";
  document.getElementById("float-but").style.boxShadow = "0 5px 11px 0 rgba(0,0,0,.18), 0 4px 15px 0 rgba(0,0,0,.15)";
  expanded = false;
}

function expandSearchBar(){
  // document.getElementById("sb-move-div").style.transform =  "scale3d(0.7,0.7,1)";
  document.getElementById("bg-search").style.display = "block";
  document.getElementById("float-but").style.display = "none";
  document.getElementById("bg-search").style.opacity = "0.9";
  document.getElementById("q_name_cont").focus();
  onSearch = true;
}

function contractSearchBar(){
  document.getElementById("sb-move-div").style.transform =  "scale3d(1,1,1)";
  document.getElementById("float-but").style.display = "block";
  document.getElementById("bottom-search").style.width = "0px";
  document.getElementById("bg-search").style.display = "none";
  onSearch = false;
}

function expandBottom(){
    document.getElementById("bottom-search").style.width = "100%";
}


$(document).keyup(function(e) {
  if (e.keyCode == KEYCODE_ESC) contractSearchBar();
});


function initDate(){
alert("adfzxgcn");

}
function changeValue(){
// alert("DONE");
var form = document.getElementById("date-change-form");
$("#myModal").modal("toggle");



}


function submitForm(){
  var form = document.getElementById("date-change-form");

  $.ajax({
    type: "delete",
    url: "/reserve_actions/destroy_all"});

  form.submit();
}
function updateUrlDate(){
  var form = document.getElementById("date-change-form");

  form.submit();

}



function lineExpansion(id){
  var line = document.getElementById("line-below-"+String(id));
  line.style.width = "80%";
}


$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})


$('.new_reserve_item').submit(function(e){
    e.preventDefault();
    alert("we");
    // $.ajax({
    //     url:'/elements/create',
    //     type:'post',
    //     data:$('#element_form').serialize(),
    //     success:function(){
    //       alert("Saved!");
    //       Console.log("da");
    //     }
    // });
});

$('.edit_reserve_item').submit(function(e){
    e.preventDefault();
    alert("we");
    // $.ajax({
    //     url:'/elements/create',
    //     type:'post',
    //     data:$('#element_form').serialize(),
    //     success:function(){
    //       alert("Saved!");
    //       Console.log("da");
    //     }
    // });
});
