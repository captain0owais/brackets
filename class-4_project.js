function save()
{
    array=[];
    for ( i=1 ; i<=5 ; i++ )
    {
    var g1 = document.getElementById("stu"+i).value;
    array.push(g1)
    console.log(array)
    console.log(array.sort())
    }
    
}

function sort()
{
    array.sort();
    document.getElementById("display").innerHTML=array;
}

function reset()
{
    array=[];
    document.getElementById("display").innerHTML=array;
}