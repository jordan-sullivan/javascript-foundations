class Unicorn {
  constructor(name, color) {
    this.name = name;
    if (color === undefined) {
      this.color = "white";
    } else {
      this.color = color;
    }
  }
  isWhite() {
    if (this.color !== "white") {
      return false;
    }
  }
 says(saying) {
   return `**;* ${saying} *;**`
 }
}

//read the test you're running
//ask yourself if it will fail and why
//run the test
//make it pass

module.exports = Unicorn;
