RM.Actions.newRecuit = function(into){
  RM.Launcher.launch(into,this._newRecuit,'newRecuit');
};
RM.Actions._newRecuit = function(){
  $('#recuitForm .btn').on('click', function(){
    var action = $(this).attr('l-action');

    RM.Actions[action]();
  });
};
