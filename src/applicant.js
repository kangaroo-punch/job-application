import applicantApi from './applicant-api.js';

const name = document.getElementById('name');
const is21 = document.getElementById('is21');
const cuisine = document.getElementById('cuisine');
const meals = document.getElementById('meals');
const likeFood = document.getElementById('like-food');

// get the applicant name

const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get('name');

console.log(id);
console.log(window.location.search);
// get our applicant from the API
const applicant = applicantApi.get(id);
console.log(applicant, 'in applicant.js');

//no applicant? no can do, head back to home page...
if(!applicant) {
    window.location = './';
}

//mediate data into the elements
name.textContent = applicant.name;
is21.textContent = applicant.is21;
cuisine.textContent = applicant.cuisine;
meals.textContent = applicant.meals;
likeFood.textContent = applicant.likeFood;