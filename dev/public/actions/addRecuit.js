RM.Actions.addRecuit = function(){
  var data = {};
  $('#createRecuitForm :input').each(function(){
    data[$(this).attr('name')] = $(this).val();
  });

  var callback = function(data){
    if(typeof data === 'string'){
      data = JSON.parse(data);
    }
    //TODO save msg
    var name;
    if(data.name){
      name = data.name;
    } else {
      name = data.first_name+' '+data.last_name;
    }
    var msg = RM.Views.server_msg({
      id : 'recuitSaved',
      message : name+' was saved to the server'
    });
    $(document.body).append(msg);

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
