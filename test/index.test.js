const {generatePass} = require('../index');


    describe('generatePass', () => {
        test('returns a string with correct length',() => {
            const password = generatePass(10);
            expect(password).toHaveLength(10)
        })    

        test('returns different password everytime',() => {
            const pass1 = generatePass(10);
            const pass2 = generatePass(10);
            expect(pass1).not.toBe(pass2)
        })

        test('returns empty str if the len is 0',()=> {
            const emptyPass = generatePass(0);
            expect(emptyPass).toBe('')
        })
        test('only valid characters',() => {
            const validChr = /^[a-zA-Z0-9!@#$%&*^()_+]+$/ ; 
            expect(validChr.test(generatePass(20))).toBe(true);
        })
    })
