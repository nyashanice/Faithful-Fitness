// add start over button at bottom

// js array of body parts
// [back, cardio, chest, lower arms, lower legs, neck, shoulders, upper arms, upper legs, waist]
// const bodyParts = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': '3e0c346377msh286e6e470d53c55p1d6e09jsn13e1bcaa6c46',
//         'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
//     }
// };

// fetch('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', bodyParts) 
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

// use body parts for checkboxes in step 1

// const id = JSON.stringify(`body part-${bodyParts}`);
// console.log(bodyParts);
// bodyParts.forEach(element => {
//     console.log(element)
// });

// console.log(id);

// let checkbox = document.createElement('input');
// checkbox.type = "checkbox";
// checkbox.name = "bodyParts";
// checkbox.value = "value";
// checkbox.id = "id";

// let label = document.createElement('label')
// label.htmlFor = "id";
// label.appendChild(document.createTextNode('text for label after checkbox'));

// container.appendChild(checkbox);
// container.appendChild(label);

// save information from checkboxes for step 3
// grey out step 1

// equipment
// [assisted, band, barbell, body weight, bosu ball, cable, dumbbell, elliptical machine, ez barbell, hammer, kettlebell, leverage machine, medicine ball, olympic barbell,
// resistance band, roller, rope, skierg machine, sled machine, smith machine, stability ball, stationary bike, stepmill machine, tire, trap bar, upper body ergometer,
// weighted, wheel roller]
// const equipment = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': '3e0c346377msh286e6e470d53c55p1d6e09jsn13e1bcaa6c46',
//         'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
//     }
// };

// fetch('https://exercisedb.p.rapidapi.com/exercises/equipmentList', equipment)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

// // remove some equipment based on answer choice from step 2
// // allow generate button to pop up
// // grey out step 2


// // all exercises
// const exercises = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': '3e0c346377msh286e6e470d53c55p1d6e09jsn13e1bcaa6c46',
//         'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
//     }
// };

// fetch('https://exercisedb.p.rapidapi.com/exercises', exercises)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

//     // randomize 5 exercises on click based on body part and equipment choices
//         // addEventListener?
//     // populate in step 3
//     // display name, target, equipment, and gifUrl when they click the name
//         // target keys from object
//     // allow them to confirm or get another random set