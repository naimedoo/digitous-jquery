$(document).ready(function(){
    $(".btn").click(function(){
        console.log($("input").val().length)
        if($("input").val().length > 5) {
            $("input").addClass("is-valid")
        } else 
        $("inpput").addClass("is-invalid")
    })     
    consoleLog(input)
})