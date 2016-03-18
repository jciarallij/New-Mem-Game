var moves =0;
var wins =0;
var games =0;
var gridSize;
var gameTiles;
var gridArray;
var rowSize;
var cards = [ 

	"<img src='img/monsters-01.png'>",
	"<img src='img/monsters-02.png'>",
	"<img src='img/monsters-03.png'>",
	"<img src='img/monsters-04.png'>",
	"<img src='img/monsters-05.png'>",
	"<img src='img/monsters-06.png'>",
	"<img src='img/monsters-07.png'>",
	"<img src='img/monsters-08.png'>",
	"<img src='img/monsters-09.png'>",
	"<img src='img/monsters-11.png'>",
	"<img src='img/monsters-13.png'>",
	"<img src='img/monsters-14.png'>",
	"<img src='img/monsters-15.png'>",
	"<img src='img/monsters-16.png'>"
];




	
$(document).ready(function(){

	$('input').click(function(){
		var diff = $(this).val();
		if(diff == "easy"){
			rowSize = 5;
			gridSize = rowSize * 2;
		} else if (diff=="med"){
			rowSize = 5;
			gridSize = rowSize * 4;
		} else if (diff=="hard"){
			rowSize = 7;
			gridSize = rowSize * 4;
		}
		$('#button-bucket').toggle();
		gameTiles = cards.slice(0,(gridSize/2));
		gridArray = $.merge(gameTiles, gameTiles);
		console.log(gridArray);

		// shuffle here

		// place here
			for(i=0; i<gridArray.length; i++){
			var html = '<div class="mg-tile">';
				html += '<div class="mg-tile-inner unmatched flipped">';
					html += '<div class="mg-tile-outside"></div>';
					html += '<div class="mg-tile-inside">' + gridArray[i] + '</div>';
					html += '</div>';
				html += '</div>';
			$('#mg-contents').append(html);


		}

		setTimeout(function(){
			$('.mg-tile-inner').removeClass('flipped');
		}, 2000);

		$('.mg-tile').click(function(){
			$(this).find('.mg-tile-inner').addClass('flipped');
		})


	});

});


