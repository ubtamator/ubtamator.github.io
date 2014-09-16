/**
 * Created by lijianying on 14-9-16.
 */
function item_onclick(item)
{
    console.log(item);
    var inserttext = "![]("+item.attributes["src"].value+")";
    console.log(inserttext);
    $('#messageInput').val($('#messageInput').val()+inserttext);
}

function face_form_switch()
{
    if(form_face.style.display == "none")
    {
        form_face.style.display="";
    }
    else
    {
        form_face.style.display="none";
    }
}