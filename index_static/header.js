!function(){function getQueryParameterValue(name){var parameters={}
return location.search.substr(1).split("&").forEach(function(parameter){parameters[parameter.split("=")[0]]=parameter.split("=")[1]
}),parameters[name]}function getCookie(cname){for(var name=cname+"=",ca=document.cookie.split(";"),i=0;i<ca.length;i++){for(var c=ca[i];" "==c.charAt(0);)c=c.substring(1)
if(c.indexOf(name)!=-1)return c.substring(name.length,c.length)}return""}function setCookie(cname,cvalue,exdays){var d=new Date
d.setTime(d.getTime()+24*exdays*60*60*1e3)
var expires="expires="+d.toUTCString()
document.cookie=cname+"="+cvalue+"; "+expires}var data=document.getElementById("page-data").dataset
window.analytics=window.analytics||[],window.analytics.methods=["identify","group","track","page","pageview","alias","ready","on","once","off","trackLink","trackForm","trackClick","trackSubmit"],window.analytics.factory=function(t){return function(){var a=Array.prototype.slice.call(arguments)
return a.unshift(t),window.analytics.push(a),window.analytics}}
for(var i=0;i<window.analytics.methods.length;i++){var key=window.analytics.methods[i]
window.analytics[key]=window.analytics.factory(key)}window.analytics.load=function(t){if(!document.getElementById("analytics-js")){var a=document.createElement("script")
a.type="text/javascript",a.id="analytics-js",a.async=!0,a.src=("https:"===document.location.protocol?"https://":"http://")+"cdn.segment.io/analytics.js/v1/"+t+"/analytics.min.js"
var n=document.getElementsByTagName("script")[0]
n.parentNode.insertBefore(a,n)}},window.analytics.SNIPPET_VERSION="2.0.9",window.analytics.load(data.segmentioKey),window.analyticsOptions={providers:{All:!0,Optimizely:!1,"Customer.io":!1}},!function(t,e){if(void 0===e[t]){e[t]=function(){e[t].clients.push(this),this._init=[Array.prototype.slice.call(arguments)]
},e[t].clients=[]
for(var r=function(t){return function(){return this["_"+t]=this["_"+t]||[],this["_"+t].push(Array.prototype.slice.call(arguments)),this
}},s=["addRecord","set","trackEvent","trackPageview","ready"],n=0;n<s.length;n++){var i=s[n]
e[t].prototype[i]=r(i)}var a=document.createElement("script")
a.type="text/javascript",a.async=!0,a.src=("https:"===document.location.protocol?"https:":"http:")+"//s3.amazonaws.com/td-cdn/sdk/td-1.1.1.js"
var c=document.getElementsByTagName("script")[0]
c.parentNode.insertBefore(a,c)}}("Treasure",this)
var tdDb=data.treasureDataDb,tdWriteKey=data.treasureDataKey,td=new Treasure({writeKey:tdWriteKey,database:tdDb})
if(window.analytics.on("identify",function(userId,properties){properties||(properties={}),properties.uid=userId,properties.event="Identify",td.trackEvent("user_logs",properties)
}),window.analytics.on("alias",function(userId,previousId){td.trackEvent("alias_logs",{uid:userId,previousId:previousId,event:"Alias"})
}),window.analytics.on("page",function(){td.trackPageview("pageviews")}),window.analytics.on("track",function(event,properties){properties||(properties={}),properties.event=event,td.trackEvent("event_logs",properties)
}),window.analytics.page(),window.analytics.ready(function(){if(window.mixpanel){var anonId=window.mixpanel.get_distinct_id()
window.mixpanelAnonymousId=anonId}}),window.analytics.ready(function(){if(window.KM){var anonIdentity=window.KM.i()
window.kissMetricsAnonymousId=anonIdentity}}),""===data.userId){var uid=getQueryParameterValue("uid")
data.userId=uid?uid:""}window.c9ApiUrl=data.apiUrl
var user={uid:data.userId,email:data.userEmail,username:data.userUsername,premium:"true"==data.userPremium,firstName:data.userFirstName,lastName:data.userLastName,name:data.userName,created:parseInt(data.userCreated,10)}
user&&(window.user=user,window.analytics.identify(user.uid,user))
var cookieParam="c9_site",lastView=getCookie(cookieParam)
if(""===lastView||new Date(parseInt(lastView,10)).getDate()!=(new Date).getDate()){var trackOptions={returningVisitor:!1,loggedIn:!1}
user&&user.uid&&(trackOptions.returningVisitor=!0,trackOptions.loggedIn=!0)
var visits=getCookie("__utma").split(".").pop()
trackOptions.numVisits=visits?visits:0,visits>1&&(trackOptions.returningVisitor=!0),window.analytics.track("Viewed Cloud9 website",trackOptions),setCookie(cookieParam,Date.now(),1)
}window.trackLink=function(link,name,properties,options){function end(){var href=$(link).attr("href")
href&&(window.top.location.href=href)}$(link).click(function(event){event.preventDefault(),options=options?options:window.analyticsOptions
var redirect=setTimeout(function(){end()},500)
window.analytics.track(name,properties,options,function(){clearTimeout(redirect),redirect=null,end()})
})}}()

