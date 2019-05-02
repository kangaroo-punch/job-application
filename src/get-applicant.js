function getApplicant(formData) {
    const is21 = formData.get('is21') === 'yes';
    const likeFood = parseInt(formData.get('like-food'));

    const applicant = {
        name: formData.get('name'),
        is21: is21,
        cuisine: formData.get('cuisine'),
        meals: formData.getAll('meals'),
        likeFood: likeFood
    };
    return applicant;
}

export default getApplicant;