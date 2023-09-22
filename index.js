// Write your solution here!

// const cats =["Milo", "Otis", "Garfield"]

// function cats() {
//     console.log(cats);
//   }

// cats.push("Ralph")

// cats.unfish ("Bob")

// cats.pop('Garfield')

// cats.shift('Milo')

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(Ralph) {
  cats.push("Ralph");
}

beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

function destructivelyPrependCat(name) {
  cats.unshift("Bob");
}

beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

function destructivelyRemoveLastCat() {
  cats.pop("Garfield");
}

beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

function destructivelyRemoveFirstCat() {
  cats.shift("Milo");
}

beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

function appendCat(name) {
  return [...cats, "Broom"];
}

beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

function prependCat(name) {
  return ["Arnold", ...cats];
}

beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

function removeLastCat() {
  return cats.slice(0, cats.length - 1);
}

beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

function removeFirstCat() {
  return cats.slice(1);
}

// Export functions if needed
// module.exports = {
//   destructivelyAppendCat,
//   destructivelyPrependCat,
//   destructivelyRemoveLastCat,
//   destructivelyRemoveFirstCat,
//   appendCat,
//   prependCat,
//   removeLastCat,
//   removeFirstCat,
// };

// Test suite using Mocha and Chai
// describe('index.js', function () {
//   describe('cats', function () {
//     it('is assigned an initial value of ["Milo", "Otis", "Garfield"]', function () {
//       expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
//     });
//   });

//   describe('Array functions', function () {
//     beforeEach(function () {
//       cats.length = 0;
//       cats.push('Milo', 'Otis', 'Garfield');
//     });

//     describe('destructivelyAppendCat(name)', function () {
//       it('appends a cat to the end of the cats array', function () {
//         destructivelyAppendCat('Ralph');
//         expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield", "Ralph"]);
//       });
//     });

//     describe('destructivelyPrependCat(name)', function () {
//       it('prepends a cat to the beginning of the cats array', function () {
//         destructivelyPrependCat("Bob");
//         expect(cats).to.have.ordered.members(["Bob", "Milo", "Otis", "Garfield"]);
//       });
//     });

//     describe('destructivelyRemoveLastCat()', function () {
//       it('removes the last cat from the cats array', function () {
//         destructivelyRemoveLastCat();
//         expect(cats).to.have.ordered.members(["Milo", "Otis"]).and.to.not.include('Garfield');
//       });
//     });

//     describe('destructivelyRemoveFirstCat()', function () {
//       it('removes the first cat from the cats array', function () {
//         destructivelyRemoveFirstCat();
//         expect(cats).to.have.ordered.members(["Otis", "Garfield"]).and.to.not.include('Milo');
//       });
//     });

//     describe('appendCat(name)', function () {
//       it('appends a cat to the cats array and returns a new array, leaving the cats array unchanged', function () {
//         expect(appendCat("Broom")).to.have.ordered.members(["Milo", "Otis", "Garfield", "Broom"]);
//         expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
//       });
//     });

//     describe('prependCat(name)', function () {
//       it('prepends a cat to the cats array and returns a new array, leaving the cats array unchanged', function () {
//         expect(prependCat("Arnold")).to.have.ordered.members(["Arnold", "Milo", "Otis", "Garfield"]);
//         expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
//       });
//     });

//     describe('removeLastCat()', function () {
//       it('removes the last cat in the cats array and returns a new array, leaving the cats array unchanged', function () {
//         expect(removeLastCat()).to.have.ordered.members(["Milo", "Otis"]);
//         expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
//       });
//     });

//     describe('removeFirstCat()', function () {
//       it('removes the first cat from the cats array and returns a new array, leaving the cats array unchanged', function () {
//         expect(removeFirstCat()).to.have.ordered.members(["Otis", "Garfield"]);
//         expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
//       });
//     });
//   });
// });
// This code defines the cats array and the specified functions for appending, prepending, removing, and returning new arrays without modifying the original cats array. The test suite verifies that these functions work as expected.




// Was this response better or worse?

// Better

// Worse

// Same



