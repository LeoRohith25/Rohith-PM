class calculator{
      
    constructor(a,b,operation){
        this.a = a;
        this.b = b;
        this.operation = operation;
    }

    calculate(){
        switch(this.operation){
           
            case "addition":
                return this.a + this.b;
           
            case 'sub':
                return this.a - this.b;
           
            case 'mul':
                return this.a * this.b;
            
            case 'division':
                if(this.b === 0){
                    return "error: can't divide by zero "
                }
                return this.a / this.b;
            
            default:
                return "invalid operatoin! "
        }
    }
}

const cal1 = new calculator(2,3,"sub");
console.log('result:',cal1.calculate());