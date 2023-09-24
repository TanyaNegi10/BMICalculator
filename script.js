function bmi()
{
    var h=document.getElementById('height').value;
    var w=document.getElementById('weight').value;
    var bmical=w/(h/100 * h/100);
    var total=bmical.toFixed(2);
    document.getElementById('content1').innerHTML="Your BMI is "+total;
    if(total<18.5)
    {
        document.getElementById('content2').innerHTML="You are in underweight category";   
    }
    else if(total<25 && total>=18.5)
    {
        document.getElementById('content2').innerHTML="You are in Optimal category";
    }
    else if(total<30 && total>=25)
    {
        document.getElementById('content2').innerHTML="You are in Overrweight category";
    }
    else{
        document.getElementById('content2').innerHTML="You are in obese category";
    }
}