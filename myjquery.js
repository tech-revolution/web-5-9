console.log("jQuery")


// $(selector).action()


$(document).ready(function(){
    // Element Selector
    // $('#btn1').click(function(){
    //     $('p').hide()
    // })
    // $('#btn2').click(function(){
    //     $('p').show()
    // })
    // $('p').click(function(){
    //     $(this).hide();
    // })
    // $('button').click(function(){
    //     $('p').toggle();
    // })
    // $('#clickdiv').click(function(){
    //     // $('#details').slideDown()
    //     // $('#details').slideUp()
    //     $('#details').slideToggle()
    // })
    $('#button1').click(function(){
        $('#div3').animate({
            left:'200px',
            height:'+=150px',
            width:'+=150px'
        })
    })
    $('#button2').click(function(){
        $('#div3').animate({
            left:'200px',
            height:'-=150px',
            width:'-=150px'
        })
    })


})