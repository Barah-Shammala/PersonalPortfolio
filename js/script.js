
const nav = document.querySelector('.navgation');
const menuBar = document.querySelector('#icon-bar');
const menuClose = document.querySelector('.close');
menuBar.onclick = ()=>{
    nav.classList.add("active");
    menuBar.classList.add("hide");
}
menuClose.onclick = ()=>{
    nav.classList.remove("active");
    menuBar.classList.remove("hide");
}
$(function(){
    $('.skill-per').each(function(){
        var $this = $(this);
        var per = $this.attr('per');
        $this.css('width' , per + '%');
    });
    $('.navgation a').click(function(){
        var myId = $(this).attr('id');
        $('body section').hide();
        $('.' + myId).show();
    });
    $('.last-works div').hide();
    $('.btn-all').click(function(){
        $('.last-works div').fadeIn();
    })
});
