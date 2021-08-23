
// mile to kilometer
function mileToKilometer(miles){
    var kilometer =miles*1.60943;
    return kilometer;

}

var getKilometer= mileToKilometer(3)
console.log(" kilometer : ",getKilometer);

// kilometer to mile 
function kilometerToMile(kilometer){
    var miles= kilometer/1.60943;
    return miles;
}
var getMiles= kilometerToMile(4.82829);
console.log(" mile : ", getMiles);