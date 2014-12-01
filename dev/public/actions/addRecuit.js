RM.Actions.addRecuit = function(){
  var data = {};
  $('#createRecuitForm :input').each(function(){
    data[$(this).attr('name')] = $(this).val();
  });

  var callback = function(data){
    if(typeof data === 'string'){
      data = JSON.parse(data);
    }
    console.log(data);

    //todo goto list
  };

  $.ajax({
    type:'POST',
    url : RM.restAPI+'/recuit/create',
    data:data,
    dataType: 'jsonp',
    contentType: 'application/json',
    success : function(data){
      callback(data);
    }
  });
};
//collect information
