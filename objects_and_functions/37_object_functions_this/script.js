function a() {
  console.log(this);
}
a();

var b = function() {
  console.log(this);
}
b();

/*
  Both of the above invocation will log 'window' object.
  The 'this' variable in a simple 'function' invocation(be it function declaration or expression) in javascript always points to the global object and in browser's case the global object is 'window'
  Thats why in the above case both a and b functions' this points to the global object
*/

var c = {
  name: 'The C Object',
  log: function() {
    console.log(this); //Will return the containing Object 'C'
  }
};
c.log(); //Will return the containing Object 'C'

/*
  In javascript the 'this' variable of a 'method' [those properties of an Object whose value is a function] returns the object it is contained in.
*/

var c = {
  name: 'The C Object',
  log: function(newName) {
    this.name = newName;
    console.log(this);
  }
};
c.log('The Updated C Object');
/*
 Since the methods have access to the Object it is contained inside using the 'this' variable, it can change the values of properties of that object.
 On Line #32, you can see that the 'log' method is changing the 'name' property of the c object.
*/

var c = {
  name: 'The C Object',
  log: function(newName) {
    this.name = newName;
    console.log(this);

    function setName(setNewName) {
      this.name = setNewName;
    }
    setName('updated through setName function');
    /*
      One would expect that this setName function's 'this' would still point to the object it is contained within, which is c. But that is not the case, this is a quirk in javascript, such that a function's 'this' within a 'method' still points to the 'global object' and thats why it couldn't update the name property of the 'c' object.
      Lessons Learnt:
      - A Method's 'this' always points to the object it is contained within.
      - A simple function declaration's 'this' even if it is contained within a method points to the 'Global Object'
    */
  }
};
c.log('The Updated C Object');

/*
  Pattern to solve the above quirk
*/
var c = {
  name: 'The C Object',
  log: function(newName) {
    var self = this;
    self.name = newName;
    console.log(self);

    function setName(setNewName) {
      self.name = setNewName;
    }
    setName('updated through setName function inside \'log\' method');
    console.log(this);
  }
};
c.log('The Updated C Object');

var firstLevel = {
  name: 'firstLevel Object',
  setFirstLevelName: function(newName) {
    this.name = newName; //This will point to the 'firstLevel' object's 'name' property
    console.log(this);
  },
  secondLevel: {
    name: 'secondLevel Object',
    setSecondLevelName: function(newName) {
      this.name = newName, //This will point to the 'secondLevel' object's 'name' property because method's 'this' points to the object they are contained within and since the immediate object this method is contained within is 'seondLevel', it will point to it's name and not "firstLevel's"
      console.log(this);
    }
  }
};

firstLevel.setFirstLevelName('updated firstLevel Name');
firstLevel.secondLevel.setSecondLevelName('updated secondLevel Name');