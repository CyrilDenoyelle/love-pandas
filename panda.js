$(document).ready(function() {

	function Panda() {
    var type = $(this).attr("data-type");
    var tendance = $(this).attr("data-tendance");

    if (type != undefined) {
      $('div').html(type + " " + tendance);
    } else {
      $('div').html('mais de kowwwaaa ?');
    }
  }
    $('.panda').click(Panda);
});
