
var game;
$("button").on('click', function() {
	document.getElementById('informa').innerHTML = "";
	document.getElementById('texto').innerHTML = ""; 
	

	if ($(this).attr("id") == "game1") {
		game = 0;
	}else if ($(this).attr("id") == "game2") {
		game = 1;
	}else if ($(this).attr("id") == "game3") {
		game = 2;
	}
	console.log(game);

	$.ajax({
		method: "GET",
		dataType: "json",
		url: "data/dados.json",
		success: function(data) {
			$('#informa').append('<h3>' + data.jogo[game].nome + '</h3>');
			$('#informa').append('<h4>Lançamento: ' + data.jogo[game].lancamento + '</h4>');
			$('#informa').append('<img id="Jogo" src="' + data.jogo[game].imagem + '">');
			$('#texto').append('<p>' + data.jogo[game].descricao + '</p>');			
		}
	
	});


});
