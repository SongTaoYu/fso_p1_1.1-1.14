import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
  const initialVotes = { 0: 0, 1: 0, 2: 0, 3: 0, 4:0, 5:0, 6:0 }
  
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(initialVotes)

  const handleSetVote = (previousVotes) => {
    const newVotes = {...previousVotes}
    newVotes[selected] += 1
    setVotes(newVotes)
  }
  const anecdoteOTD = (...votes) =>{
    const arr = Object.values(...votes)
    const max = Math.max(...Object.values(...votes))
    const index = arr.indexOf(max)
    
    if (max>0){
    return (<>{anecdotes[index]}<br></br>has {max} votes</>)}
    else {
    return ("No votes tallied")} 
    
    }
  
  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <br></br>
      has {votes[selected]} votes
      <br></br>
      <button onClick ={()=> handleSetVote(votes)}>Vote</button>
      <button onClick={()=> setSelected(Math.floor(Math.random()* anecdotes.length ))}>next anecdotes</button>
      <br></br>
      <h1>Anecdote with the most likes</h1>
      {anecdoteOTD(votes, anecdotes)}
    </div>
  )
}





export default App