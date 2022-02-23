const calculator = require ("../calculator");
const expect = require('chai').expect;
const Day = require('../conditional');


it('add pass', function(){
    expect(calculator('add',7,7)).to.equal(14)
});
it('add fail', function(){
    expect(calculator('add',7,7)).to.equal(16)
});


it('sub pass', function(){
    expect(calculator('sub',7,7)).to.equal(0)
});
it('sub fail', function(){
    expect(calculator('sub',7,7)).to.equal(2)
});

it('div pass', function(){
    expect(calculator('div',7,7)).to.equal(1)
});
it('div fail', function(){
    expect(calculator('div',7,7)).to.equal(2)
});


it('mul pass', function(){
    expect(calculator('mul',7,7)).to.equal(49)
});
it('mul fail', function(){
    expect(calculator('mul',7,7)).to.equal(40)
});

it('error pass', function(){
    expect(calculator('add',7,'seven')).to.equal('ERROR')
});
it('error fail', function(){
    expect(calculator('add',7,'seven')).to.equal(14)
});

//CONDITIONAL TESTS
it('Fail test', function(){
    expect(new Day('pizza')).to.equal(1)
})

it('Return 1', function(){
    expect(new Day(1).num1).to.equal(1)
})
it('Return 2', function(){
    expect(new Day(2).num1).to.equal(2)
})
it('Return GM @3', function(){
    expect(new Day(3).display()).to.equal('Good Morning')
})
it('Return GA @7', function(){
    expect(new Day(7).display()).to.equal('Good Afternoon')
})
it('Return GM @9', function(){
    expect(new Day(9).display()).to.equal('Good Morning')
})
it('Return GA @14', function(){
    expect(new Day(14).display()).to.equal('Good Afternoon')
})
it('Return GE @21', function(){
    expect(new Day(21).display()).to.equal('Good Evening')
})


it('Return string @ 4', function(){
    expect(new Day(4).display()).to.equal("4 is now a string")
})

it('Return Error plz', function(){
    expect(new Day('pizza').display()).to.equal('Error pizza is not a number')
})

