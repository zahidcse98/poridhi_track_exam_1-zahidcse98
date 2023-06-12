const Visitor = require('../models/visitor');
const uid = require('uid');

const router = require('express').Router();

const findVisitor = (key, value) => {
    return Visitor.findOne({[key]: value})
}
console.log(uid.uid(5));
const createNewVisitor = (name, email, phone) => {

    const visitor = new Visitor({uid:uid.uid(5), name, email, phone});
    console.log('visitor is: ',visitor);
    return visitor.save();
}

const registration = async(name, email, phone) => {
    let visitor = await findVisitor('email', email);
    if(visitor) {
        return res.status(400).message('user already exists')
    }
    return createNewVisitor(name, email, phone);
}


router.get('/', async(req, res) => {
    try{
        const visitors = await Visitor.find();
        return res.status(200).json(visitors);
    } catch(error) {
        console.log("Something went wrong!!")
    }
})

router.post('/', async(req, res) => {
    const {name, email, phone} = req.body;
    try{
        const visitor = await registration(name, email, phone);
        console.log(visitor);
        return res.status(201).json(visitor);
    } catch(e) {
        console.log('Something went wrong!! on post');
    }
})

module.exports = router;