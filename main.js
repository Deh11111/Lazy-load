/* $(function(){
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
                    $('#loadMore').text('Load more').off('click')
                })
            } 
        })

}) */

$(function(){
    let content = $('.content')
    $('.content:hidden').slice(0,4).show()
    $('#loadMore').on('click',SlideVniz);

    function SlideVniz(e){
        /* e.preventDefault()  */
        $('.content:hidden').slice(0,4).slideDown(500);
        console.log('Visible:',$('.content:visible'))
        console.log('HIDDEN:',$('.content:hidden'))
            if($('.content:hidden').length == 0){
                $('#loadMore').off('click')
                $('#loadMore').text('Go Up Friend').on('click',function(){
                    $('.content:visible').slice(4,content.length).slideUp(500);
                    $('#loadMore').off('click')
                    $('#loadMore').text('Load more').on('click',SlideVniz)
                })
            } 
        
    }
})