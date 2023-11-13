class NumberArray extends Array {
    constructor() {
        super();
        // defines a new property
        this.lastNumber = null;
    }
    // overrides an existing method
    push(num) {
        if(typeof num === "number") {
            super.push(num);
            this.lastNumber = num;
        } else {
            throw new TypeError(
                "NumberArray can only store numbers");
        }
    }
}

const arr = new NumberArray();
arr.push(1.07);
arr.push(2.21);
arr.push(3.14);
