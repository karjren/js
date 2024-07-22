function loadChatWidget() {
  var loadingDots = document.getElementById('loading-dots');
  var chatButton = document.getElementById('chatButton');
  var ChatTxt = document.getElementById('ChatTxt');
  var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
  chatButton.disabled = true;
  ChatTxt.style.display ='none';
  loadingDots.style.display = 'flex'; 
  
  window.Tawk_API = window.Tawk_API || {};
  window.Tawk_API.onLoad = function(){
    // Hide loading overlay when Tawk.to widget is fully loaded
   loadingDots.style.display = 'none';
   chatButton.style.display ='none'; 
  window.Tawk_API.maximize();
  };
  var s1=document.createElement("script"), s0=document.getElementsByTagName("script")[0];
  s1.async=true;
  s1.src='https://embed.tawk.to/6624889c1ec1082f04e521a6/1hrvbb96p';
  s1.charset='UTF-8';
  s1.setAttribute('crossorigin','*');
  s0.parentNode.insertBefore(s1, s0);
}
var isMobile = window.innerWidth <= 480;
var ChatBtnWrapperMble = document.getElementById('ChatBtnWrapperMble');
if (isMobile) {
     ChatBtnWrapper.remove();
     ChatBtnWrapperMble.style.display ='block';
}else{
     ChatBtnWrapperMble.remove();   
}