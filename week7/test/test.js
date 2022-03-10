const Day = require ("../capstone.js");

const expect = require('chai').expect;


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



it('display', function(){
    expect(running.display()).to.deep.equal(["yellow", "green", "red"])
});


//string
it('string', function(){
    expect(running.add("purple")).to.deep.equal(["yellow", "green", "red", "purple"])
});


//number
it('number', function(){
    expect(running.add(14)).to.deep.equal(["yellow", "green", "red", "purple", 14])
});


//object
it('object', function(){
    expect(running.add({first:"you are second", third: "you are fourth"})).to.deep.equal(["yellow", "green", "red", "purple", 14, {first:"you are second", third: "you are fourth"}])
});


//array
it('array', function(){
    expect(running.add(["Tom", "Susie", "Dakota"])).to.deep.equal(["yellow", "green", "red", "purple", 14, {first:"you are second", third: "you are fourth"}, ["Tom", "Susie", "Dakota"]])
});


//boolean
it('boolean', function(){
    expect(running.add(true)).to.deep.equal(["yellow", "green", "red", "purple", 14, {first:"you are second", third: "you are fourth"}, ["Tom", "Susie", "Dakota"], true])
});

 //remove first
it('removeFirst', function(){
    expect(running.remove(0)).to.deep.equal(["green", "red", "purple", 14, {first:"you are second", third: "you are fourth"}, ["Tom", "Susie", "Dakota"], true])
});


//remove last
it('removeLast', function(){
    expect(running.remove(6)).to.deep.equal(["green", "red", "purple", 14, {first:"you are second", third: "you are fourth"}, ["Tom", "Susie", "Dakota"]])
});


//remove middle
it('removeMiddle', function(){
    expect(running.remove(3)).to.deep.equal(["green", "red", "purple", {first:"you are second", third: "you are fourth"}, ["Tom", "Susie", "Dakota"]])
});



//find true
it('findTrue', function(){
    expect(running.search("purple")).to.equal(true)
});


//find false
it('findFalse', function(){
    expect(running.search("purewple")).to.equal("Error")
});