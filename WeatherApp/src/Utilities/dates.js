export function getWeekday(date) {
    const dayNames = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const weekday = date.getDay();
    return dayNames[weekday];
}

export function getDate(unixTimeStamp, timezoneOffset) {
    return new Date((unixTimeStamp - timezoneOffset) * 1000);
}