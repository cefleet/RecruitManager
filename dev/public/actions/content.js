RM.Actions.content = function(into){
  var callback = function(){
    console.log('content Launched');
  };

  RM.Launcher.launch(into,callback,'content');
};
