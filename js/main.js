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
  $(".play").click(function() {
    $.fancybox({

    padding: 0,
        'autoScale'     : false,
        'transitionIn'  : 'none',
        'transitionOut' : 'none',
        'title'         : this.title,
        'width'         : 795,
        'height'        : 447,
        'href'          : this.href.replace(new RegExp("watch.*v=","i"), "v/"),
        'type'          : 'swf',
        'swf'           : {
        'wmode'             : 'transparent',
        'allowfullscreen'   : 'true'
         }

    });
    return false;
});
});
