describe ("Create an apple tree Object", function() {
  it("should return an apple tree object", function(){
    var tree = new AppleTree();
    expect(tree).toBeDefined();
  });

  it("should return tree with age 0 when created", function(){
    var tree = new AppleTree;
    expect(tree.age).toEqual(0);
  });

  it ("should have height 0 when created", function(){
    var tree = new AppleTree;
    expect(tree.height).toEqual(0);
  });
  it ("should have 0 apples if age < FRUIT_BEARING_AGE", function(){
    var tree = new AppleTree;
    expect(tree.appleCount).toEqual(0);
  });
  describe("grow", function(){

    it("should increase the age of the apple tree by 1 year", function(){
      var tree = new AppleTree;
      tree.grow();
      expect(tree.age).toEqual(1);
    });

    it("should increase the height of the apple tree by 10 inches", function(){
      var tree = new AppleTree;
      tree.grow();
      expect(tree.height).toEqual(10);
    });
    it ("should add a random number of apples if age > FRUIT_BEARING_AGE", function(){
      var tree = new AppleTree;
      while(tree.age<=FRUIT_BEARING_AGE){
        tree.grow();
      }
      expect(tree.appleCount).toBeGreaterThan(0);
    });
  });

  describe ("die",function(){
    it("should die when age > MAX_AGE",function(){
      var tree = new AppleTree;
      while(tree.age < MAX_AGE){
        tree.grow();
      }
      tree.grow();
      expect(tree.isAlive).toBeFalsy();
    });
  });
//   describe("dropOrange", function(){
//     xit("should return the orange that is removed from oranges", function(){
//       var tree=createTree();
//       while(tree.age< FRUIT_BEARING_AGE){
//         tree.grow();
//       }
//       expect(tree.dropOrange()).toBeDefined();
//     });
//   });
// });

// describe ("createOrange", function(){
//   xit("should return a orange object", function(){
//     expect(createOrange()).toBeDefined();
//   });

//   xit ("should return an orange with a random diameter > 0", function(){
//     var orange = createOrange();
//     expect(orange.diameter).toBeGreaterThan(0);
//   });
});
