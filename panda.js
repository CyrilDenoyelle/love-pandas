$('.output').hide();

$('.panda').click(function() {
	var type = $(this).attr("data-type");
	var tendance = $(this).attr("data-tendance");

    if (type == "normaux" && tendance == "amour") {// Aime normaux
    	$(".output2").toggle();
    	$(".output3").toggle();
    }
	else if (type == "normaux" && tendance == "haine") {// Aime pas normaux
		$('.output2').toggle();
		$('.output4').toggle()
	}
	else if (type == "roux" && tendance == "amour") {// Aime roux
		$('.output1').toggle();
		$('.output3').toggle();
	}
	else if (type == "roux" && tendance == "haine") {// Aime pas roux
		$('.output1').toggle();
		$('.output4').toggle()
	} else {
		$('#what').toggle();
	}
});