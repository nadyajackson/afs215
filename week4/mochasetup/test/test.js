const expect = require('chai').expect;

//does this help?
it('expect passing test', function(){
    expect(true).to.equal(false)
});

function cellPhone(arg){
    if (arg === 'att'){
        return "blue"
    }
    if (arg === 'Sprint'){
        return "yellow"
    }
    if (arg === "Verizon"){
        return "red"
    }
    else{
        return "Not an option"
    }
}

it('returns "yellow" when passed "Sprint"', function(){
    expect(cellPhone("Sprint")).to.equal("yellow")
})
it('returns "blue" when passed "att"', function(){
    expect(cellPhone("att")).to.equal("blue")
})
it('returns "red" when passed "Verizon"', function(){
    expect(cellPhone("Verizon")).to.equal("red")
})
it('returns errmsg when passed other', function(){
    expect(cellPhone("Mint")).to.equal("Not an option")
})
