RM.Launcher = {
  launch : function(into,callback,launcher,data){
    this[launcher](into,data);//probably need data as well
    if(typeof callback === 'function'){
      callback();
    }
  }
};
