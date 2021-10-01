$(document).ready(function(){
    $('#search-btn').click(function(){
        $('#error-message').empty();
        $('.weather').empty();
        $('.temp').empty();
        $('.icon').empty();
        $('#error-msg').empty();
        let searchInputValue = $('#search-input').val();
        if(searchInputValue != ''){
            makeRequest(searchInputValue)
        }else {
            let errorMsg = $('<p>search input is empty</p>')
            $('#error-msg').append(errorMsg)
        }
    })
})
function makeRequest(data){
    let tenorRequest = new XMLHttpRequest();
    let APILink = 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=d002cef86d12bb0c1c17defbb046f35d&q='+data
    tenorRequest.open('GET', APILink);
    tenorRequest.responseType = 'json';
    tenorRequest.onreadystatechange = function() {
        if(tenorRequest.readyState === 4 && tenorRequest.status === 200){
            let resultsData = tenorRequest.response;
            printData(resultsData)
        }
    }
    tenorRequest.send();
}
function printData (result){

    console.log(result)

    var icon = "https://openweathermap.org/img/w/" + result.weather [0].icon + ".png";

        var temp = Math.floor(result.main.temp);
    
        var weather = result.weather[0].main;
    
        $('.icon').attr('src', icon);
    
        $('.weather').append(weather);
    
        $('.temp').append(temp);
    
}


