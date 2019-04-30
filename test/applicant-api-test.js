import applicantApi from '../src/applicant-api.js';
const test = QUnit.test;

test('round-trip applicant', function(assert) {
    //Arrange
    const applicant = { 
        name: 'wes'
    };

    //Act 
    // Call the function you're testing and set the result to a const
    applicantApi.save(applicant);
    const result = applicantApi.get();
    

    //Assert
    assert.deepEqual(result, applicant);
});
 