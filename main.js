$(function(){
    let content = $('.content');
    console.log($('.content:hidden'))
    content.slice(0,4).show();
        $('#loadMore').on('click',function(e){
            e.preventDefault()
            $('.content:hidden').slice(0,4).slideDown(500);
            if($('.content:hidden').length < 1 ){
                $('#loadMore').off('click');
                $('#loadMore').text('Вы хотите выше').on('click',function(){
                    $('.content:visible').slice(4,content.length).slideUp(500)
                })
            } 
        })
})

