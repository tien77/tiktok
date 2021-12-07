import { useState } from 'react'
import Content from './Content'

const courses = [
  {
    id: 1,
    name: 'khóa học HTML CSS'
  },
  {
    id: 2,
    name: 'Khóa học Javascript'
  },
  {
    id: 3,
    name: 'khóa học ReactJS'
  },
  {
    id: 4,
    name: 'khóa học PHP'
  }
]

function App() {

  // Hook useState
  /*
  const [counter, setCounter] = useState(1)
  const handleIncrease = () => {
    setCounter(counter + 1)
    // setCounter với callback
    // setCounter( prevState =>  prevState + 1)
    // setCounter( prevState =>  prevState + 1)
    // setCounter( prevState =>  prevState + 1)
    // setCounter( prevState =>  prevState + 1)
  }

  return (
    <div className="App" style={{ padding: 20 }}>
      <h1>{counter}</h1>
      <button onClick={handleIncrease}> Click </button>
    </div>
  ); */

  /*
  const gifArr = ['CPU I9', 'MOUSE 2021', 'LED IPS GL']
  const [gif, setGif] = useState()
  const handleGetGif = () =>  {
    let index = Math.floor(Math.random() * gifArr.length );
    console.log(index)
    setGif(gifArr[index])
  }
  return (
    <div className="App" style={{ padding: 20 }}>
      <h1>{ gif || 'Chưa có phần thưởng' }</h1>
      <button onClick={handleGetGif}> Get Gif </button>
    </div>
  );*/

  /*
  const [value, setValue] = useState('')
  console.log(value)
  return (
    <div className="App" style={{ padding: 20 }}>
      <input onChange={ e => setValue(e.target.value) } />
    </div>
  );*/

  /*
  // submit form type radio
  const [checked, setChecked] = useState(1)
  const handleSubmit = () => {
    //handle call API
    console.log('ID: ', checked);
  }
  return (
    <div className="App" style={{ padding: 20 }}>
      {
        courses.map( course => (
          <div key={course.id} >
            <input
              type="radio"
              checked={course.id === checked}
              onChange={ () =>  setChecked(course.id) }
            />
            <label>{course.name}</label>
          </div>
        ))
      }
      <button onClick={handleSubmit}> Submit </button>
    </div>
  ); */

  /*
// submit form type check
const [checked, setChecked] = useState([])
console.log(checked)
const handleCheck = (id) => {
  setChecked(prev => {
    const isChecked = checked.includes(id)
    if (isChecked) {
      return checked.filter( item => item !== id )
      // method filter() trả về arr mới thỏa điều kiện
    } else {
      return [...prev, id]
      //toán tử prev là giá trị trước đó, ...prev là giải mảng trước đó và truyền id mới nữa vào mảng
    }
  })
}
const handleSubmit = () => {
  //handle call API
  console.log('Ids: ', checked);
}
return (
  <div className="App" style={{ padding: 20 }}>
    {
      courses.map(course => (
        <div key={course.id} >
          <input
            type="checkbox"
            checked={checked.includes(course.id)}
              //includes method trả về true nếu mảng checked có giá trị id truyền vào, ngược lại là false
            onChange={() => handleCheck(course.id)}
          />
          <label>{course.name}</label>
        </div>
      ))
    }
    <button onClick={handleSubmit}> Submit </button>
  </div>
); */

  /* //example: todolist
  const [job, setJob] = useState('')
  const [jobs, setJobs] = useState( () => {

    // get value in Local Storage
    const storageJobs = JSON.parse(localStorage.getItem('jobs'))
    return storageJobs  ?? []
    // toán tử ?? (nullish), nếu storageJobs là null hoặc undefined thì sẽ lấy vế sau là []
  })

  const handleSubmit = () => {
    setJobs( prev => {
      const newJobs = [...prev, job]

      // save to local storage
      const jsonJobs = JSON.stringify(newJobs)
      localStorage.setItem('jobs',jsonJobs )

      return newJobs
    } )
    setJob('')
  }

  return (
    <div className="App" style={{ padding: 20 }}>
      <input 
        value={job}
        onChange={e=>setJob(e.target.value)}
      />
      <button onClick={handleSubmit} > Add </button>
      <ul>
        {jobs.map( (job, index) =>
          <li key={index}>{job}</li>
        )}
      </ul>
    </div>
  ); //End todolist */

  // Mounted & Unmounted
  const [show, setShow] = useState(false)
  return (
    <div className="App" style={{ padding: 20 }}>

      <button onClick={ () => setShow(!show) } > Toggle </button>
      { show && <Content /> }

    </div>
  ); // END: Mounted & Unmounted


}

export default App;
