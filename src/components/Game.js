import React from 'react';
import '../game.css'
import {useState, useEffect} from 'react'
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

function Game(props) {
    const [score, setScore] = useState({
        scores: ['1', '2', '3', '4', '5', '6', '7', '8', '9']
    });
    const [x1, setX1] = useState('');
    const [x, setX] = useState(false);
    const [x2, setX2] = useState('');
    const [x3, setX3] = useState('');
    const [x4, setX4] = useState('');
    const [x5, setX5] = useState('');
    const [x6, setX6] = useState('');
    const [x7, setX7] = useState('');
    const [x8, setX8] = useState('');
    const [x9, setX9] = useState('');
    const [count, setCount] = useState(0);
    const [isOpen, setIsOpen] = useState(true);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [players, setPlayers] = useState({
        player1: '',
        player2: ''
    });

    function getPlayerValue(event) {
        event.preventDefault();
        players.player1 = event.target.player1.value;
        players.player2 = event.target.player2.value;
        let a = {...players};
        setPlayers(a);
        changeModal()
    }


    function changeModal() {
        setIsOpen(!isOpen)
    }

    function changeModal3() {
        setIsOpen3(!isOpen3)
    }

    function changeModal2() {
        setIsOpen2(!isOpen)
    }


    useEffect(() => {
        if (score.scores[0] === score.scores[1] && score.scores[0] === score.scores[2] ||
            score.scores[0] === score.scores[3] && score.scores[0] === score.scores[6] ||
            score.scores[0] === score.scores[4] && score.scores[0] === score.scores[8] ||
            score.scores[2] === score.scores[4] && score.scores[2] === score.scores[6] ||
            score.scores[1] === score.scores[4] && score.scores[1] === score.scores[7] ||
            score.scores[2] === score.scores[5] && score.scores[2] === score.scores[8] ||
            score.scores[3] === score.scores[4] && score.scores[3] === score.scores[5] ||
            score.scores[6] === score.scores[7] && score.scores[6] === score.scores[8]) {
            changeModal2()
        }
    });


    function changeX() {
        setCount(count => count + 1);
        console.log(count);
        if (count === 8) {
            changeModal3()
        }
        setX(!x);
    }

    function changeX1() {
        if (x) {
            setX1('X');
            score.scores[0] = 'X';
            let a = {...score};
            setScore(a)

        } else {
            setX1('0');
            score.scores[0] = '0';
            let a = {...score};
            setScore(a)

        }
    }

    function changeX2() {
        if (x) {
            setX2('X');
            score.scores[1] = 'X';
            let a = {...score};
            setScore(a)
        } else {
            setX2('0');
            score.scores[1] = '0';
            let a = {...score};
            setScore(a)
        }
    }

    function changeX3() {
        if (x) {
            setX3('X');
            score.scores[2] = 'X';
            let a = {...score};
            setScore(a)
        } else {
            setX3('0');
            score.scores[2] = '0';
            let a = {...score};
            setScore(a)
        }
    }

    function changeX4() {
        if (x) {
            setX4('X');
            score.scores[3] = 'X';
            let a = {...score};
            setScore(a)
        } else {
            setX4('0');
            score.scores[3] = '0';
            let a = {...score};
            setScore(a)
        }
    }

    function changeX5() {
        if (x) {
            setX5('X');
            score.scores[4] = 'X';
            let a = {...score};
            setScore(a)
        } else {
            setX5('0');
            score.scores[4] = '0';
            let a = {...score};
            setScore(a)
        }
    }

    function changeX6() {
        if (x) {
            setX6('X');
            score.scores[5] = 'X';
            let a = {...score};
            setScore(a)
        } else {
            setX6('0');
            score.scores[5] = '0';
            let a = {...score};
            setScore(a)
        }
    }

    function changeX7() {
        if (x) {
            setX7('X');
            score.scores[6] = 'X';
            let a = {...score};
            setScore(a)
        } else {
            setX7('0');
            score.scores[6] = '0';
            let a = {...score};
            setScore(a)
        }
    }

    function changeX8() {
        if (x) {
            setX8('X');
            score.scores[7] = 'X';
            let a = {...score};
            setScore(a)
        } else {
            setX8('0');
            score.scores[7] = '0';
            let a = {...score};
            setScore(a)
        }
    }

    function changeX9() {
        if (x) {
            setX9('X');
            score.scores[8] = 'X';
            let a = {...score};
            setScore(a)
        } else {
            setX9('0');
            score.scores[8] = '0';
            let a = {...score};
            setScore(a)
        }
    }

    return (
        <main>
            <div className="status">
                Yurish navbati: {x ? players.player2 : players.player1} ({x ? 'X' : '0'})
            </div>
            <div className="container1">
                <div className="board">
                    <div onClick={() => {
                        changeX1();
                        changeX()
                    }} className="cell">{x1 ? x1 : ''}</div>
                    <div onClick={() => {
                        changeX2();
                        changeX()
                    }} className="cell">{x2 ? x2 : ''}</div>
                    <div onClick={() => {
                        changeX3();
                        changeX()
                    }} className="cell">{x3 ? x3 : ''}</div>
                    <div onClick={() => {
                        changeX4();
                        changeX()
                    }} className="cell">{x4 ? x4 : ''}</div>
                    <div onClick={() => {
                        changeX5();
                        changeX()
                    }} className="cell">{x5 ? x5 : ''}</div>
                    <div onClick={() => {
                        changeX6();
                        changeX()
                    }} className="cell">{x6 ? x6 : ''}</div>
                    <div onClick={() => {
                        changeX7();
                        changeX()
                    }} className="cell">{x7 ? x7 : ''}</div>
                    <div onClick={() => {
                        changeX8();
                        changeX()
                    }} className="cell">{x8 ? x8 : ''}</div>
                    <div onClick={() => {
                        changeX9();
                        changeX()
                    }} className="cell">{x9 ? x9 : ''}</div>
                </div>
            </div>
            <Modal isOpen={isOpen} toggle={changeModal}>
                <ModalHeader><h3>Players</h3></ModalHeader>
                <ModalBody className="bg-dark">
                    <div className="row mb-5">
                        <div className="col-md-8 offset-2">
                            <div className="card">
                                <div className="card-body">
                                    <form onSubmit={getPlayerValue}>
                                        <label>1-O'yinchi</label>
                                        <input required className="form-control mb-3" type="text" name="player1"
                                               placeholder="Player1"/>
                                        <label>2-O'yinchi</label>
                                        <input required className="form-control mb-3" type="text" name="player2"
                                               placeholder="Player2"/>
                                        <button type="submit" className="btn btn-success form-control mt-2">Start
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </ModalBody>
            </Modal>

            <Modal isOpen={isOpen2} toggle={changeModal2}>
                <ModalHeader><h3>Natija</h3></ModalHeader>
                <ModalBody className="bg-dark">
                    <div className="row mb-5">
                        <div className="col-md-12 ">
                            <div className="card">
                                <div className="card-body text-center">
                                    <img className="img-fluid" src="images/cong2.jpg" alt=""/>

                                    <h4 className="my-4">{x ? players.player1 : players.player2} yutding, qoyil
                                        lekin.</h4>
                                    <a href="" className="text-white text-decoration-none">
                                        <button className="btn btn-danger btn-block" type="button">Chiqish</button>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </ModalBody>
            </Modal>

            <Modal isOpen={isOpen3} toggle={changeModal3}>
                <ModalHeader><h3>Natija</h3></ModalHeader>
                <ModalBody className="bg-dark">
                    <div className="row mb-5">
                        <div className="col-md-12 ">
                            <div className="card">
                                <div className="card-body text-center">
                                    <img className="img-fluid" src="images/dostlik.jpg" alt=""/>

                                    <h4 className="my-4">Do'stlik g'alaba qozondi.</h4>
                                    <a href="" className="text-white text-decoration-none">
                                        <button className="btn btn-danger btn-block" type="button">Chiqish</button>
                                    </a>

                                </div>

                            </div>
                        </div>
                    </div>
                </ModalBody>
            </Modal>


        </main>

    );
}

export default Game;