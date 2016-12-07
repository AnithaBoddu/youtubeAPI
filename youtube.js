var YOUTUBE_BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

function getDataFromApi(searchTerm, callback) {
  var query = {
    part: 'snippet',
    key:'AIzaSyCwirnmyq1SH7hLjbH1uJ-WOhJUF6gx8aI',
    q: searchTerm
  }
  $.getJSON(YOUTUBE_BASE_URL, query, callback);
}


function displayOMDBSearchData(data) {
  var resultElement = '';
  console.log(data);
 
  if (data.items) {
    data.items.forEach(function(item) {
  
     resultElement += '<a href="https://www.youtube.com/watch?v='+item.id.videoId +'"> <img src="' + item.snippet.thumbnails.medium.url + '"></a>';
    });
  }
  else {
    resultElement += '<p>No results</p>';
  }
  
  $('.js-search-results').html(resultElement);
}

function watchSubmit() {
  $('.js-search-form').submit(function(e) {
    e.preventDefault();
    var query = $(this).find('.js-query').val();
    getDataFromApi(query, displayOMDBSearchData);
  });
}

$(function(){watchSubmit();});

