import time from "./data.json" assert { type: "json" };

const getDailyTimes = () => {
  let dailyValues = {};
  time.forEach((item) => {
    const itemTitle = item.title;
    dailyValues[itemTitle] = {};
    dailyValues[itemTitle].current = item.timeframes.daily.current;
    dailyValues[itemTitle].previous = item.timeframes.daily.previous;
  });
  return dailyValues;
};

const getWeeklyTimes = () => {
  let weeklyValues = {};
  time.forEach((item) => {
    const itemTitle = item.title;
    weeklyValues[itemTitle] = {};
    weeklyValues[itemTitle].current = item.timeframes.weekly.current;
    weeklyValues[itemTitle].previous = item.timeframes.weekly.previous;
  });
  return weeklyValues;
};

const getMonthlyTimes = () => {
  let monthlyValues = {};
  time.forEach((item) => {
    const itemTitle = item.title;
    monthlyValues[itemTitle] = {};
    monthlyValues[itemTitle].current = item.timeframes.monthly.current;
    monthlyValues[itemTitle].previous = item.timeframes.monthly.previous;
  });
  return monthlyValues;
};

export { getDailyTimes, getWeeklyTimes, getMonthlyTimes };
