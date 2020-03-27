// js начинает работатать после загрузки страницы
$(document).ready(function () {
  let tabsItem = $('.tabs-item');
  console.log(tabsItem);
  
  tabsItem.on('click', function(event){
    event.preventDefault(); //отмена стандартного клика по элемнту
    let activeContent = $(this).attr('href'); // activeContent=id нужного элемента (#about )
    $('.visible').toggleClass('visible');
    $(activeContent).toggleClass('visible');
    $('.tabs-item-active').toggleClass('tabs-item-active');
    $(this).toggleClass('tabs-item-active');

  });
  $("a.play").fancybox({
      'titleShow'     : false,
      'transitionIn'  : 'elastic',
      'transitionOut' : 'elastic',
      'href' : this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
      'type'      : 'swf',
      'swf'       : {'wmode':'transparent','allowfullscreen':'true'}
    }); 
});
