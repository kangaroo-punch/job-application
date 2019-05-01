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
 
test('no applicants on local storage returns empty array', function(assert) {
    //Arrange
    const expected = [];
    
    //Act 
    // Call the function you're testing and set the result to a const
    const applicants = applicantApi.getAll();
    

    //Assert
    assert.deepEqual(applicants, expected);
});
 