console.log('\- Welcome to the \"Mixed Messages\" Project'); 
//Birthday Variables:
let bMonth = 0;
let bDayNum = 0;

//Call 'getSign' function after saving USER-INPUT...
function getSign(bMonth,bDayNum) {
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
    if (bMonth > 12 || bDayNum > 31) {
        console.log('I\'m Sorry. Please enter another number.');
    }
    else if (bMonth===12 && bDayNum >= 22 || bMonth===1 && ){
    
    }
    else if (bMonth===1 && bDayNum <= 19){

    }
    
    
    
    
    //console.log('- Your sign is: ' + signList._Gemin);
    return sign;
}
getSign(6,15);
