describe('RomanToNumeric', function() {
	var expect = chai.expect;

	var r2n;

	beforeEach(function() {
		r2n = new RomanToNumeric();
	});

	it('should parse I', function() {
		expect(r2n.parse('I')).to.be.a('number').to.equal(1);
	});

	it('should parse II', function() {
		expect(r2n.parse('II')).to.equal(2);
	});

    it('should parse III', function() {
		expect(r2n.parse('III')).to.equal(3);
	});

	it('should parse IV', function() {
		expect(r2n.parse('IV')).to.equal(4);
	});

	it('should parse V', function() {
		expect(r2n.parse('V')).to.equal(5);
	});

	it('should parse VI', function() {
		expect(r2n.parse('VI')).to.equal(6);
	});

        it('should parse IX', function () {
            expect(r2n.parse('IX')).to.equal(9);
        });

        it('should parse X', function () {
            expect(r2n.parse('X')).to.equal(10);
        });

        it('should parse XI', function () {
            expect(r2n.parse('XI')).to.equal(11);
        });

        it('should parse XLIX', function () {
            expect(r2n.parse('XLIX')).to.equal(49);
        });

        it('should parse XLIV', function () {
            expect(r2n.parse('XLIV')).to.equal(44);
        });

        it('should parse L', function () {
            expect(r2n.parse('L')).to.equal(50);
        });

        it('should parse XL', function () {
            expect(r2n.parse('XL')).to.equal(40);
        });

        it('should parse C', function () {
            expect(r2n.parse('C')).to.equal(100);
        });

        it('should parse CD', function () {
            expect(r2n.parse('CD')).to.equal(400);
        });

        it('should parse XC', function () {
            expect(r2n.parse('XC')).to.equal(90);
        });

        it('should parse D', function () {
            expect(r2n.parse('D')).to.equal(500);
        });

        it('should parse M', function () {
            expect(r2n.parse('M')).to.equal(1000);
        });

});
