RM.Launcher = {
  launch : function(into,callback,launcher){
    this[launcher](into);//probably need data as well
    if(typeof callback === 'function'){
      callback();
    }
  }
};
