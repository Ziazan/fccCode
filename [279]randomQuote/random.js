var currentQuote,currentAuthor;
$(document).ready(function(){
	getQuote();
});

function getQuote(){
	$.ajax({
		headers: {
      "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    },
		url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
		type: 'POST',
		dataType: 'json',
		success: function(response){
			console.log(response);
			//var r = JSON.parse(response);
			currentQuote = response.quote;
			currentAuthor = response.author;
			$(".quote").html(`<h2>“${response.quote}”</h2><p>——${response.author}</p>`);
		}
	});
}

function share(){
	openURL('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
}
function openURL(url){
  window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
}