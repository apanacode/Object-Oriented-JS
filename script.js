const voterEnquiry = {
    voterName : "sam Bhadhur",
    age : 24,
    constructor(){
   console.log("votername and his age : ", this.voterName, voterEnquiry.age);
    },
    ToPrint : function(){
        console.log(voterEnquiry.age);
   },
   voterNames(){
    console.log(this.voterName);
   }
   
};

//prototype:

const sportsDetails = {
    profession : "crickter",
    sal(){
        console.log("profession is ",this.profession);
    }

}

const Ravishastri={
    RavishastriName : "Ravi",
    sal(){ //if this sal() function is not their than the sportsDetails function will be executed.
        console.log("sal for ",this.RavishastriName,"will be more than 20lakh");
    }
 //   console.log(" india skipper is ",RavishastriName);
}

Ravishastri.__proto__ = sportsDetails;  //prototype accessed here 

//Classes in js

class humanBeings{
    constructor(){
        console.log("Human beings are existed on earth");
    }
    boys(){
        console.log("MALE GENDER");
    }
    girls(){
        console.log("FEMALE GENDER");
    }

}

let obj=new humanBeings;

//inhertiance in js

class Recharge{
    BasicPlan(){
        console.log("Recharge plans starts frm 79rs onwards");
    };
}

class idea extends Recharge{
    ideaRecharge(){
        console.log("199rs plan free talktime wth 1.2gb data ");
    }

}
let sim = new idea();