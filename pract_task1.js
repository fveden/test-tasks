/**
 * Parsing url function
 * @param {string} string url
 * @returns {object} parsed url
 */
function parseUrl(string){
    const result = {};
    const splittedUrl = string.split("/");
    result["href"] = string;
    result["hash"] = "#" + (string.split("#")[1] ?? ""); 
    result["port"] = splittedUrl[2].split(":")[1] ?? ""; 
    result["host"] = splittedUrl[2]; 
    result["protocol"] = splittedUrl[0]; 
    result["hostname"] = splittedUrl[2].split(":")[0]; 
    result["pathname"] = "/" + splittedUrl.slice(3, splittedUrl.length).join("/").split("?")[0]; 
    result["origin"] = splittedUrl.slice(0, 3).join("/"); 
    return result;
}


let a = parseUrl('http://sys.it-co.ru:8080/do/any.php?a=1&b[]=a&b[]=b#foo')
console.log(a);
// Вернет объект, в котором будут следующие свойства:
console.log( a.href == "http://sys.it-co.ru:8080/do/any.php?a=1&b[]=a&b[]=b#foo" )
console.log( a.hash == "#foo" )
console.log( a.port == "8080" )
console.log( a.host == "sys.it-co.ru:8080" )
console.log( a.protocol == "http:" )
console.log( a.hostname == "sys.it-co.ru" )
console.log( a.pathname == "/do/any.php" )
console.log( a.origin == "http://sys.it-co.ru:8080" )