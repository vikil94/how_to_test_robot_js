const { newRobot, station, isWorkday, prioritizeTasks } = require("./robot.js");

// remove .skip when you're ready to implement the test
test('test_that_foreign_robot_needing_repairs_sent_to_station_1', () => {
    // arrange
    const foreignRobot = newRobot(true, true, false);
    const expectedResult = 1;
    // act
    const result = station(foreignRobot);
    // assert

    expect(result).toEqual(expectedResult);
});

test('test_that_vintage_robot_needing_repairs_sent_to_station_2', () => {
    // arrange
    const vintageRobot = newRobot(true, false, true);
    const expectedResult = 2;
    // act

    const result = station(vintageRobot);

    // assert

    expect(result).toEqual(expectedResult);
});

test('test_that_standard_robot_needing_repairs_sent_to_station_3', () => {
    // arrange
    const standardRobot = newRobot(true, false, false);
    const expectedResult = 3;
    // act

    const result = station(standardRobot);
    // assert

    expect(result).toEqual(expectedResult);
});

test('test_that_robot_in_good_condition_sent_to_station_4', () => {
    // arrange
    const randomRobot = newRobot(false, false, false);
    const expectedResult = 4;
    // act

    const result = station(randomRobot);
    // assert

    expect(result).toEqual(expectedResult);
});

test('test_prioritize_tasks_with_empty_todo_list_returns_negative_one', () => {
    // arrange
    const noRobot = newRobot(false, false, false);
    noRobot.todos = [];
    const expectedResult = -1;
    // act

    const result = prioritizeTasks(noRobot);

    // assert

    expect(result).toEqual(expectedResult);
})

test('test_prioritize_tasks_with_todos_returns_max_todo_value', () => {
    // arrange

    const crazyRobots = newRobot(true, false, false);
    crazyRobots.todos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const expectedResult = 10;

    // act

    const result = prioritizeTasks(crazyRobots);

    // assert

    expect(result).toEqual(expectedResult)




});

test('test_workday_on_day_off_returns_false', () => {
    // arrange
    const workdayBot = newRobot(false, true, true);
    workdayBot.dayOff = 'Apr20';
    let today = 'Apr20';
    const expectedResult = false;

    // act

    const result = isWorkday(workdayBot, today);

    // assert

    expect(result).toEqual(expectedResult);
});

test('test_workday_not_day_off_returns_true', () => {
    // arrange
    const workdayBot = newRobot(false, true, true);
    workdayBot.dayOff = 'May22';
    let today = 'May25';
    const expectedResult = true;

    // act

    const result = isWorkday(workdayBot, today);

    // assert

    expect(result).toEqual(expectedResult);
});