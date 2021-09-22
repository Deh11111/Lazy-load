$(function(){
    let content = $('.content');
    content.slice(0,4).show();
        $('#loadMore').on('click',function(e){
            e.preventDefault()
            console.log($('.content:visible'))
            $('.content:hidden').slice(0,4).slideDown(500);
            if($('.content:visible').length > 12){
                $('#loadMore').off('click');
                $('#loadMore').text('Вы хотите выше').on('click',function(){
                    $('.content:visible').slice(4,content.length).slideUp(500)
                    $('#loadMore').text('Load more')
                })
            } 
        })

        function SlideVniz(){
            e.preventDefault()
            $('.content:hidden').slice(0,4).slideDown(500);
        }
})
/* 
$(function(){
    let content = $('.content')
    $('.content:hidden').slice(0,4).show()
    $('#loadMore').on('click',SlideVniz);

    function SlideVniz(e){
        e.preventDefault() 
        console.log('Visible:',$('.content:visible'))
        console.log('HIDDEN:',$('.content:hidden'))
        if($('.content:visible').length >= 4){
            $('.content:hidden').slice(0,4).slideDown(500);
        }

        if($('.content:visible').length >= 12){
            $('#loadMore').text("Вы хотите выше ?").on('click',function(){
                $('.content:visible').slice(4,content.length).slideUp(500)
            })
        }
    }
}) */