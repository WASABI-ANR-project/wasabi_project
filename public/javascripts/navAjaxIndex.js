$(document).ready(function() {
    //var page = $('#nav li a:first').text(); // par défaut c'est Index
    // au clic sur un lien du menu

//    $('[id^=alphabet_]>li>a').click(function(e) {//alphabet_Artist
//        e.preventDefault();
//        var url = $(this).attr('href'); // on récupère le href
//        console.log("url avant ajax = "+url);
//
//        $.getJSON(url,function(data){
//            console.log(data);
//            
//            var content = "";
//            $.each(data, function(i,data){
//                content += '<p>' + data.name+ '</p>';
//            });
//            $("#loadContent").html(content);
//
//        });
////        $.get(url, function(data, status){
////            console.log(data);
////            $('#loadContent').html(data[0].name);
////            if(url!=window.location){
////                console.log("pushState");
////                window.history.pushState({path:url},'',url);
////            }
////        }).fail(function() {
////            console.error('error ' + status);
////        });
//    });
    

    
    
//    $(window).bind('popstate', function() {
//        $.ajax({url:location.pathname,success: function(data){
//            console.log("Popstat");
//            $('#loadContent').html(data);
//        }});
//    });

    
    
    //Au clic sur un le bouton
    $('#btn_chercherLyricsWikia').click(function(e) {

        console.log("btn_chercherLyricsWikia");             
            // chargement dans la div
            $.ajax({
                url: "/chercherLyricsWikia",
                cache: false
            });
        
        return false;
    });
});