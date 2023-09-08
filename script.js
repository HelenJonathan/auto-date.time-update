const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const currentDayOfTheWeekElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');

function updateDateTime() {
    const now = new Date();
    currentDayOfTheWeekElement.textContent = days[now.getUTCDay()];
    currentUTCTimeElement.textContent = now.toUTCString();
}

updateDateTime();
setInterval(updateDateTime, 1000);
