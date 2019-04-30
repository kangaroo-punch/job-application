const test = QUnit.test;
import getApplicant from '../src/get-applicant.js';

test('return completed form in object', function(assert) {
    const expected = {
        name: 'josh',
        is21: true,
        cuisine: 'indian',
        meals: ['breakfast', 'lunch'],
        likeFood: 10
    };

    const formData = new FormData();
    formData.set('name', expected.name);
    formData.set('is21', 'yes');
    formData.set('cuisine', expected.cuisine);
    formData.set('meals', expected.meals[0]);
    formData.append('meals', expected.meals[1]);
    formData.set('like-food', '10');

    const applicant = getApplicant(formData);

    assert.deepEqual(applicant, expected);
});
 