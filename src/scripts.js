var $ = require('jquery');


$('form').submit(function(event){
    var regEmail = $('#regEmail').val(); // receiving the email id from the html page id='regEmail'
    

    event.preventDefault();
    $.ajax({
        url: '/',
        type: 'POST',
        data: {
            email: regEmail
        },
        success: function(response){
            console.log(response);
        }
    });
});
