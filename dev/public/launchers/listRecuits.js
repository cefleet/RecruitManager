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
