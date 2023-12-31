const {model, Schema} = require('mongoose')

const visitorSchema = new Schema({
    uid: {
        type: String,
        required: true,
        maxLength: 5
    },
    name: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 20,
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
				return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
			},
			message: (prop) => `Invalid Email: ${prop.value}`,
        },
    },
    phone: {
        type: String,
        required: true,
        maxLength: 12
    }
}, {timestamps: true})

const Visitor = new model("Visitor", visitorSchema);

module.exports = Visitor;