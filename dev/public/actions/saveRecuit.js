RM.Actions.saveRecuit = function(){
  var data = {};
  $('#viewRecuitForm :input').each(function(){
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
      message : name+' was saved to the database.'
    });
  };

  $.ajax({
    type:'PUT',
    url : RM.restAPI+'/recuit/update/'+data.id,
    data:JSON.stringify(data),
    contentType: 'application/json',
    success : function(data){
      callback(data);
    }
  });
};
