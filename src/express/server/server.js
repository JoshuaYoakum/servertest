const express = require("express")
const app = express()
const port = 8000
const { faker } = require('@faker-js/faker');

//Routes
app.get("/api", (req, res)=>{
    res.json("Hello World")
})

app.get("/api/user/new", (req, res)=>{
    res.json(new User())
})

app.get("/api/company/new", (req, res)=>{
    res.json(new Company())
})

app.get("/api/user/company", (req, res)=>{
    res.json({user:new User(), comp:new Company()})
})

//{user:new User(), comp:new Company()}
//Constructor
class User{
    constructor(){
        this._id =  faker.datatype.uuid()
        this.firstName = faker.name.firstName()
        this.lastName = faker.name.lastName()
        this.phoneNumber = faker.phone.phoneNumber()
        this.email = faker.internet.email()
        this.password = faker.internet.password()
    }
}
console.log(new User());

class Company{
    constructor(){
        this._id =  faker.datatype.uuid()
        this.name = faker.company.companyName()
        this.address={
            street: faker.address.streetName(),
            city: faker.address.cityName(),
            state: faker.address.state(),
            zipCode: faker.address.zipCodeByState(),
            country: faker.address.country()
        }
        
    }
}
console.log(new Company());

// this needs to below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );
