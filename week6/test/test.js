// Add an item of any data type to the array.
// Call the array.
// Remove specific items from the array.
// Search the array for a specific item. If the item exists, return true(boolean). If not, provide an error message.
// Refactor your code to implement beforeEach to make your code DRY. Also implement at least one case of before, after and afterEach to show its functionality. This could be as simple as a console message, or something more complex if you prefer.
const Day = require ("../week6.js");

const expect = require('chai').expect;

// let running = new Day()
before(function(){
    running = new Day()
    console.log("I worked")
  })


beforeEach(function(){
    console.log("I am testing")
 })


afterEach(function(){
    console.log("Testing still")
 })
 

after(function(){
    console.log("Testing Complete")
})


// console.log(running.display())
it('display', function(){
    expect(running.display()).to.deep.equal(["yellow", "green", "red"])
});


//string
// console.log(running.add("purple"))
it('string', function(){
    expect(running.add("purple")).to.deep.equal(["yellow", "green", "red", "purple"])
});


//number
// console.log(running.add(14))
it('number', function(){
    expect(running.add(14)).to.deep.equal(["yellow", "green", "red", "purple", 14])
});


//object
// console.log(running.add({first:"you are second", third: "you are fourth"}))
it('object', function(){
    expect(running.add({first:"you are second", third: "you are fourth"})).to.deep.equal(["yellow", "green", "red", "purple", 14, {first:"you are second", third: "you are fourth"}])
});


//array
// console.log(running.add(["Tom", "Susie", "Dakota"]))
it('array', function(){
    expect(running.add(["Tom", "Susie", "Dakota"])).to.deep.equal(["yellow", "green", "red", "purple", 14, {first:"you are second", third: "you are fourth"}, ["Tom", "Susie", "Dakota"]])
});


 //remove first
// console.log(running.remove(0))
it('removeFirst', function(){
    expect(running.remove(0)).to.deep.equal(["green", "red", "purple", 14, {first:"you are second", third: "you are fourth"}, ["Tom", "Susie", "Dakota"]])
});


//remove last
// console.log(running.remove(5))
it('removeLast', function(){
    expect(running.remove(5)).to.deep.equal(["green", "red", "purple", 14, {first:"you are second", third: "you are fourth"}])
});


//remove middle
// console.log(running.remove(3))
it('removeMiddle', function(){
    expect(running.remove(3)).to.deep.equal(["green", "red", "purple", {first:"you are second", third: "you are fourth"}])
});



//find true
// console.log(running.search("purple"))
it('findTrue', function(){
    expect(running.search("purple")).to.equal(true)
});


//find false
// console.log(running.search("puerpl"))
it('findFalse', function(){
    expect(running.search("purewple")).to.equal("Error")
});