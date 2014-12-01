RM.Launcher.listRecuit = function(into){
  var page = 1;
  var limit = 10;
  var callback = function(data){
    //TODO some logic for pagination
    recuits = {
      recuit : data,
      pagination : {
        prevPage : 0,
        nextPage : 2,
        pages : [{page:1, active : true},{page:2},{page:3},{page:4},{page:5}],
        previous : {
          disabled : true
        },
        next : {
          disabled : false
        }
      }
    };
    var html = RM.Views.list_recuits(recuits);
    $('#'+into).append(html);
  };

  var data = {
    limit : limit,
    skip : page*limit
  };

  $.ajax({
    type:'GET',
    url : RM.restAPI+'/recuit/find',
    data:data,
    dataType: 'json',
    contentType: 'application/json',
    success : function(data){
      callback(data);
    }
  });

};

RM.Launcher._listRecuit = function(){

};
