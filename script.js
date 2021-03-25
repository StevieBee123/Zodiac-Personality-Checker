console.log('\n\- Welcome to the \"Mixed Messages\" Project\n'); 
//Birthday Variables:
let bMonth = 0;
let bDayNum = 0;

//Call 'getSign' function after saving USER-INPUT...
function getSign(bMonth,bDayNum){
    let sign = '';
    const signList = {
        _Cap : 'Capricorn',
        _Aqua : 'Aquarius',
        _Pisc : 'Pisces',
        _Ari : 'Aries',
        _Taur : 'Taurus',
        _Gemin : 'Gemini',
        _Cancc : 'Cancer',
        _Leo : 'Leo',
        _Vgo : 'Virgo',
        _Lib : 'Libra',
        _Scorp : 'Scorpio',
        _Sagg : 'Sagittarius'
    }

    //Birth Month too high/DayNumber
    if(bMonth > 12 || bDayNum > 31){
        console.log('One of the numbers you entered is too large. Try again.\n')
    } else if(bMonth <= 0 || bDayNum <= 0){
        console.log(`One of the numbers you entered is lower than zero \(${bMonth} or ${bDayNum}\). Try again.\n`)
    } else if((bMonth == 12 && day >= 21) || (bDayNum == 2 && day <= 18)){
        return zodiacSigns._Cap;
    } else if((bMonth == 12 && day >= 21) || (bDayNum == 2 && day <= 18)){
        return zodiacSigns._Aqua;
    } else if((bMonth == 12 && day >= 21) || (bDayNum == 2 && day <= 18)){
        return zodiacSigns._Cap;
    } else if((bMonth == 12 && day >= 21) || (bDayNum == 2 && day <= 18)){
        return zodiacSigns._Cap;
    } else if((bMonth == 12 && day >= 21) || (bDayNum == 2 && day <= 18)){
        return zodiacSigns._Cap;
    } else if((bMonth == 12 && day >= 21) || (bDayNum == 2 && day <= 18)){
        return zodiacSigns._Cap;
    } else if((bMonth == 12 && day >= 21) || (bDayNum == 2 && day <= 18)){
        return zodiacSigns._Cap;
    } else if((bMonth == 12 && day >= 21) || (bDayNum == 2 && day <= 18)){
        return zodiacSigns._Cap;
    } else if((bMonth == 12 && day >= 21) || (bDayNum == 2 && day <= 18)){
        return zodiacSigns._Cap;
    } else if((bMonth == 12 && day >= 21) || (bDayNum == 2 && day <= 18)){
        return zodiacSigns._Cap;
    } else if((bMonth == 12 && day >= 21) || (bDayNum == 2 && day <= 18)){
        return zodiacSigns._Cap;
    } else if((bMonth == 12 && day >= 21) || (bDayNum == 2 && day <= 18)){
        return zodiacSigns._Cap;
    } else{
        console.log(`bMonth is: ${bMonth}`)
        console.log(`bDayNum is: ${bDayNum}`)
    }

    //console.log('- Your sign is: ' + signList._Gemin);
    //return sign;
}
getSign(3,32);
