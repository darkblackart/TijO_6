var expect = require('chai').expect;
var app = require('../app/app');



it ('find max number', function () {
    expect(app.findMax([5,4,6,8,-1,0])).to.eql(8)
    
} )

it ('is not number', function () {
    expect(app.findMax([5,4,6,'a',-1,0])).to.eql(false)

} )