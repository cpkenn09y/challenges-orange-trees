/* Write your code for the plain-old-js-objects-spec here */
FRUIT_BEARING_AGE = 15;
MAX_AGE = 100;

function createTree() {
  var tree = {};
  tree.age = 0;
  tree.height = 0;
  tree.isAlive = true;
  tree.orangeCount = 0;
  tree.grow = function() {
    tree.age += 1;
    tree.height += 10;
    if (tree.age > MAX_AGE) {
      tree.isAlive = false;
    }
    if (tree.age < FRUIT_BEARING_AGE) {
      tree.orangeCount += Math.floor(10*Math.random());
    }
  };
  tree.dropOrange = function() {
    return true;
  };

  return tree;
}

var tree = createTree();

function createOrange() {
  var orange = {};
  orange.diameter = Math.ceil(5*Math.random());
  return orange;
}
