
import { useState } from "react";
import Icon from "./Components/Icon";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const tiktoctoeArray = new Array(9).fill("");
const App = () => {
    
    //tiktoctoeArray = new Array(9)
    //tiktoctoeArray.fill("hello")
    // console.log(tictoktoeArray.length)
    // *excutive above 3 lines code in onecompliler u will understand below line.

    // const tiktoctoeArray = new Array(9).fill("");
    const [isCross, setIsCross] = useState(true);
    // const [isCross, setIsCross] = useState(false);
    const [winMessage, setWinMessage] = useState("");
    // const [winMessage, setWinMessage] = useState("X is winner");

    //logic

    //playing again

    function playAgain(){
        tiktoctoeArray.fill("");
        setIsCross(true);
        setWinMessage("");
    }

    //winner

    function findWinner (){
     let winPossibilites = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
       let isWinner = false;
       for( let t of winPossibilites){
        let[a,b,c] = t; // 0,1,2
        if(tiktoctoeArray[a] == tiktoctoeArray[b] && tiktoctoeArray[a] == tiktoctoeArray[c] && tiktoctoeArray[a] != ""){
            setWinMessage(tiktoctoeArray[t[a]] + " has won");
        }
       }
       //draw 

       if(tiktoctoeArray.indexOf("") == -1 && isWinner== ""){
        // console.log("Game Tied");
        // console.log(tiktoctoeArray.indexOf(""));
        // console.log(winMessage);
        setWinMessage("Game Tied")
        isWinner = true;
       }
    }

    //userturn
    
    function userTurn(index){

        // console.log("Execueted user turn" , index)
        if (winMessage != ""){
            return toast("Game has already been over");

        }

        if(tiktoctoeArray[index] !=""){
            return toast("Already filled")

        }
        tiktoctoeArray[index] = isCross == true ? "cross" : "circle";
        setIsCross(!isCross);
        findWinner();
    }

    return(
        <div>
            <ToastContainer position="bottom-center"/>
            {
            winMessage == "" ? (
                <h1>{isCross == true ? "Cross Turn"  : "Circle Turn"}</h1>
            ) : (
                <div className="afterWin"> 
                    <h1>{winMessage}</h1>
                    <div>
                    <button onClick={playAgain}>play Again</button>
                    </div>
                </div>
                )
            }


            <div className="grid">
                {
                    tiktoctoeArray.map((value , index)=>(
                        <div onClick={()=>userTurn(index)}>
                            <Icon user_icon={value} />
                        </div>   
                    ))
                }

            </div>
              

        </div>
    );

}


export default App;