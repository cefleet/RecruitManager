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
