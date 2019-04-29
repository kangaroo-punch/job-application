const test = QUnit.test;
import getApplicant from '../src/get-applicant.js';

test('return completed form in object', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = {
        name: 'josh',
        is21: true,
        cuisine: 'indian',
        meals: ['breakfast', 'lunch'],
        likeFood: 10,

    };

    const formData = new FormData();
    formData.set('name', expected.name);
    formData.set('is21', 'yes');
    formData.set('cuisine', expected.cuisine);
    formData.set('meals', expected.meals[0]);
    formData.append('meals', expected.meals[1]);
    formData.set('like-food', '10');



    //Act 
    // Call the function you're testing and set the result to a const
    const applicant = getApplicant(formData);
    //Assert
    assert.deepEqual(applicant, expected);
});
 