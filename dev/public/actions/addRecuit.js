RM.Actions.addRecuit = function(){
  var data = {};
  $('#createRecuitForm :input').each(function(){
    data[$(this).attr('name')] = $(this).val();
  });

  console.log(data);

  $.post('save_recuit',data);
};
//collect information
