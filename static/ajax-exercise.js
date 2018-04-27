"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(evt) {
	//Get response from '/fortune'
	$.get('/fortune', function(result) {$('#fortune-text').html(result);});
}

$('#get-fortune-button').on('click', showFortune);



// PART 2: SHOW WEATHER


function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};
    // "zipcode"  is set to same key as request.args.get is searching for
    // the above is an object
    // TODO: request weather with that URL and show the forecast in #weather-info

    $.get(url, formData, function(result) {
    	$('#weather-info').html(`Your forecast: ${result['forecast']}`);
    })
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


