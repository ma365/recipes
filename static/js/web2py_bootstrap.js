// this code improves bootstrap menus and adds dropdown support
jQuery(function(){
jQuery('input[name="attachment"]:not(.processed)').multiUpload({
    mw_placeholder:"{{=T('upload files')}}",
    mw_text_addBtn:"+",
    mw_tooltip_addBtn:"{{=T('add a file')}}",
    mw_text_clearBtn:"x",
    mw_tooltip_clearBtn:"{{=T('remove all')}}",
    mw_tooltip_removeFileBtn:"{{=T('remove this file')}}",
    mw_tooltip_removeGroupBtn:"{{=T('remove this file group')}}",
    mw_group_title:"{{=T('FILE GROUP')}}",
    mw_fileNumber:false,mw_maxElementAllowed:5});
jQuery('#new_recipe textarea, #edit_recipe textarea').summernote({
  height: 300,                 // set editor height

  minHeight: null,             // set minimum height of editor
  maxHeight: null,             // set maximum height of editor

  focus: true,                 // set focus to editable area after initializing summernote
});   
  jQuery('.nav>li>a').each(function(){
    if(jQuery(this).parent().find('ul').length)
      jQuery(this).attr({'class':'dropdown-toggle','data-toggle':'dropdown'}).append('<b class="caret"></b>');
  });
  jQuery('.nav li li').each(function(){
    if(jQuery(this).find('ul').length)
      jQuery(this).addClass('dropdown-submenu');
  });
  function adjust_height_of_collapsed_nav() {
        var cn = jQuery('div.collapse');
        if (cn.get(0)) {
            var cnh = cn.get(0).style.height;
            if (cnh>'0px'){
                cn.css('height','auto');
            }
        }
  }
  function hoverMenu(){
    jQuery('ul.nav a.dropdown-toggle').parent().hover(function(){
        adjust_height_of_collapsed_nav();
        var mi = jQuery(this).addClass('open');
        mi.children('.dropdown-menu').stop(true, true).delay(200).fadeIn(400);
    }, function(){
        var mi = jQuery(this);
        mi.children('.dropdown-menu').stop(true, true).delay(200).fadeOut(function(){mi.removeClass('open')});
    });
  }
  hoverMenu(); // first page load
  jQuery(window).resize(hoverMenu); // on resize event
  jQuery('ul.nav li.dropdown a').click(function(){window.location=jQuery(this).attr('href');});
});
