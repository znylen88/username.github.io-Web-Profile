(function ($) {
  $(function () {

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    // $('.collapsible').collapsible();
    $("#project1").mouseenter(function () {
      $("#collapsible-body-1").fadeIn();
    });
    $("#project1").mouseleave(function () {
      $("#collapsible-body-1").fadeOut();
    });
    $("#project2").mouseenter(function () {
      $("#collapsible-body-2").fadeIn();
    });
    $("#project2").mouseleave(function () {
      $("#collapsible-body-2").fadeOut();
    });
    $("#project3").mouseenter(function () {
      $("#collapsible-body-3").fadeIn();
    });
    $("#project3").mouseleave(function () {
      $("#collapsible-body-3").fadeOut();
    });
    $("#project4").mouseenter(function () {
      $("#collapsible-body-4").fadeIn();
    });
    $("#project4").mouseleave(function () {
      $("#collapsible-body-4").fadeOut();
    });
    $("#project5").mouseenter(function () {
      $("#collapsible-body-5").fadeIn();
    });
    $("#project5").mouseleave(function () {
      $("#collapsible-body-5").fadeOut();
    });
    $("#project6").mouseenter(function () {
      $("#collapsible-body-6").fadeIn();
    });
    $("#project6").mouseleave(function () {
      $("#collapsible-body-6").fadeOut();
    });

  }); // end of document ready

})(jQuery); // end of jQuery name space
