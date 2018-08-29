/* Показать/скрыть субменю в боковой навигации по каталогам */
	$(document).on('click', '.js-show-subcollections', function(e){
      var collection_url = $(this).prev().attr('href');
      var menu_this = $(this);
      if(menu_this.hasClass('opened')){
        menu_this.removeClass('opened');
        menu_this.parent().removeClass('opened');
        menu_this.parent().next().removeClass('opened');
      }else{
        menu_this.addClass('opened');
        menu_this.parent().addClass('opened');
        menu_this.parent().next().addClass('opened');
        menu_this.parent().next().html('<div class="loadAjax"></div>')
        var jqxhr = $.get(collection_url, function() {
          menu_this.parent().next().html($(jqxhr.responseText).find('.sidebar-menu').find('[href="'+ collection_url +'"]').parent().next().html())
        });
      }
    });