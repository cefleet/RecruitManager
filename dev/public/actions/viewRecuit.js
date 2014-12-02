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
