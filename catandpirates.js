// Create a Class cat and give the class at least 3 properties
// give the class at least 3 methods
// create two instances of the class (two cats)
// log both instances to see their properties
// invoke each method from both instances

//Creating a Class
console.log('\nCat Class\n')
class Cat
{   
    //Creating Properties for class cat
    breed;
    legs=4
    born_date=2020
    eyes=2
    //Creating Methods 
    eat()
    {
        console.log("I drink milk")
    }
    makesound(sound)
    {
        console.log(`I sound ${sound} `)
    }
    likes()
    {
        console.log("I like to scratch")
    }
}
 //Ceating Instances for cat class
const Tommy = new Cat()
const Niky = new Cat()

// log Tommy instances to see their properties
console.log('I am Tommy')
Tommy['breed']="Western Breed"
console.log('I am a'+ Tommy.breed)
console.log('I have'+Tommy.legs+'legs')
console.log(`I have ${Tommy.eyes} Eyes`)
console.log(`I was born on ${Tommy.born_date}`)

// log Niky instances to see their properties
console.log('I am Niky')

Niky['breed']="Persian"
console.log('I am a'+ Niky.breed)
console.log('I have'+Niky.legs+'legs')
console.log(`I have ${Niky.eyes} Eyes`)
console.log(`I was born on ${Niky.born_date}`)

// invoke each method from both instances
console.log('Tommy')
Tommy.makesound('Meau')
Tommy.likes()
Tommy.eat()

console.log('Niky')
Niky.makesound('Meau_Meau')
Niky.likes()
Niky.eat()

// create 3 properties that are set by the constructor
// create 3 methods
// instantiate 2 arraysof 3 pirates, name the arrays after your favorite pirate ships, jollyRoger and blackPearl
// loop over each array and print 3 properties of each pirate

console.log('\nPirate Class\n')
class Pirate{

    // create 3 properties that are set by the constructor
    constructor(PirateName, StartPoint, Destination){
        this.PirateName=PirateName
        this.StartPoint=StartPoint
        this.Destination=Destination
        }

        // create 3 methods
    Pricing()
    {
        console.log(`1000$ from &{this.StartPoint}`)
    }
    Offers()
    {
        console.log(`100$ off on your first Trip`)
    }
    Reviews(){
       console.log(`Please review ${this.PirateName}`);
    }
}

//instantiate 2 arraysof 3 pirates, name the arrays after your favorite pirate ships, jollyRoger and blackPearl

const jollyRoger = [new Pirate('Anney','North-Carolina','PA'), new Pirate('Bonny','CA','Newyork'), new Pirate('Sam','Singapore','Europe')]
const blackPearl = [new Pirate('Barthol','California','TX'), new Pirate('WesternPirate','France','Spain'), new Pirate('SevenSeas','Italy','France')]

//loop over each array and print 3 properties of each pirate
    console.log("Jolly Roger")
    jollyRoger.forEach(pirateClass => {
    console.log(pirateClass);
    });
    console.log("BlackPearl")
    blackPearl.forEach(pirateClass => {
        console.log(pirateClass);
    });
