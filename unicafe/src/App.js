import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
 
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
  

  return (
    <div>
      <h1>give feedback</h1>
    <button onClick={() => setGood(good +1)}>Good </button> 
    <button onClick={() => setNeutral(neutral +1)}>Neutral</button>
    <button onClick={() => setBad(bad +1)}>Bad</button> 
    <h1>Statistics</h1>
    <Statistic {...{good, neutral, bad}}/> 

    </div>
  )

  
}




const Statistic = ({good,neutral,bad}) => {

if ((good+neutral+bad)===0){
  return(
    <p>No feedback given</p>


  )
}
  else {
    return(
    <div>
      <table>
      <tbody>
        <tr>
          <td>good</td>
          <td>{good}</td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <td>neutral</td>
          <td>{neutral}</td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <td>bad</td>
          <td>{bad}</td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <td>all</td>
          <td>{good+neutral+bad}</td>
        </tr>
      </tbody>
      <tbody>
      <tr>
        <td>average</td>
        <td>{(good-bad)/(good+neutral+bad)}</td>
      </tr>
      </tbody>
      <tbody>
      <tr>
        <td>positive</td>
        <td>{(good)/(good+neutral+bad)}</td>
      </tr>
      </tbody>
    </table>
    </div>
    
    )
  }
}







export default App