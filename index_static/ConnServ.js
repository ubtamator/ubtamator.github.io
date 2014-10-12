/**
 * Created by lijianying on 14-10-4.
 */
var ConnServ = new Object();

ConnServ.tmpResponse = "not initial";
ConnServ.CallBackFunction=function(){console.log(
    "call back function set error ! U must set a business call back function!"
)};

//input only encrypt data!!!
ConnServ.send=function(data)
{
    data = data.replace(/\+/g,"$");  //replace all + as $
    $.ajax({
        type:"get",
        async:false,  // 设置同步通讯或者异步通讯
        url:"http://22500e31b5a12457.sinaapp.com/ubtamat?c="+data,
        dataType:"jsonp",
        jsonp: "jpc"
    });
    return "Send Finish";
}

function jpc(res)
{
    ConnServ.tmpResponse = res.msg;
    ConnServ.CallBackFunction();
}

ConnServ.getpublickey = function()
{
    return "\-" +
        "----BEGIN PUBLIC KEY----- " +
        "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDD+nGlscA5TCMPjKnKWB2SN3mF " +
        "YEz0zl2SrgiAGjdD48jXuBu41FHDBkBnlM/mvvmGrAY7aoevDCtJxv2gkLoQWNsT " +
        "DHgHmPhx3VkvkOJTmrxr7tIZo0ewk6mDNvygvCBlfWMbC/otdqZ9mZzrw7cGVdQW " +
        "L7kwxrrqkoRL36NzKwIDAQAB " +
        "-----END PUBLIC KEY-----";
}