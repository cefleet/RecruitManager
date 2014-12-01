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

RM.Actions.content = function(into){
  var callback = function(){
    console.log('content Launched');
  };

  RM.Launcher.launch(into,callback,'content');
};

RM.Actions.listRecuits = function(into){

  RM.Launcher.launch(into,this._listRecuit,'listRecuit');

};

RM.Actions._listRecuits = function(){

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
  $('#createRecuitForm .btn').on('click', function(){
    var action = $(this).attr('l-action');

    RM.Actions[action]();
  });
};


//# sourceMappingURL=actions.js.map