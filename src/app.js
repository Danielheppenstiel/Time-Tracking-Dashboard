// TIME SECLECTORS

// -- WORK SELECTOR
const workHours = document.getElementById('work-hours');
const previousWorkHours = document.getElementById('prev-work-hours');
// -- PLAY SELECTOR
const playHours = document.getElementById('play-hours');
const previousPlayHours = document.getElementById('prev-play-hours');
// -- STUDY SELECTOR
const studyHours = document.getElementById('study-hours');
const previousStudyHours = document.getElementById('prev-study-hours');
// -- EXERCISE SELECTOR
const exerciseHours = document.getElementById('exercise-hours');
const previousExerciseHours = document.getElementById('prev-exercise-hours');
// -- SOCIAL SELECTOR
const socialHours = document.getElementById('social-hours');
const previousSocialHours = document.getElementById('prev-social-hours');
// -- SELF-CARE SELECTOR
const selfCareHours = document.getElementById('selfCare-hours');
const previousSelfCareHours = document.getElementById('prev-selfCare-hours');


// EVENT LISTENERS
document.getElementById('daily-btn').addEventListener('click', displayDaily);
document.getElementById('weekly-btn').addEventListener('click', displayWeekly);
document.getElementById('monthly-btn').addEventListener('click', displayMonthly);


// EVENT HANDLER FUNCTIONS
function displayDaily() {
    
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'data.json', true);

    xhr.onload = function() {

        if (this.status === 200) {
            console.log(this.responseText);

            let timeStamps = JSON.parse(this.responseText);

            // DISPLAY HOURS
            workHours.innerHTML = `${timeStamps[0].timeframes.daily.current}Hrs`;
            previousWorkHours.innerHTML = `${timeStamps[0].timeframes.daily.previous}Hrs`
            
            playHours.innerHTML = `${timeStamps[1].timeframes.daily.current}Hrs`;
            previousPlayHours.innerHTML = `${timeStamps[1].timeframes.daily.previous}Hrs`;

            studyHours.innerHTML = `${timeStamps[2].timeframes.daily.current}Hrs`;
            previousStudyHours.innerHTML = `${timeStamps[2].timeframes.daily.previous}Hrs`

            exerciseHours.innerHTML = `${timeStamps[3].timeframes.daily.current}Hrs`;
            previousExerciseHours.innerHTML = `${timeStamps[3].timeframes.daily.previous}Hrs`

            socialHours.innerHTML = `${timeStamps[4].timeframes.daily.current}Hrs`;
            previousSocialHours.innerHTML = `${timeStamps[4].timeframes.daily.previous}Hrs`

            selfCareHours.innerHTML = `${timeStamps[5].timeframes.daily.current}Hrs`;
            previousSelfCareHours.innerHTML = `${timeStamps[5].timeframes.daily.previous}Hrs`
        };
    };
    xhr.send();
};

function displayWeekly() {

    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'data.json', true);

    xhr.onload = function() {
        if (this.status === 200){

            console.log(this.responseText);

            let timeStamps = JSON.parse(this.responseText);

            // DISPLAY HOURS
            workHours.innerHTML = `${timeStamps[0].timeframes.weekly.current}Hrs`;
            previousWorkHours.innerHTML = `${timeStamps[0].timeframes.weekly.previous}Hrs`;
            
            playHours.innerHTML = `${timeStamps[1].timeframes.weekly.current}Hrs`;
            previousPlayHours.innerHTML = `${timeStamps[1].timeframes.weekly.previous}Hrs`;

            studyHours.innerHTML = `${timeStamps[2].timeframes.weekly.current}Hrs`;
            previousStudyHours.innerHTML = `${timeStamps[2].timeframes.weekly.previous}Hrs`;

            exerciseHours.innerHTML = `${timeStamps[3].timeframes.weekly.current}Hrs`;
            previousExerciseHours.innerHTML = `${timeStamps[3].timeframes.weekly.previous}Hrs`;

            socialHours.innerHTML = `${timeStamps[4].timeframes.weekly.current}Hrs`;
            previousSocialHours.innerHTML = `${timeStamps[4].timeframes.weekly.previous}Hrs`;

            selfCareHours.innerHTML = `${timeStamps[5].timeframes.weekly.current}Hrs`;
            previousSelfCareHours.innerHTML = `${timeStamps[5].timeframes.weekly.previous}Hrs`;
        };
    };
    xhr.send();
};

function displayMonthly() {

    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'data.json', true);

    xhr.onload = function() {
        if (this.status === 200){

            console.log(this.responseText);

            let timeStamps = JSON.parse(this.responseText);

            // DISPLAY HOURS
            workHours.innerHTML = `${timeStamps[0].timeframes.monthly.current}Hrs`;
            previousWorkHours.innerHTML = `${timeStamps[0].timeframes.monthly.previous}Hrs`;
            
            playHours.innerHTML = `${timeStamps[1].timeframes.monthly.current}Hrs`;
            previousPlayHours.innerHTML = `${timeStamps[1].timeframes.monthly.previous}Hrs`;

            studyHours.innerHTML = `${timeStamps[2].timeframes.monthly.current}Hrs`;
            previousStudyHours.innerHTML = `${timeStamps[2].timeframes.monthly.previous}Hrs`;

            exerciseHours.innerHTML = `${timeStamps[3].timeframes.monthly.current}Hrs`;
            previousExerciseHours.innerHTML = `${timeStamps[3].timeframes.monthly.previous}Hrs`;

            socialHours.innerHTML = `${timeStamps[4].timeframes.monthly.current}Hrs`;
            previousSocialHours.innerHTML = `${timeStamps[4].timeframes.monthly.previous}Hrs`;

            selfCareHours.innerHTML = `${timeStamps[5].timeframes.monthly.current}Hrs`;
            previousSelfCareHours.innerHTML = `${timeStamps[5].timeframes.monthly.previous}Hrs`;  
        };
    };
    xhr.send();
};