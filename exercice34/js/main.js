$(".btn").click(function(){
    $.ajax({
        url : "https://restcountries.com/v3.1/name/" + $("input").val(),
        success: function(data,status,response){
         $("#country").html(data[0].name.common ).val()
         $("#capital").html(data[0].capital).val()
        }
    })
})