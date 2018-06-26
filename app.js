


var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=xYMqxy9QyoFqeXmalxJ16oYkzIgZNmwA&limit=10");
xhr.done(function(data) { console.log("success got data", data); });