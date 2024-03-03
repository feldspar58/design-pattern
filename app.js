class Telephone {
    constructor() {
        this.phoneNumbers = [];
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(remObserver) {
        this.observers = this.observers.filter(observer =>{
            if(observer != remObserver)
            return 
        })
    }

    notifyObservers(phoneNumber) {
        this.observers.forEach(observer => {
            observer.update(phoneNumber);
        });
    }

    addPhoneNumber(phoneNumber) {
        this.phoneNumbers.push(phoneNumber);
    }

    removePhoneNumber(toRemove) {
        this.phoneNumbers = this.phoneNumbers.filter(phoneNumber => {
            if(phoneNumber != toRemove)
            return phoneNumber
        })
    }
    dialPhoneNumber(phoneNumber) {
        if (this.phoneNumbers.includes(phoneNumber)) {
            this.notifyObservers(phoneNumber);
        } else {
            console.log("Phone number not found. Cannot dial.");
        }
    }
}

class Observer {
    update(phoneNumber) {
      console.log(phoneNumber);
    }
  }
  
  class PrintObserver {
    update(phoneNumber) {
      console.log(phoneNumber);
    }
  }
  
  class CustomPrintObserver {
    update(phoneNumber) {
      console.log("Now Dialing", phoneNumber);
    }
  }

// Example usage
const telephone = new Telephone();
const observer1 = new PrintObserver();
const observer2 = new CustomPrintObserver();

telephone.addObserver(observer1);
telephone.addObserver(observer2);

telephone.addPhoneNumber("1234567890");
telephone.dialPhoneNumber("1234567890");
