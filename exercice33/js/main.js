$(".btn").click(function(){
    $.ajax({
        url : "https://restcountries.com/v3.1/name/france",
        success: function(data,status,response){
         $("#country").html(data[0].name.common ).toggle()
         $("#capital").html(data[0].capital).toggle()
        }
    })
})