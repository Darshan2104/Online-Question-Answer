$(document).ready(function () {

  //For searching Question

  $("#myInput").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#myDIV *").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });

  // Created option of "VIEW MORE" and "VIEW LESS"

  $("#hide").click(function () {
    $("#cont").hide();
  });
  $("#show").click(function () {
    $("#cont").show();
    $("#dots").hide();
  });
});