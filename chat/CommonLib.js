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

function SetCookie_hour(name,value,hour)//两个参数，一个是cookie的名子，一个是值
{
    var exp = new Date();    //new Date("December 31, 9998");
    exp.setTime(exp.getTime() + hour*60*60*1000);
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
    $('.MathJax').mousedown(function(e)
    {
        var offset = $(this).offset();
        divLeft = parseInt(offset.left,10);
        divTop = parseInt(offset.top,10);
        mousey = e.pageY;
        mousex = e.pageX;
        $('.MathJax').bind('mousemove',dragElement);
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
        $('.MathJax').unbind('mousemove');
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

function input_ask()
{
    var md = "#[提问]" +
        "";
}

var usermod = new Object();
usermod.register = function(email,password)
{
    auth.createUser(email, password, function(error, user) {
        if (error === null) {
            console.log("User created successfully:", user);
        } else {
            console.log("Error creating user:", error);
        }
    });
}
usermod.login = function(email,password)
{
    auth.login('password', {
        email: email,
        password: password,
        rememberMe: true
    });
}


//user define time format
Date.prototype.Format = function(fmt)
{ //author: meizz
    var o = {
        "M+" : this.getMonth()+1,                 //月份
        "d+" : this.getDate(),                    //日
        "h+" : this.getHours(),                   //小时
        "m+" : this.getMinutes(),                 //分
        "s+" : this.getSeconds(),                 //秒
        "q+" : Math.floor((this.getMonth()+3)/3), //季度
        "S"  : this.getMilliseconds()             //毫秒
    };
    if(/(y+)/.test(fmt))
        fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
    for(var k in o)
        if(new RegExp("("+ k +")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
    return fmt;
}

function get_server_time(){
    var xmlHttp = false;
    try {
        xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
        try {
            xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (e2) {
            xmlHttp = false;
        }
    }

    if (!xmlHttp && typeof XMLHttpRequest != 'undefined') {
        xmlHttp = new XMLHttpRequest();
    }

    xmlHttp.open("GET", window.location.href.toString(), false);
    xmlHttp.setRequestHeader("If-None-Match", "bytes=-1");
    xmlHttp.setRequestHeader("Cache-Control","no-cache");
    xmlHttp.send(null);
    var d = new Date(xmlHttp.getResponseHeader("Date"));
    return d.Format("yyyy-MM-dd hh:mm:ss");
}

//uuid
(function() {
    // Private array of chars to use
    var CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');

    Math.uuid = function (len, radix) {
        var chars = CHARS, uuid = [], i;
        radix = radix || chars.length;

        if (len) {
            // Compact form
            for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random()*radix];
        } else {
            // rfc4122, version 4 form
            var r;

            // rfc4122 requires these characters
            uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
            uuid[14] = '4';

            // Fill in random data.  At i==19 set the high bits of clock sequence as
            // per rfc4122, sec. 4.1.5
            for (i = 0; i < 36; i++) {
                if (!uuid[i]) {
                    r = 0 | Math.random()*16;
                    uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
                }
            }
        }

        return uuid.join('');
    };

    // A more performant, but slightly bulkier, RFC4122v4 solution.  We boost performance
    // by minimizing calls to random()
    Math.uuidFast = function() {
        var chars = CHARS, uuid = new Array(36), rnd=0, r;
        for (var i = 0; i < 36; i++) {
            if (i==8 || i==13 ||  i==18 || i==23) {
                uuid[i] = '-';
            } else if (i==14) {
                uuid[i] = '4';
            } else {
                if (rnd <= 0x02) rnd = 0x2000000 + (Math.random()*0x1000000)|0;
                r = rnd & 0xf;
                rnd = rnd >> 4;
                uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
            }
        }
        return uuid.join('');
    };

    // A more compact, but less performant, RFC4122v4 solution:
    Math.uuidCompact = function() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
            return v.toString(16);
        });
    };
})();

