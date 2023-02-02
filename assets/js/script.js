// js array of body parts
// [back, cardio, chest, lower arms, lower legs, neck, shoulders, upper arms, upper legs, waist]
const bodyParts = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '3e0c346377msh286e6e470d53c55p1d6e09jsn13e1bcaa6c46',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

fetch('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', bodyParts)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

// equipment
// [assisted, band, barbell, body weight, bosu ball, cable, dumbbell, elliptical machine, ez barbell, hammer, kettlebell, leverage machine, medicine ball, olympic barbell,
// resistance band, roller, rope, skierg machine, sled machine, smith machine, stability ball, stationary bike, stepmill machine, tire, trap bar, upper body ergometer,
// weighted, wheel roller]
const equipment = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '3e0c346377msh286e6e470d53c55p1d6e09jsn13e1bcaa6c46',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

fetch('https://exercisedb.p.rapidapi.com/exercises/equipmentList', equipment)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

// all exercises
const exercises = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '3e0c346377msh286e6e470d53c55p1d6e09jsn13e1bcaa6c46',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

fetch('https://exercisedb.p.rapidapi.com/exercises', exercises)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));