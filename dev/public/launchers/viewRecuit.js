RM.Launcher.viewRecuit = function(into,data){

  $.ajax({
    type:'GET',
    url : RM.restAPI+'/recuit/'+data.id,
    contentType: 'application/json',
    success : function(data){
    //  callback(data);
    console.log(data);
    }
  });

  //$('#'+into).append(html);
};
