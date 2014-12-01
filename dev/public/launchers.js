RM.Launcher = {
  launch : function(into,callback,launcher,data){
    this[launcher](into,data);//probably need data as well
    if(typeof callback === 'function'){
      callback();
    }
  }
};

RM.Launcher.content = function(into){
  var html = RM.Views.content();
  $('#'+into).append(html);
};

RM.Launcher.listRecuit = function(into,options){
  console.log(options);
  var count,reqOptions,tp,pages;
  options = options || {};
  var page = options.page || 1;
  var limit = options.limit || 3;

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

RM.Launcher.mainMenu = function(into){
  var html = RM.Views.main_menu();
  $('#'+into).append(html);
};

RM.Launcher.newRecuit = function(into){
  var formData = {
    button : [{
        option: 'primary',
        text : 'Add Recuit',
        attribs : [
          {
            key : 'l-action',
            value : 'addRecuit'
          }
        ]
      }],
    form :
    {
      first_name : [{
        title : 'First Name',
        id : 'first_name_input',
        cols : '6',
        placeholder : 'First Name',
        value : '',
        name : 'first_name'
      }],
      last_name : [{
        title : 'Last Name',
        id : 'last_name_input',
        cols : '6',
        placeholder : 'Last Name',
        value : '',
        name : 'last_name'
      }],
      email : [{
        title : 'email',
        id : 'email_input',
        cols : '6',
        placeholder : 'Email Address',
        value : '',
        name : 'email'
      }],
      phone_1 : [{
        title : 'Phone Number',
        id : 'phone_1_input',
        cols : '6',
        placeholder : 'Phone Number',
        value : '',
        name : 'phone_1'
      }],
      phone_2 : [{
        title : 'Alt Phne Number',
        id : 'phone_2_input',
        cols : '6',
        placeholder : 'Alt Phone Number',
        value : '',
        name : 'phone_2'
      }],
      address_street : [{
        title : 'Street Address',
        id : 'address_street_input',
        cols : '6',
        placeholder : 'Street Address',
        value : '',
        name : 'address_street'
      }],
      address_city : [{
        title : 'City',
        id : 'address_city_input',
        cols : '6',
        placeholder : 'City',
        value : '',
        name : 'address_city'
      }],
      address_state : [{
        title : 'State',
        id : 'address_state_input',
        cols : '6',
        placeholder : 'State',
        value : '',
        name : 'address_state'
      }],
      address_zip : [{
        title : 'Zip',
        id : 'address_zip_input',
        cols : '6',
        placeholder : 'Zip',
        value : '',
        name : 'address_zip'
      }],
      years_exp : [{
        type : 'select',
        title : 'Years Experience',
        id : 'years_exp_input',
        cols : '6',
        placeholder : 'Years Experience',
        value : '',
        name : 'years_exp',
        option : [
        {
          value : '0-0.5',
          title : '0 - 6 month'
        },
        {
          value : '0.5-1',
          title : '6 month - 1 year'
        },
        {
          value : '1-3',
          title : '1 - 3 Years'
        },
        {
          value : '3-6',
          title : '3 - 6 Years'
        },
        {
          value : '6-10',
          title : '6 - 10 Years'
        },
        {
          value : '10-20',
          title : '10 - 20 Years'
        },
        {
          value : '20+',
          title : '20+ Years'
        }
        ]
      }],
      job_type : [{
        type : 'select',
        title : 'Job Type',
        id : 'job_type_input',
        cols : '6',
        placeholder : 'Job Type',
        value : '',
        name : 'job_type',
        option : [
        {
          value : 'driver',
          title : 'Driver'
        },
        {
          value : 'temp',
          title : 'Temp Work'
        },
        {
          value : 'it',
          title : 'IT Work'
        }
        ]
      }]
    }
    };
    var html = RM.Views.new_recuit_form(formData);
    $('#'+into).append(html);
  };

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

//# sourceMappingURL=launchers.js.map