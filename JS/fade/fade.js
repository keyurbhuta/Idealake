$(document).ready(function(){
    $('#fadeOutBtn').click(function(){
        $('#box').fadeOut(3000, function(){
            console.log("Now it is Hidden");
        })
    })
    $('#fadeInBtn').click(function(){
        $('#box').fadeIn(3000, function(){
            console.log("Now it is Hidden");
        });
    });
    $('#fadeToggleBtn').click(function(){
        $('#box').fadeToggle(3000, function(){
            console.log("Now it is toggling");
        });
    });
});