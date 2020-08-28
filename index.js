/*
TASK 1 🚀
// in your own words explain what a closure is below in comments and then write an example of a closure. Try to make this explaination simple enough to explain to a younger sibling. */

// A closure is a nested function, the way I try to think about it is as follows. The originally made function is the mama and the functions that are declared inside the mama function are her children. The children have access to all the information that their mama has but the mama cannot access the information the children have. */\
const bigMamasKids = ["Joe", "Ken", "Elyse", "Ashley", "Xander", "Katherine"];

function mama() {
  const newKid = 6;
  return function countKids() {
    return array.toString();
  };
}
/*
TASK 2 🚀
// look at the code below and explain in your own words where the variable 'count' is available. 
// Explain why 'count' is initialized with a let and not a var or const. 
// Explain how initalizing the variable 'count' with a var would change it's scope
*/
function counterMaker() {
  let count = 0;
  return function counter() {
    return count++;
  };
}

// 1) It's available in the function and in the closure as well due to the fact that the closure has access to information already declared.
// 2) Let is block scoped and it's value can change later after being declared. Const is likewise block scoped but it's value is "constant" therefore it wouldn't be suitable for this function. Var is unlike let in that it's function scoped meaning it could get buggy and break the expected sequence of actions but similar to let, var's value is able to change.
// 3) As stated before var is function scoped meaning it is accessable outside of this written function as well as inside this is where things can get buggy. */

/*
TASK 3 🚀
* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global binding when logged will look for the variable in the global context
* 2. 
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

// Principle 2

// code example for Implicit Binding

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding

/*
TASK 4 🚀
/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.
  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  
  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/

/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

/*
 * Inheritance chain: GameObject -> CharacterStats -> Humanoid
 * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
 * Instances of CharacterStats should have all of the same properties as GameObject.
 */

// Test you work by un-commenting these 3 objects and the list of console logs below:

/*
  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });
  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });
  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });
  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
*/

/*
TASK 5 🚀
// convert the constructor functions above to class syntax copy and paste the objects and console logs below the class syntax to test if your code is working
 */
