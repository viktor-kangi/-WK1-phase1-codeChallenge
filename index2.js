function carSpeed(){
    if(speed<70)print(Ok)
    else
    {
    print('Points:'+((speed-70)/5));
    if((speed-70) /5 > 12)
    print('License suspended');
    }
    }
    console.log(carSpeed)
    
    