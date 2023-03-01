export class Board {
    #length;
    #height;
    #cells;

    constructor(l = 3, h = 3) {
        this.#cells = new Array(l * h).fill('.');
        this.#length = l
        this.#height = h
    }

    get length() {
        return this.#length;
    }

    get height() {
        return this.#height;
    }

    get_cell(x, y) {
        return this.#cells[x * this._height + y];
    }

    set_cell(x, y , value) {
        this.#cells[x * this._height + y] = value;
    }

    display() {
        let value;
        let buffer = ' ';
        for (let y = 0; y < this._height; y++) {
            for (let x = 0; x < this._length; x++) {
                value = this.#cells[x * this._height + y]
                buffer += value.toString();
            }
            console.log(buffer)
            buffer = ' ';
        }
    }

    #diplay_canvas() {
        

    }

    _clear() {
        this.#cells.fill(0)
    }


}