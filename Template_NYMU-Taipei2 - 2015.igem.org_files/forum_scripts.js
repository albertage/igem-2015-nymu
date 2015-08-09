function forum_onpage(name) {
    if ( name == null ) name='';
    var onpage_div_id ='forum_onpage_id_' + jQuery('.forum_onpage_div').length;
    var text = "\n<DIV id='" + onpage_div_id + "' class='forum_onpage_div forum_container'></DIV><";
    text += "script>jQuery('#" + onpage_div_id + "').load('/forum/load_reply.cgi',{n:'"+name+"',s:0,cd:'comments'});</";
    text += "script>";
    document.write(text);
    return false;
}
function forum_subtle(name) {
    if ( name == null ) name='';
    var onpage_div_id ='forum_onpage_id_' + jQuery('.forum_onpage_div').length;
    var text = "\n<DIV id='" + onpage_div_id + "' class='forum_onpage_div forum_container'></DIV><";
    text += "script>jQuery('#" + onpage_div_id + "').load('/forum/load_reply.cgi',{n:'"+name+"',s:0,cd:'subtle'});</";
    text += "script>";
    document.write(text);
    return false;
}
function forum_footer(name, type) {
    if ( name == null ) name='';
    var onpage_div_id ='forum_onpage_id_' + jQuery('.forum_onpage_div').length;
    var text = "\n<DIV id='" + onpage_div_id + "' class='forum_onpage_div forum_container forum_footer_div'></DIV><";
    text += "script>jQuery('#" + onpage_div_id + "').load('/forum/load_reply.cgi',{n:'"+name+"',s:0,cd:'comments'});</";
    text += "script>";
    document.write(text);
    return false;
}

function show_new_div(caller) { 
        var container = jQuery(caller).parents('.forum_container');
        container.find('.new_item_div').slideDown('fast');
        container.find('.new_item_control').hide();
        container.find('.new_item_div .content textarea').focus();
        return false;
}
function hide_new_div(caller) { 
        var container = jQuery(caller).parents('.forum_container');
        container.find('.new_item_div').slideUp('fast');
        container.find('.new_item_control').show();
}

