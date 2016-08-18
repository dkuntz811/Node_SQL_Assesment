$(document).ready(function (){
  getAnimals();
	randomAnimal();
$('#animal-submit').on('click', postAnimal);
$('#animal-submit').on('click', randomAnimal);
});

function getAnimals(){
	$.ajax({
		type: 'GET',
		url:'/animals',
		success: function (animals) {
			console.log('GET /animals returns:', animals);
			animals.forEach(function (animal){
				var $el = $('<li></li>');
				$el.append('<strong>' + animal.name + '</strong>');
				$('#animal-list').append($el);

			});
		},
		error: function (response) {
			console.log('GET /animals failed');
		},
	});

}

function randomAnimal() {
	event.preventDefault();

	var animal = {};

	$.each($('#animal-form').serializeArray(), function (i, field){
		animal[field.name] = field.value;

	});
	  console.log('animal', animal);

		$.ajax({
			type: 'POST',     //send animals to server to get random number
			url: '/random',
			data: animal,
			success: function (){
				console.log('POST /animal works');
				$('#animal-list').empty();

			},
			error: function (response) {
				console.log('POST ANIMAL RAN AWAY');
			},
		});
}
