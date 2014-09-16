/**
 * Created by lijianying on 14-9-16.
 */
load_normal_face_items();
function load_normal_face_items()
{
    for(var i =0 ; i < 170; i++)
    {
        $('#normal_face_items').append("<li class='face_li'><img onclick='item_onclick(this)' src='http://pub.idqqimg.com/lib/qqface/" +
            String(i+1)+
            ".gif'></li>");
    }

}