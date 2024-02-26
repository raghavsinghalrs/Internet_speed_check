const express = require('express');
const cors = require('cors');
const SpeedTest = require('fast-speedtest-api');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/check_speed', async (req,res)=>{
    try{
        const test_speed = new SpeedTest({token : 'YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm', timeout: 10000 , unit: SpeedTest.UNITS.Mbps, proxy: 'http://optional:auth@my-proxy:123'});
        const speed = await test_speed.getSpeed();
        res.json({speed: speed});
    }catch(err){
        console.log(err);
        res.status(500).json({ error: 'An error occurred while measuring WiFi speed.' });
    }
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


