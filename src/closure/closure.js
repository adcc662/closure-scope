const moneyBox = (coins) =>{
    var SaveCoins = 0;
        SaveCoins += coins;
        console.log(`MoneyBox: $${SaveCoins}`);
}
moneyBox(5);
moneyBox(10);

const moneyBox = () => {
    var saveCoins = 0;
    const countCoins = (coins) => {
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins();
}

let myMoneyBox = moneyBox();
myMoneyBox(4);
myMoneyBox(6);
myMoneyBox(10);
