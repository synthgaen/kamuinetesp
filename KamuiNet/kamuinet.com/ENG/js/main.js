$(function () {
    var wH = $(window).height();
    var centerMenu = $("#centerMenu");
    var topMenu = $(".menuSize");

    centerMenu.css("margin-top", (wH / 2 - topMenu.height()) - centerMenu.height() / 2);


    //Center when rezise window
    $(window).resize(function () {
        wH = $(window).height();
        centerMenu.css("margin-top", (wH / 2 - topMenu.height()) - centerMenu.height() / 2);
    });


    //Modal Gif
    $('.thumbnail').click(function(){
        $('.thumbs').find("img").each(function(){
            $(this).attr("src", "../gallery/placeholder.jpg");
        });
        
        $(this).find("img").attr("src" , "../gallery/"+$(this).data('gif')+".gif");
    })
    
    //Load news file
    var fileExt = ".txt";
    $.ajax({
        //This will retrieve the contents of the folder if the folder is configured as 'browsable'
        url: '../news/',
        success: function (data) {
            $(data).find("a:contains(" + fileExt + ")").each(function () {
                //var news = ($(this).text().trim();
                var news = $.trim($(this).text());
                 $.get("../news/"+news,function(data){
                     $(".saying").append("<div class='new'>"+data+"</div>");
                 });
                /*
                $(".saying").append($("<div class='new'>").load("../news/" + $(this).text())).append("<br><img src='../img/lineLightYellow.png' height='20px' width='220px'>");*/
            });

        }
    });


});