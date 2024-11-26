var i;
var text = " " ;
{
    let i = 0 ;
    while (i<50)
    {
        text += "The values inside the block: " + i + "<br>";
        i++;
    }
    document.getElementById("result").innerHTML = text;
}
document.write("The values of i outsied the block is :" +i);