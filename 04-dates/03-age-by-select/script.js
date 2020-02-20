/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    /* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    
    document.getElementById("run").addEventListener("click", () => {
    // Birthday Date
    let dayBirthday = document.getElementById("dob-day").value;
    let monthBirthday = document.getElementById("dob-month").value;
    let yearBirthday = document.getElementById("dob-year").value;
    //let dateBirthday = (yearBirthday, monthBirthday, dateBirthday);
    
    //Actual Date
    let dateActual = new Date();
    let dayActual = dateActual.getDay();
    let monthActual = dateActual.getMonth();
    let yearActual = dateActual.getFullYear();

    // Actual Date - Birthday Date : apparemment ça fonctionne pas (voir code suite du commentaire):
    //let dateResult = dateActual - dateBirthday;
    //console.log(dateResult);

    //Result Date
    let yearResult = (yearActual - yearBirthday);
    let monthResult = (monthActual - monthBirthday);
    let dayResult = (dayActual - dayBirthday);

    if(monthResult < 0){
        yearResult--;
    }
    alert(yearResult + " ans");
});
    


})();
})();
