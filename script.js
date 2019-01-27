let money = prompt ("Ваш бюджет на месяц");
let time = prompt ("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget : money,
    timeData : time,
    expenses : {},
    optionalExpences : {},
    income : [],
    savings : false
};

let nameOfMainExpences = prompt ("Введите обязательную статью расходов в этом месяце");
let amountOfMainExpences = prompt ("Во сколько обойдется?");

appData.expenses.nameOfMainExpences = amountOfMainExpences;

alert(appData.budget / 30);
