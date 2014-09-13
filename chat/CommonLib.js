/**
 * Created by lijianying on 14-9-9.
 */
function byid(id)
{return document.getElementById(id);}



function SetCookie(name,value)//两个参数，一个是cookie的名子，一个是值
{
    var Days = 30; //此 cookie 将被保存 30 天
    var exp = new Date();    //new Date("December 31, 9998");
    exp.setTime(exp.getTime() + Days*24*60*60*1000);
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}

function getCookie(name)//取cookies函数
{
    var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
    if(arr != null) return unescape(arr[2]); return null;
}

function delCookie(name)//删除cookie
{
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval=getCookie(name);
    if(cval!=null) document.cookie= name + "="+cval+";expires="+exp.toGMTString();
}


///auto adjest window

window.onresize=function(){autoadjestreader();};


function autoadjestreader()
{
    byid('example-messages').style.height=window.innerHeight-160+'px';
}

function Reject_injection(input)
{
    for (var index = 0 ; index < input.length ; index++)
    {
        if(input[index] == '<')
        {
            input[index] = "&lt;";
        }
        if(input[index] == '>')
        {
            input[index] = "&gt;";
        }
    }
    return input;
}

//for drag
$(document).ready(function ()
{
    var mousex = 0, mousey = 0;
    var divLeft, divTop;
    $('.dragAble').mousedown(function(e)
    {
        var offset = $(this).offset();
        divLeft = parseInt(offset.left,10);
        divTop = parseInt(offset.top,10);
        mousey = e.pageY;
        mousex = e.pageX;
        $('.dragAble').bind('mousemove',dragElement);
    });

    function dragElement(event)
    {
        var left = divLeft + (event.pageX - mousex);
        var top = divTop + (event.pageY - mousey);
        $(this).css(
            {
                'top' :  top + 'px',
                'left' : left + 'px',
                'position' : 'absolute'
            });
        return false;
    }
    $(document).mouseup(function()
    {
        $('.dragAble').unbind('mousemove');
    });

});

function Check_User_input()
{
    if((getCookie("ChatUA")=="")&&(nameField.val()==""))
    {
        var forma = $.remodal.lookup[$('[data-remodal-id=Need_user_name]').data('remodal')];
        forma.open();
        return false;
    }
    else
    {
        return true;
    }
}