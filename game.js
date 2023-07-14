import { Player } from "./module/player.js";
import { Board } from "./module/board.js";

export class Game {
    #player1;
    #player2;
    #board
    #round; // 1 or 2

    constructor() {
        this.#player1 = new Player("Circle");
        this.#player2 = new Player("Cross");
        this.#board = new Board()
        this.#round = Math.floor((Math.random() * 3));
    }

    get player1() { return this.#player1; }

    get player2() { return this.#player2; }

    #play(x, y) {

        if(x < 0 || y >= 3) {
            throw(`player ${this.#round} is out of the board`);
        }

        if (this.#round == 1) {
            this.#player1.x = x;
            this.#player1.y = y;
            this.#board.set_cell(x, y, this.#player1.get_shape()); 
        }
        else {
            this.#player2.x = x;
            this.#player2.y = y;
            this.#board.set_cell(x, y, this.#player2.get_shape()); 
        }
    }

    #is_winner() {
        let win = false;
        let flag = true;

        for (let x = 0; !win && x < this.#board.length; x++) {
            for (let y = 0; flag && y < this.#board.height; y++) {
                if (this.#board[x * this.#board.height + y] != this.#round) {
                    flag = false;
                }
            }
            win = flag;
        }
        return win;
    }

    #next_round() {
        this.#round = (this.#round == 1) ? 2 : 1;
    }

    run() {
        // let x,y;

        // do {
        //     this.#next_round();
        //     console.log("player ",this.#round);
        //     x = prompt("x = ");
        //     y = prompt("y = ");
        //     this.#play(x, y);
        //     this.#board.display();
        // } while (!this.#is_winner());
        console.log('round:', this.#round)
        this.#play(2, 2);
        this.#board.display();
    }

}