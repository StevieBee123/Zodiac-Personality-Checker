console.log('\- Welcome to the \"Mixed Messages\" Project'); 
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
    if (bMonth > 12 || bDayNum > 31){
        console.log('Number(s) too large')

        console.log(`bMonth is: ${bMonth}`)
        console.log(`bDayNum is: ${bDayNum}`)
    }
    else if (bMonth===6){        
        console.log(`Your bMonth = ${bMonth}`)
    } 
    else {
        console.log('***')

        console.log(`bMonth is: ${bMonth}`)
        console.log(`bDayNum is: ${bDayNum}`)
    }







    //console.log('- Your sign is: ' + signList._Gemin);
    //return sign;
}
getSign(7,24);
