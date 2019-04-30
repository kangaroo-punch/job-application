import getApplicant from './get-applicant.js';
import applicantApi from './applicant-api.js';

// reffrence needed DOM notes
const form = document.getElementById('food-taster-application');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const applicant = getApplicant(formData);
    applicantApi.save(applicant);
}); 
