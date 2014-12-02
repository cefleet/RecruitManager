RM.Actions = {};

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

RM.Actions.content = function(into){
  var callback = function(){
    console.log('content Launched');
  };

  RM.Launcher.launch(into,callback,'content');
};

RM.Actions.listRecuits = function(into,page){
  page = page || 1;
  RM.Launcher.launch(into,this._listRecuits,'listRecuit',{page:page});

};

RM.Actions._listRecuits = function(){

  //pagination
  $(document).undelegate('.pagination a','click');
  $(document).delegate('.pagination a','click', function(){
    $('#content').empty();
    var page = $(this).attr('ui-data');
    console.log(page);
    RM.Actions.listRecuits('content',page);
  });

  $(document).undelegate('.recuits tr','click');

  $(document).delegate('.recuits tr', 'click', function(){
    console.log(this);
    var id = $(this).attr('id');
    RM.Actions.viewRecuit('content',id);
  });

};

RM.Actions.mainMenu = function(into){
  RM.Launcher.launch(into,this._mainMenu,'mainMenu');
};

RM.Actions._mainMenu = function(){
  $('.navLink').on('click', function(){
    var action = $(this).attr('l-action');

    //we are going to fill up content from the navbar link clicks
    $('#content').empty();
    RM.Actions[action]('content');

    //TODO this possible could be handled via bootstrap
    $('.navLink').removeClass('active');
    $(this).addClass('active');
  });
};

RM.Actions.newRecuit = function(into){
  RM.Launcher.launch(into,this._newRecuit,'newRecuit');
};
RM.Actions._newRecuit = function(){
  $('#recuitForm .btn').on('click', function(){
    var action = $(this).attr('l-action');

    RM.Actions[action]();
  });
};

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

RM.Actions.viewRecuit = function(into,id){
  var data = {
    id : id
  };
  $('#'+into).empty();
  RM.Launcher.launch(into,this._viewRecuit,'viewRecuit', data);
};

RM.Actions._viewRecuit = function(){
  $('#recuitForm .btn').on('click', function(){
    var action = $(this).attr('l-action');
    RM.Actions[action]();
  });
};

//# sourceMappingURL=actions.js.map