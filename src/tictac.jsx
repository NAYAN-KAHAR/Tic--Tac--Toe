import { useState } from "react";
import Square from './square';

const TicTac = () => {
 const [num, setNum] = useState(Array(9).fill(null));
 const [condition, setCondition] = useState(true);

 const handleGame = (index) => {
  if(num[index] !== null) return;
  const copyArray = [...num];
  copyArray[index] = condition?"X":"0";
  setNum(copyArray);
  setCondition(!condition);
 };

const checkWinner = () => {
 const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6],
  ];

  for(let i=0; i<winningCombinations.length; i++){
    const [a,b,c] = winningCombinations[i];
     if(num[a] !== null && num[a] === num[b] && num[b] === num[c]){
        return num[a];
      }
   }
   return false;
 }

 const result = checkWinner();
 
 //Play Agian Logic
 const playAgain = () => {
  setNum(Array(9).fill(null));
 }
  return (

    <div className="container">
    {result?null : (<>
      <h1 className="head">Tic Tac Toe</h1>
      <h2 className="head">{condition?"X":"0"} Your Turn</h2>
      </>)
     }
     
    {result ?
    <div className="result">
    <h2>{result}:You Win</h2>
    <button onClick={playAgain}>Play Again</button>
    </div>:(
      <>
      <div className="row">
        <Square onClick={() => handleGame(0) }  value ={num[0]} />
        <Square onClick={() => handleGame(1) }  value ={num[1]} />
        <Square onClick={() => handleGame(2) }  value ={num[2]} />
        </div>

         <div className="row">
         <Square onClick={() => handleGame(3) } value ={num[3]} />
         <Square onClick={() => handleGame(4) } value ={num[4]} />
         <Square onClick={() => handleGame(5) } value ={num[5]} />
        </div>

         <div className="row">
         <Square onClick={() => handleGame(6) } value ={num[6]} />
         <Square onClick={() => handleGame(7) } value ={num[7]} />
         <Square onClick={() => handleGame(8) } value ={num[8]} />
        </div>
       </>)
       }

       </div>
 
  );
};

export default TicTac;


