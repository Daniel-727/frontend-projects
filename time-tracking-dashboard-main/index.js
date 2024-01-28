import { getDailyTimes, getWeeklyTimes, getMonthlyTimes } from "./controller.js";

// Update View
const updateView = (times) => {
  workTime.textContent = `${times.Work.current}hrs`;
  workPreviousTime.textContent = `Last Week - ${times.Work.previous}hrs`;
  playTime.textContent = `${times.Play.current}hrs`;
  playPreviousTime.textContent = `Last Week - ${times.Play.previous}hrs`;
  studyTime.textContent = `${times.Study.current}hrs`;
  studyPreviousTime.textContent = `Last Week - ${times.Study.previous}hrs`;
  exerciseTime.textContent = `${times.Exercise.current}hrs`;
  exercisePreviousTime.textContent = `Last Week - ${times.Exercise.previous}hrs`;
  socialTime.textContent = `${times.Social.current}hrs`;
  socialPreviousTime.textContent = `Last Week - ${times.Social.previous}hrs`;
  selfCareTime.textContent = `${times["Self Care"].current}hrs`;
  selfCarePreviousTime.textContent = `Last Week - ${times["Self Care"].previous}hrs`;
};

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
const socialDetails = document.querySelector("[data-id='social-details']");
const [socialTitle, socialButton, socialTime, socialPreviousTime] = socialDetails.children;

// self-care details
const selfcareDetails = document.querySelector("[data-id='self-care-details']");
const [selfCareTitle, selfCareButton, selfCareTime, selfCarePreviousTime] = selfcareDetails.children;

// Event listeners
dailyBtn.addEventListener("click", () => updateView(getDailyTimes()));
weeklyBtn.addEventListener("click", () => updateView(getWeeklyTimes()));
monthlyBtn.addEventListener("click", () => updateView(getMonthlyTimes()));
