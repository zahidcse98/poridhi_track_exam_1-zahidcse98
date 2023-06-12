require('dotenv').config({path: "../../.env"});
const Visitor = require('../models/visitor');
const uid = require('uid');
const redis = require('redis');

const router = require('express').Router();
const redisClient = redis.createClient(process.env.REDIS_PORT,`${process.env.REDIS_HOST}`);
console.warn('host is: ',process.env.REDIS_HOST);
(async () => {
    await redisClient.connect();
})();

redisClient.on("ready", () => {
    console.log('Redis connected!!');
})
redisClient.on("error", function(error) {
    console.error('error in redis', error);
})

const createNewVisitor = (name, email, phone) => {
    const visitor = new Visitor({uid:uid.uid(5), name, email, phone});
    console.log('visitor is: ',visitor);
    return visitor.save();
}

const registration = async(name, email, phone) => {
    
    return createNewVisitor(name, email, phone);
}


router.get('/', async(req, res) => {
    // Data control from redis cache
    const cachedData = await redisClient.get('visitors');
    if(cachedData) {
        const data = JSON.parse(cachedData);
        res.status(200).json(data);
    } else {
        const visitors = await Visitor.find();
        redisClient.set('visitors', JSON.stringify(visitors));
        return res.status(200).json(visitors);
    }
    // redisClient.get('visitors', async(err, cachedData) => {
    //     if(err) {
    //         res.status(500).send("Redis server went wrong!!")
    //     }
    //     // return data from cache
    //     if(cachedData) {
    //         const data = JSON.parse(cachedData);
    //         res.status(200).json(data)
    //     } else {
    //         try{
    //             const visitors = await Visitor.find();

    //             //adding data to cache
    //             redisClient.set('visitors', JSON.stringify(visitors));
    //             return res.status(200).json(visitors);
    //         } catch(error) {
    //             console.log("Something went wrong!!");
    //             res.status(500).json({error: 'Something went wrong!!'})
    //         }
    //     }
    // })
    
})

router.post('/', async(req, res) => {
    const {name, email, phone} = req.body;
    try{
        const visitor = await registration(name, email, phone);
        // delete redis data when add new visitor
        redisClient.del('visitors')
        return res.status(201).json(visitor);
    } catch(e) {
        console.log('Something went wrong!! on post');
    }
})

module.exports = router;