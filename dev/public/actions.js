RM.Actions = {};
console.log(RM.Actions);

RM.Actions.new_recuit_form = function(data){
  console.log(data);
  var formData = {form :
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
    console.log(formData);
    var html = RM.Views.new_recuit_form(formData);
    $(document.body).append(html);
    console.log(html);
  };

//# sourceMappingURL=actions.js.map