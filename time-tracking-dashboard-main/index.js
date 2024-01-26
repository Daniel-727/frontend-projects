// Elements

// Buttons for different views
const dailyBtn = document.querySelector("[data-id='daily']");
const weeklyBtn = document.querySelector("[data-id='weekly']");
const monthlyBtn = document.querySelector("[data-id='monthly']");

// work details
const workDetails = document.querySelector("[data-id='work-details']");
const [workTitle, workButton, workTime, workPreviousTime] = workDetails.children;

// play details
const playDetails = document.querySelector("[data-id='play-details']");
const [playTitle, playButton, playTime, playPreviousTime] = playDetails.children;

// study details
const studyDetails = document.querySelector("[data-id='study-details']");
const [studyTitle, studyButton, studyTime, studyPreviousTime] = studyDetails.children;

// exercise details
const exerciseDetails = document.querySelector("[data-id='exercise-details']");
const [exerciseTitle, exerciseButton, exerciseTime, exercisePreviousTime] = exerciseDetails.children;

// social details
const socialDetails = document.querySelector("[data-id='study-details']");
const [socialTitle, socialButton, socialTime, socialPreviousTime] = socialDetails.children;

// self-care details
const selfcareDetails = document.querySelector("[data-id='self-care-details']");
const [selfCareTitle, selfCareButton, selfCareTime, selfCarePreviousTime] = selfcareDetails.children;

dailyBtn.addEventListener("click", () => console.log(previousTime));
