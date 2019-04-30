// import our utility object for getting data
import applicantApi from './applicant-api.js';

// reference all the dom elements to update
const name = document.getElementById('name');
const is21 = document.getElementById('is21');
const cuisine = document.getElementById('cuisine');
const meals = document.getElementById('meals');
const likeFood = document.getElementById('like-food');

// get our applicant from the API
const applicant = applicantApi.get();

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