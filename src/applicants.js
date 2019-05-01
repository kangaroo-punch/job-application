import applicantApi from './applicant-api.js';

const tbody = document.getElementById('applicants');

const applicants = applicantApi.getAll();

for(let i = 0; i < applicants.length; i++) {
    const applicant = applicants[i];

    const tr = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = applicant.name;
    tr.appendChild(nameCell);

    const is21Cell = document.createElement('td');
    is21Cell.textContent = applicant.is21;
    tr.appendChild(is21Cell);

    const cuisineCell = document.createElement('td');
    cuisineCell.textContent = applicant.cuisine;
    tr.appendChild(cuisineCell);

    const mealsCell = document.createElement('td');
    let mealsList = '';
    if(applicant.meals) {
        mealsList = applicant.meals.join(', ');
    }
    mealsCell.textContent = mealsList;
    tr.appendChild(mealsCell);

    tbody.appendChild(tr);
}