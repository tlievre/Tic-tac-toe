export class Player {
    #x;
    #y;
    #shape;

    constructor(x = undefined, y = undefined, shape = 'Circle') {
        this.#x = x;
        this.#y = y;

        if (shape == "Circle" || shape == "circle" ||
         shape == "Cross" || shape == "cross") {
            this.#shape = shape;
        }
        else {
            throw new Error('Wrong shape parameter')
        }      
    }

    get_shape() {
        let c_shape;
        if (this.#shape == "Circle") {
            c_shape = "o"
        }
        else {
            c_shape = "x"
        }
        return c_shape;
    }

    get x() {
        return this.#x;
    }

    get y() {
        return this.#y;
    }

    get shape() {
        return this.#shape;
    }

    set x(x) {
        this.#x = x; 
    }

    set y(y) {
        this.#y = y;
    }
}