//GREETING
console.log('\n\- Welcome to the \"Zodiac-Personality-Checker\(Mixed\-messages\)\" Project');
console.log('Please enter your \'birth month\' followed by your birth day\n');
//Birthday Variables:
let bMonth = 0;
let bDayNum = 0;
//START GET-SIGN FUNCTION
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
}//END GET-SIGN FUNCTION
//GET-SIGN CHECK BELOW

//START getMood FUNCTION
//*** getMood(?) 1 = (Happy moodchoice) , 2 = (Moody moodchoice) ,  3 = (Impartial/DontCare moodchoice)
function getMood(moodChoice){
    
    const mC = moodChoice; 
    let arrHappyQuotes = [
        '\"You\’re off to great places\, today is your day\. Your mountain is waiting\, so get on  your way\.\" \-Dr\.Seuss',
        '\"You always pass failure on the way to success\.\" \-Mickey Rooney/Actor',
        '\"Only surround yourself with people who lift you higher\.\" \-Oprah Winfrey',
        '\"No one is perfect \- that\’s why pencils have erasers\.\" \-Wolfgang Riebe\/Magician',
        '\"It always seems impossible until it is done\.\" \-Nelson Mandela\/Political Leader',
        '\"All your dreams can come true\, if you have the courage to pursue them\.\” \-Walt Disney',
        '\"Keep your face to the sunshine and you cannot see a shadow\.\” \-Helen Keller\/Author',
        '\"Once you replace negative thoughts with positive ones\, you’ll start having positive results\.\” \-Willie Nelson',
        '\"It makes a big difference in your life when you stay positive\.\" \-Ellen DeGeneres',
        '\"It\’s not whether you get knocked down\, it\’s whether you get up\.\” \-Vince Lombardi'
    ];
    let arrMoodyQuotes = [
        '\"Never go to bed mad\. Stay up and fight\.\” \-Phylis Diller\/Actress',
        '\"Anybody can become angry \— that is easy\, but to be angry with the right person and to the right degree and at the right time and for the right purpose\, and in the right way \— that is not within everybodys power and is not easy\.\” \-Aristotle\/Philosopher', 
        '\"Bitterness is like cancer\. It eats upon the host\. But anger is like fire\. It burns it all clean\.\” \-Maya Angelou',
        '\"When angry, count four. When very angry, swear\.\” \-Mark Twain\/Author',
        '\"Anger\, resentment and jealousy doesnt change the heart of others\-\- it only changes yours\.\" \-Shannon Alder\/auth',
        '\"How much more grievous are the consequences of anger than the causes of it\.\” \-Marcus Aurelius\/Philosopher',
        '\"Whoa\, who peed in your Cheerios\?\” \-Becca Fitzpatrick\/Actress',
        '\"There are two things a person should never be angry at\, what they can help\, and what they cannot\.\" \-Plato',
        '\"Men in rage strike those that wish them best\.\" \-Shakespeare\/Author',
        '\"Anger makes you smaller\, while forgiveness forces you to grow beyond what you are\.\” \-Cherie Carter\-Scott'
    ];
    let arrDontCareQuotes = [
        '\"A person is wise if he listens to millions of advice and doesnt implement any of it\.\”  \-Michael Bassey Johnson',
        '\"The rain that falls wherever it pleases\. I want to be that rain\.\" \-Marty Rubin',
        '\"Real men dont dance to other peoples tune\, instead\, they play for others to dance\.\" \-Michael Bassey Johnson',
        '\"Fortune favors the nonchalant\.\"\-Marty Rubin',
        '\"He understood the code of his social class enough to affect an air of indifference about life\.\" \-H\.W\. Brands',
        '\"The ability to remain calm and focused in stressful situations is central to making positive decisions\.\" \-Goldie Hawn',
        '\"Be the light in the dark\, be the calm in the storm and be at peace while at war\.\" \-Michael Dolan',
        '\"Let your soul stand cool and composed before a million universes\.\" -Walt Whitman',
        '\"A calm mind helps our human intelligence to assess the situation realistically\.\" \-Dalai Lama',
        '\"Calm sailing doesn\'t come from calm waters\, it comes from having a good navigator\; a good crew and a good vessel\.\" \-Anthony T\. Hincks'
    ];

    if(mC===1){
        randomHappyQuote();
    }
    else if(mC===2){
        randomMoodyQuote();
    }
    else if(mC===3){
        randomDontCareQuote();
    }
    else{
        console.log('Try again - your MOOD choice was not accepted.')
        console.log('Please enter a number from 1-3\:    1 \= \(Happy generally\) \, 2 \= \(Moody typically\) \,  3 \= \(Impartial\/DontCare normally\)')
    }
    //END USER-SELECTION PROCESS

    //START QUOTE GENERATOR FUNCTIONS
    function randomMoodyQuote(){
        let randNumber2 = Math.floor(Math.random()*10)
        let moodyReturn = arrMoodyQuotes[randNumber2]
        console.log('Based on your \(Moody\) selection, your randomly\-generated quote is\: \n' + moodyReturn)
    }

    function randomDontCareQuote(){
        let randNumber3 = Math.floor(Math.random()*10);
        let dontcareReturn = arrDontCareQuotes[randNumber3]
        console.log('Based on your \(Impartial\\Don\'tCare\) selection, your randomly\-generated quote is\: \n' + dontcareReturn)
    }

    function randomHappyQuote(){
        let randNumber1 = Math.floor(Math.random()*10)
        let happyReturn = arrHappyQuotes[randNumber1]
        console.log('Based on your \(Happy\) selection, your randomly\-generated quote is\: \n' + happyReturn)
    }
}//END getMood function

//let b = '';
//let l = '';
//START COLOR SELECTION OBJECT FUNCTION
//***getColorChoice(?) */ 1 = Red - 2 = Blue - 3 = Green - 4 = Yellow
const getColorChoice = (choice)=>{
    let colorPick = choice;
    const colorChoice = {
        _red : 'Competitive, Demanding, Determined, Purposeful, Strong-willed',
        _blue : 'Cautious, Precise, Deliberate, Questioning, Formal',
        _green : 'Caring, Encouraging, Sharing, Patient, Relaxed',
        _yellow : 'Sociable, Dynamic, Demonstrative, Enthusiastic, Persuasive'
    }
   

    if((colorPick===1) || (colorPick===2) || (colorPick===3) || (colorPick===4)){
        switch (colorPick) {
            case 1:
                        console.log(`${colorChoice._red}`);
                        break;
            case 2:
                        console.log(`${colorChoice._blue}`);
                        break;
            case 3:
                        console.log(`${colorChoice._green}`);
                        break;
            case 4:
                            console.log(`${colorChoice._yellow}`);
                            break;
            //default:
            //            break;
        }
    }
    else{
        console.log('Please enter a number from 1-4\: \'1\' for \(Red\)\, \'2\' for \(Blue\)\,\'3\' for \(Green\)\, or \'4\' for \(Yellow\)')
        //console.log('Please enter: \'r\'\, \'b\'\,\'g\'\, or \'y\' for your ')
    }
}
console.log(`${getSign(1,8)}\'s are usually described as\: `)
console.log(`${getColorChoice(2)}\.\n`)
console.log(getMood(1));
/*Output:

- Welcome to the "Zodiac-Personality-Checker(Mixed-messages)" Project
Please enter your 'birth month' followed by your birth day

Capricorn's are usually described as:
Cautious, Precise, Deliberate, Questioning, Formal
undefined.

Based on your (Happy) selection, your randomly-generated quote is:
"You always pass failure on the way to success." -Mickey Rooney/Actor
undefined

*/
