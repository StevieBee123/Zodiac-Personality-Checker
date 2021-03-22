console.log('\n\- Welcome to the \"Mixed Messages\" Project');
 
//Enter Birthday:
function getSign() {
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

    sign = signList._Gemin
    console.log(`- Your sign is: ${sign}`)
}
getSign();