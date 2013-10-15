// function person(firstname) 
// {
//   this.firstname=firstname;
//   // this.lastname=lastname;
//   // this.age=age;
//   // this.eyecolor=eyecolor;
// }

// myFather=new person("John");

FRUIT_BEARING_AGE = 13

var AppleTree = function() {
  console.log(this);
  // this.age = 0;
  this.height = 0;

  // grow = function() {

  // }

};

AppleTree.prototype.appleCount = 0;
AppleTree.prototype.age = 0;
AppleTree.prototype.grow = function() {
  this.age++;
  this.height += 10;
  if (this.age > FRUIT_BEARING_AGE) {
    this.appleCount += Math.ceil(10 * Math.random());
  }
};
