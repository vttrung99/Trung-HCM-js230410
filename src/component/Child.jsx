import React, { useState } from 'react'

export default function Child(props) {
  const [language, setLanguage] = useState('');
  const [role, setRole] = useState('Modulator');
  const [selectedDate, setSelectedDate] = useState('');
  const [name, setName] = useState('');
  return (
    <div style={{display: "flex"}}> 
      <div>
        <span>@</span>
        <input value={language} onChange={(event) => {
          setLanguage(event.target.value)
        }} placeholder='ngon ngu'/>
      </div>
      <div>
      <select value={role} onChange={(event) => {
          setRole(event.target.value)
        }} className="form-control category-select" id="exampleFormControlSelect1">
          <option value="Modulator">Modulator</option>
          <option value="Admin">Admin</option>
          <option value="User">User</option>
          <option value="Subscriber">Subscriber</option>
        </select>
      </div>
      <div>
      <input type='date' onChange={(event) => {
         setSelectedDate(event.target.value);
      }} value={selectedDate} />
      </div>
      <div>
        <span>@</span>
        <input value={name} onChange={(event) => {
          setName(event.target.value)
        }} placeholder='ten'/>
      </div>
      <div>
        <button onClick={() => {
          props.addIter({
            language: language,
            position: role,
            dayOfBirth: selectedDate,
            name: name
          })
        }} >sumit</button>
      </div>
    </div>
  )
}
