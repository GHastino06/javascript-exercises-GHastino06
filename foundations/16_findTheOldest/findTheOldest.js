const getAge = function (birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
};

const findTheOldest = function(people=[]) {
    people.sort((a,b) =>{
        let aAge,bAge;
        aAge = a.yearOfDeath - a.yearOfBirth;
        bAge = b.yearOfDeath - b.yearOfBirth;
        if(!a.yearOfDeath) {
            aAge = new Date().getFullYear() - a.yearOfBirth;

        }
        if(!b.yearOfDeath) {
            bAge = new Date().getFullYear() - b.yearOfBirth;
        }
        if(aAge > bAge) return 1;
        else return -1;
    });

    return people[people.length-1]; // sort from younger to older and return last element


   /* return people.reduce((oldest, currentPerson) => {
        let oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        let currentPersonAge = getAge(
            currentPerson.yearOfBirth,
            currentPerson.yearOfDeath
        );
        return oldestAge < currentPersonAge ? currentPerson : oldest;
    });*/
};

// Do not edit below this line
module.exports = findTheOldest;
