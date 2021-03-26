console.log('\n\- Welcome to the \"Mixed Messages\" Project\n00000');
console.log('Please enter your \'BirthMonth\' followed by the day of the month\: \n');
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
    //BirthMonth-DayNumber
    if(bMonth > 12 || bDayNum > 31){
        console.log(`One of the numbers you entered is too large \(${bMonth} or ${bDayNum}\). Try again.\n`)
    } else if(bMonth <= 0 || bDayNum <= 0){
        console.log(`One of the numbers you entered is lower than zero \(${bMonth} or ${bDayNum}\). Try again.\n`)
    
    
    }  else if((bMonth == 12 && bDayNum >= 21) || (bMonth == 1 && bDayNum <= 19)){
        return signList._Cap;
    } else if((bMonth == 1 && bDayNum >= 19) || (bMonth == 2 && bDayNum <= 18)){
        return signList._Aqua;
    } else if((bMonth == 2 && bDayNum >= 18) || (bMonth == 3 && bDayNum <= 20)){
        return signList._Pisc;
    } else if((bMonth == 3 && bDayNum >= 20) || (bMonth == 4 && bDayNum <= 19)){
        return signList._Ari;
    } else if((bMonth == 4 && bDayNum >= 19) || (bMonth == 5 && bDayNum <= 20)){
        return signList._Taur;
    } else if((bMonth == 5 && bDayNum >= 20) || (bMonth == 6 && bDayNum <= 20)){
        return signList._Gemin;
    } else if((bMonth == 6 && bDayNum >= 20) || (bMonth == 7 && bDayNum <= 22)){
        return signList._Cancc;
    } else if((bMonth == 7 && bDayNum >= 22) || (bMonth == 8 && bDayNum <= 22)){
        return signList._Leo;
    } else if((bMonth == 8 && bDayNum >= 22) || (bMonth == 9 && bDayNum <= 22)){
        return signList._Vgo;
    } else if((bMonth == 9 && bDayNum >= 22) || (bMonth == 10 && bDayNum <= 22)){
        return signList._Lib;
    } else if((bMonth == 10 && bDayNum >= 22) || (bMonth == 11 && bDayNum <= 21)){
        return signList._Scorp;
    } else if((bMonth == 11 && bDayNum >= 21) || (bMonth == 12 && bDayNum <= 21)){
        return signList._Sagg;
    } else{
        console.log(`bMonth is: ${bMonth}`)
        console.log(`bDayNum is: ${bDayNum}`)
    }

    //console.log('- Your sign is: ' + signList._Gemin);
    //return sign;
}
console.log(`You are a\: ${getSign(10,28)}`);
//NEW FUNCTION '
const getMood = (moodChoice)=>{
    const mC = moodChoice; 

    if(mC===h){
        let arrHappyQuotes = [
                'You’re off to great places, today is your day. Your mountain is waiting, so get on  your way.-Dr.Seuss',
                'You always pass failure on the way to success.-Mickey Rooney/Actor',
                'Only surround yourself with people who life you higher.-Oprah Winfrey',
                'No one is perfect - that’s why pencils have erasers.-Wolfgang Riebe/Magician',
                'It always seems impossible until it is done.”-Nelson Mandela/Political Leader',
                'All your dreams can come true, if you have the courage to pursue them.”-Walt Disney',
                'Keep your face to the sunshine and you cannot see a shadow.”-Helen Keller/Author',
                'Once you replace negative thoughts with positive ones, you’ll start having positive results.”-Willie Nelson',
                'It makes a big difference in your life when you stay positive.”-Ellen DeGeneres',
                'It’s not whether you get knocked down, it’s whether you get up.”-Vince Lombardi'
            ];
    }
    else if(mC===m){
        let arrMoodyQuotes = [


            ];
    }
    else if(mC===dontCare){
        let arrDontCareQuotes = [



        ];
    }
};