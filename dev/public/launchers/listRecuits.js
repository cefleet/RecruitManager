RM.Launcher.listRecuit = function(into,options){
  var count,reqOptions,tp,pages;
  options = options || {};
  var page = options.page || 1;
  var limit = options.limit || 12;

  var callback = function(data){
    pages = [];

    tp = Math.ceil(data.count/limit);

    //This is if there is up to 5
    if(tp <= 5){
      var i = 1;
      while(i <= tp){
        var o = {
          active : false,
          page : i
        };
        if(i == page){
          o.active = true;
        }
        pages.push(o);
        i++;
      }
    }

    //disable previous or not
    var previous = {disabled : false};
    if((page-1) <= 0){
      previous  = { disabled : true };
    }

    //disable next or not
    var next = {disabled : false};
    if((page+1) >= tp){
      next  = { disabled : true };
    }

    recuits = {
      recuit : data.recuits,
      pagination : {
        total : data.count,
        prevPage : page-1,
        nextPage : page+1,
        pages : pages,
        previous : previous,
        next : next
      }
    };
    var html = RM.Views.list_recuits(recuits);
    $('#'+into).append(html);
  };


  $.get(RM.restAPI+'/recuit/count', function(count){

    count = JSON.parse(count).count;
    reqOptions = {
      limit : limit,
      skip : (page-1)*limit
    };

    $.ajax({
      type:'GET',
      url : RM.restAPI+'/recuit/find',
      data:reqOptions,
      dataType: 'json',
      contentType: 'application/json',
      success : function(data){
        callback({recuits : data,count : count});
      }
    });
  });
};
