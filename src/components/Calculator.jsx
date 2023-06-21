import React, { Children, useState } from 'react'
import './Cal.css'

const App = () => {
  const [expressions, UpdateExpList] = useState([]);
  const [curr_exp, setExp] = useState('');

  const clearExp = () => {
    setExp('');
  }

  const evalExp = () => {
    var abcd;
    try {
      abcd = eval(curr_exp);
      abcd = curr_exp + " = " + abcd;
      document.getElementById("ans").innerHTML = abcd;
      UpdateExpList((oldExp) => [...oldExp, abcd]);
    } catch (error) {
      alert("Enter valid expression!")
    }
    clearExp();
  }

  const handleClick = (e) => {
    console.log(curr_exp + e.target.innerText);
    setExp(curr_exp + e.target.innerText);
  }

  return (
    <>
      <div style={{ textAlign: "center", paddingTop: "30px"}}><h2 style={{fontWeight:"bold",color:"red"}}>My Calculator</h2></div>
      <div id='abcd'>
        <div className="outer">
          <div className="inner">
            <table>
              <tr>
                <td colSpan={4} style={{ backgroundColor: "black", color: "white" }} id='ans'></td>
              </tr>
              <tr>
                <td id="clear" onClick={clearExp}>C</td>
                <td colSpan="3" id="screen">{curr_exp}</td>
              </tr>
              <tr>
                <td onClick={handleClick}>7</td>
                <td onClick={handleClick}>8</td>
                <td onClick={handleClick}>9</td>
                <td onClick={handleClick}>/</td>
              </tr>
              <tr>
                <td onClick={handleClick}>4</td>
                <td onClick={handleClick}>5</td>
                <td onClick={handleClick}>6</td>
                <td onClick={handleClick}>*</td>
              </tr>
              <tr>
                <td onClick={handleClick}>1</td>
                <td onClick={handleClick}>2</td>
                <td onClick={handleClick}>3</td>
                <td onClick={handleClick}>-</td>
              </tr>
              <tr>
                <td onClick={handleClick}>0</td>
                <td onClick={handleClick}>.</td>
                <td onClick={evalExp}>=</td>
                <td onClick={handleClick}>+</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default App