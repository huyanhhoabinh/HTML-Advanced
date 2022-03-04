const getSleepHours = day => {
    if (day === 'Monday') {
        return 8;
    } else if (day === 'Tuesday') {
        return 9;
    } else if (day === 'Wednesday') {
        return 7;
    } else if (day === 'Thursday') {
        return 4;
    } else if (day === 'Friday') {
        return 5;
    } else if (day === 'Saturday') {
        return 2;
    } else if (day === 'Sunday') {
        return 10;
    }
};

const getActualSleepHours = () =>
    getSleepHours('Monday') +
    getSleepHours('Tuesday') +
    getSleepHours('Wednesday') +
    getSleepHours('Thursday') +
    getSleepHours('Friday') +
    getSleepHours('Saturday') +
    getSleepHours('Sunday');

const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 8;
};

const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
        console.log('You got the perfect amount of sleep!');
    } else if (actualSleepHours > idealSleepHours) {
        console.log(`You got more sleep than needed! You got ${actualSleepHours - idealSleepHours} hour(s) more sleep than you needed this week.`);
    } else {
        console.log(`You should get some rest!  You got ${idealSleepHours - actualSleepHours} hour(s) less sleep than you needed this week.`);
    }
};

calculateSleepDebt();