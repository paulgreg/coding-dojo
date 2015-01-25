describe('RomanToNumeric', function() {
	var expect = chai.expect;

	var r2n;

	beforeEach(function() {
		r2n = new RomanToNumeric();
	});

	it('should parse I', function() {
		expect(r2n.parse('I')).to.be.a('number').to.be.equal(1);
	});

});
