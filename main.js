let btn = document.getElementById('checkSpeedBtn');

btn.addEventListener('click', checkspeed);

async function checkspeed(){
    btn.disabled = true;
    try{
        const response = await axios.get('http://localhost:3000/check_speed'); 
        const result = Math.round(response.data.speed*100)/100;
        alerts(result);
        btn.disabled = false;
    }catch(err){
        console.log(err);
    }
}
function alerts(speed){
    if(speed>100){
        alert(`Rocket Speed: ${speed}`);
    }else if(speed>50){
        alert(`Train Speed: ${speed}`);
    }else if(speed<50){
        alert(`It's better to use your own data: ${speed}`);
    }else{
        alert('Error while checking WiFi speed. Please try again later');
    }
};