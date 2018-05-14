$( document ).ready(function() {


var userFeed = new Instafeed({
get: 'user',
userId: '4059869935',
limit :4,
resolution: 'standard_resolution',
accessToken: '4059869935.1677ed0.811e3968acc54fb98030781eb379ae1c',
sortBy: 'most-recent',
template: '<div class="col-lg-3 gallery instaimg"><a href="{{link}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
});
userFeed.run();





// This will create a single gallery from all elements that have class "gallery-item"
$('.gallery').magnificPopup({
    type: 'image',
    delegate: 'a',
    gallery:{
      enabled:true
    }
  });


});
