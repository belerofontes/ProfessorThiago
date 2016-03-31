$.ajax({
	method: "GET",
	dataType: "json",
	url: "data/dados.json",
	success: function(data) {
		var id;

		for(var i in data.imagens) {
			id = data.imagens[i].id;

			$('#content').append('<img src="' + data.imagens[i].fla + '">');
			$('#content').append('<img src="' + data.imagens[i].fla1 + '">');
			$('#content').append('<img src="' + data.imagens[i].fla2 + '">');
		}
	}
});