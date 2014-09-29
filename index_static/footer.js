!function(){var data=document.getElementById("page-data").dataset,pageName=data.pageName?data.pageName:"",pageProperties=data.pageProperties?JSON.parse(data.pageProperties):{},pageViewOptions={providers:{All:!1,"Google Analytics":!0,Mixpanel:!0}}
analytics.page("Cloud9",pageName,pageProperties,pageViewOptions),$(function(){trackLink("#signUpFooter","Clicked Sign Up link",{label:"footer"},analyticsOptions)
})}()

