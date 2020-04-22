const {validate} = require('./users-service');

describe('user-srevice.js', function () {
    describe('.validate()', function () {
        it('should return false when the user is missing a username or password', function () {
            expect(validate({})).toBe(false);
        });

        it('should return true when the user has a username and password', function () {
            expect(validate({ username: 'sam', password: 'pass' })).toBe(true);
        })

        it('a user should have an `isAdmin` property that should be true or false.', function (){

        });
        it.todo('the username should be at least 2 characters long.');
    });
});