import React, { useState } from 'react';
import Cell from './Cell';
import './Board.css';
import { fireEvent } from '@testing-library/react';

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

const Board = ({ nrows = 3, ncols = 3, chanceLightStartsOn = 0.25 }) => {
    const [board, setBoard] = useState(createBoard());

    /** create a board nrows high/ncols wide, each cell randomly lit or unlit */
    const createRow = (cols) => {
        let row = [];
        let isLit;
        for (let i = 0; i < cols; i++) {
            isLit = Math.random() < 0.5 ? true : false;
            row.push(isLit);
        }
        return row;
    };

    const createBoard = () => {
        let initialBoard;
        let boardArr = [];

        for (let i = 0; i < nrows; i++) {
            boardArr.push(createRow(ncols));
        }
        initialBoard = boardArr;
        return initialBoard;
    };

    const hasWon = () => {
        // TODO: check the board in state to determine whether the player has won.
    };

    const flipCellsAround = (coord) => {
        setBoard((oldBoard) => {
            const [y, x] = coord.split('-').map(Number);

            const flipCell = (y, x, boardCopy) => {
                // if this coord is actually on board, flip it

                if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
                    boardCopy[y][x] = !boardCopy[y][x];
                }
            };

            // TODO: Make a (deep) copy of the oldBoard

            // TODO: in the copy, flip this cell and the cells around it

            // TODO: return the copy
        });
    };

    // if the game is won, just show a winning msg & render nothing else

    // make table board
    const newTableBoard = createBoard();

    return (
        <div className='Board'>
            {newTableBoard.map((row) => {
                console.log(row);
                row.map((cell) => {
                    <Cell flipCellsAroundMe={flipCellsAround} isLit={cell} />;
                });
            })}
        </div>
    );
    // TODO
};

export default Board;
