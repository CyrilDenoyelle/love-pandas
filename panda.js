$('.output').hide();

$('.panda').click(function() {
	var type = $(this).attr("data-type");
	var tendance = $(this).attr("data-tendance");

	if (type != "undefined" ) {

		$('#recever').html(type + " " + tendance);
	} else {
		$('#recever').html('mais de kowwwaaa ?');
	}
});