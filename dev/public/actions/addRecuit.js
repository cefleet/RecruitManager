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

  };

  $.ajax({
    type:'POST',
    url : RM.restAPI+'/recuit/create',
    data:JSON.stringify(data),
    contentType: 'application/json',
    success : function(data){
      callback(data);
    }
  });
};
//collect information
