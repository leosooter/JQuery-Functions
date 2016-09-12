/* global $ */
var header = $("#header");
var subHeader = $("#sub-header");
var headerBox = $("#header-box");
var icon = "<div class='icon'></div>";

$("document").ready(function(){
  $(".radio-form").hide();
  //header.data("changed", true);
})
//Text Styling
$("#header-text-ad").click(function(){
  console.log($("#header-text").val());
  header.text($("#header-text").val());
  header.data("changed", true);
  if(subHeader.data("changed")){
    $(".radio-form").fadeIn();
  }
  else{
    $("#sub-text").focus();
  };
});

$("#sub-text-ad").click(function(){
  console.log($("#sub-text").val());
  subHeader.text($("#sub-text").val());
  subHeader.data("changed", true);
  if(header.data("changed")){
    $(".radio-form").fadeIn();
  }
  else{
    $("#header-text").focus();
  };
});

//Color Styling
$("#header-color-ad").click(function(){
  console.log($("#header-color").val());
  header.attr("style", "color:" + $("#header-color").val());
});

$("#sub-color-ad").click(function(){
  console.log($("#sub-color").val());
  subHeader.attr("style", "color:" + $("#sub-color").val());
});

//Font Styling for Header
$("#header-tahoma").click(function(){
  console.log($(this).val());
  header.removeClass();
  header.addClass($(this).val());
});

$("#header-arial").click(function(){
  console.log($(this).val());
  header.removeClass();
  header.addClass($(this).val());
});

$("#header-georgia").click(function(){
  console.log($(this).val());
  header.removeClass();
  header.addClass($(this).val());
});

//Font Styling for Sub-Header
$("#sub-tahoma").click(function(){
  console.log($(this).val());
  subHeader.removeClass();
  subHeader.addClass($(this).val());
});

$("#sub-arial").click(function(){
  console.log($(this).val());
  subHeader.removeClass();
  subHeader.addClass($(this).val());
});

$("#sub-georgia").click(function(){
  console.log($(this).val());
  subHeader.removeClass();
  subHeader.addClass($(this).val());
});

//icon
$("#octopus").click(function(){
  icon = "<img src=" + $(this).val() + " alt='octopus icon' />"
});

$("#eagle").click(function(){
  icon = "<img src=" + $(this).val() + " alt='eagle icon' />"
});

$("#shark").click(function(){
  icon = "<img src=" + $(this).val() + " alt='shark icon' />"
});

$("#before").click(function(){
  if($(".icon").length){
    $(".icon").remove();
  }
  var newIcon = $("<div class='icon'></div>").html(icon);
  header.before(newIcon);
});

$("#after").click(function(){
  if($(".icon").length){
    $(".icon").remove();
  }
  var newIcon = $("<div class='icon'></div>").html(icon);
  header.after(newIcon);
});

$("#append").click(function(){
  if($(".icon").length){
    $(".icon").remove();
  }
  var newIcon = $("<div class='icon'></div>").html(icon);
  header.append(newIcon);
});

//Effects

$("#fade-out").click(function(){
  headerBox.fadeOut();
});

$("#hide").click(function(){
  headerBox.hide();
});

$("#slide-down").click(function(){
  headerBox.slideDown();
});

$("#fade-in").click(function(){
  headerBox.fadeIn();
});

$("#show").click(function(){
  headerBox.show();
});

$("#slide-up").click(function(){
  headerBox.slideUp();
});

$("#toggle").click(function(){
  headerBox.toggle();
});

$("#slide-toggle").click(function(){
  headerBox.slideToggle();
});
