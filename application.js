// dc6zaTOxFJmzC

;
(function(app, $, window, document, undefined) {
    "use strict";
    // Put JS Here

    // http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC  
	
	function giphySearch(url){
		$.get( url, function( data ) {
			console.dir(data);
			var random = Math.floor((Math.random() * 24) + 1);
  			var id = data.data[random]["id"];
  			console.log(id);

  			var img = "http://media.giphy.com/media/" + id + "/giphy.gif";

  			console.log(img);

  			$('.results').html('<img src="' + img +  '" />');
		});
	}

	function giphyURLBuilder(term){
		// funny+cat
		var search = encodeURIComponent(term);

		var url = "http://api.giphy.com/v1/gifs/search?q=",
			api = "&api_key=dc6zaTOxFJmzC";

		url += search;
		url += api;

		console.log(url);
		giphySearch(url);

	}


    $('form').on('submit', function(e) {
        e.preventDefault();

        var searchTerm = $(this).find('input').val();

        console.log(searchTerm);

        if (searchTerm === "") {
            return false;
        } else {
        	giphyURLBuilder(searchTerm)
            console.log(searchTerm);
        }

    });

})(window.app = window.app || {}, jQuery, window, document);
