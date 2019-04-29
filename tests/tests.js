const test = QUnit.test;

function getApplicant(formData) {
    const age = formData.get('age') === 'yes';
    const likeFood = parseInt(formData.get('likeFood'));

    const applicant = {
        name: formData.get('name'),
        age: age,
        cuisine: formData.get('cuisine'),
        meals: formData.getAll('meals'),
        likeFood: likeFood
    };
    return applicant;
}

test('return completed form in object', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = {
        name: 'josh',
        age: true,
        cuisine: 'indian',
        meals: ['breakfast', 'lunch'],
        likeFood: 10,

    };

    const formData = new FormData();
    formData.set('name', expected.name);
    formData.set('age', 'yes');
    formData.set('cuisine', expected.cuisine);
    formData.set('meals', expected.meals[0]);
    formData.append('meals', expected.meals[1]);
    formData.set('likeFood', '10');



    //Act 
    // Call the function you're testing and set the result to a const
    const applicant = getApplicant(formData);
    //Assert
    assert.deepEqual(applicant, expected);
});
 