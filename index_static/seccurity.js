/**
 * Created by lijianying on 14-10-4.
 */
var security = new Object;

security.generateKey =function()
{
    var crypt = new JSEncrypt({default_key_size: 1024});  //RSA 操作对象
    SetCookie("LocalPub",crypt.getPublicKey());
    SetCookie("LocalPry",crypt.getKey());
}

security.encrypt_data = function(publickey,data)
{
    if(data.length> 2691){return;} // length limit
    var crypt = new JSEncrypt();
    crypt.setPublicKey(publickey);
    crypt_res = "";
    for(var index=0; index < (data.length - data.length%117)/117+1 ; index++)
    {
        var subdata = data.substr(index * 117,117);
        crypt_res += crypt.encrypt(subdata);
    }
    return crypt_res;
}

security.decrypt_data= function(privatekey,data)
{
    var crypt = new JSEncrypt();
    crypt.setPrivateKey(privatekey);
    datas=data.split('=');
    var decrypt_res="";
    datas.forEach(function(item)
    {
        if(item!=""){de_res += crypt.decrypt(item);}
    });
    return decrypt_res;
}

security.auth = Object;

security.auth.login =  function(User,PWD)
{
    var o_login = Object;

}

security.auth.register = function(User,PWD)
{
    //constructure data package
    var o_reg = new Object;
    o_reg.action = "register";
    o_reg.req_time = get_server_time();
    o_reg.User = User;
    o_reg.PWD = md5(PWD);
//    o_reg.RsaKey = getCookie("LocalPub");

    //encrypt data
    var tmp = security.encrypt_data(ConnServ.getpublickey(),JSON.stringify(o_reg));
    console.log(tmp);
    //register call back function
    ConnServ.CallBackFunction = security.auth.register.callback;
    //send to server
    tmp = ConnServ.send(tmp);
    console.log(tmp);
}
security.auth.register.callback = function(){
    console.log("auth call back invoke\n");
    console.log(ConnServ.tmpResponse);
}