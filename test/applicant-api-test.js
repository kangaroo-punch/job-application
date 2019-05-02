import applicantApi from '../src/applicant-api.js';
const test = QUnit.test;

applicantApi.storage = sessionStorage;
const testStorage = sessionStorage;

test('saving two and getting one by name', function(assert) {
    //Arrange
    testStorage.removeItem('applicants');
    const applicant1 = { name: 'tester1' };
    const applicant2 = { name: 'tester2' };
    //Act 
    // Call the function you're testing and set the result to a const
    applicantApi.save(applicant1);
    applicantApi.save(applicant2);
    const result = applicantApi.get(applicant2.name);
    
    //Assert
    assert.deepEqual(result, applicant2);
});
 
test('no applicants on local storage returns empty array', function(assert) {
    //Arrange
    testStorage.removeItem('applicants');
    const expected = [];
    
    //Act 
    // Call the function you're testing and set the result to a const
    const applicants = applicantApi.getAll();
    
    //Assert
    assert.deepEqual(applicants, expected);
});

test('two saves return array with two items', function(assert) {
    //Arrange
    testStorage.removeItem('applicants');
    const applicant1 = { name: 'name 1' };
    const applicant2 = { name : 'name 2' };
    const expected = [applicant1, applicant2];

    applicantApi.save(applicant1);
    applicantApi.save(applicant2);
    
    //Act 
    // Call the function you're testing and set the result to a const
    const applicants = applicantApi.getAll();
    
    //Assert
    assert.deepEqual(applicants, expected);
});
 
 