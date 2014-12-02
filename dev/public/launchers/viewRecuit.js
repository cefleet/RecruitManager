RM.Launcher.viewRecuit = function(into,data){

  RM.Launcher.newRecuit(into);
  //This could be handled differently
  $('#createRecuitForm').attr('id', 'viewRecuitForm');
  $('.btn').each(function(){
    if($(this).attr('l-action') === 'addRecuit'){
      $(this).attr('l-action', 'saveRecuit');
      $(this).html('Save recuits');
    }
  });
  var callback = function(recuit){
    var fields = {field:[]};
    for(var a in recuit){
      if($('#'+a+'_input').length){
        $('#'+a+'_input').val(recuit[a]);
      } else if(a === 'id'){
        fields.id = recuit[a];

      } else if(['createdAt','updatedAt','_'].indexOf(a) === -1){
        console.log(a);
        fields.field.push({
          name : a,
          title : a,
          cols : '6',
          id : a+'_input',
          value : recuit[a],
          placeholder : a
        });
      }
    }
    var html = RM.Views.view_recuit(fields);
    $('#viewRecuitForm').append(html);
  };

  $.ajax({
    type:'GET',
    url : RM.restAPI+'/recuit/'+data.id,
    contentType: 'application/json',
    success : function(recuit){
    callback(recuit);
    }
  });
};
