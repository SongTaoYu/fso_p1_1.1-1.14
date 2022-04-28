import React from "react"

const App = () => {
  const course = { 
  
      name: 'Half Stack application development',
      parts: [
 
      { 
      name: 'Fundamentals of React',
      exercise: 10
      },
      { 
      name: 'Using props to pass data',
      exercise: 7
      },
      { 
      name: 'State of a component',
      exercise: 14
      }
    ]
  }

  return (
   <div>
      <Header course={course} />
      <Content course = {course}/>
      <Total course = {course}/>

    </div>
    
  )

}
const Header = (props) => {
  return (
    <div>
      <p> Course Name: {props.course.name} </p>
      
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <p> Parts: {props.course.parts[0].name} || Number of Exercise: {props.course.parts[0].exercise} </p>
      <p> Parts:  {props.course.parts[1].name} || Number of Exercise: {props.course.parts[1].exercise} </p>
      <p> Parts:  {props.course.parts[2].name} || Number of Exercise: {props.course.parts[2].exercise} </p>

    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p> Total numberr of exercise: {props.course.parts[0].exercise + props.course.parts[1].exercise + props.course.parts[2].exercise} </p>
    </div>
  )
}


export default App;