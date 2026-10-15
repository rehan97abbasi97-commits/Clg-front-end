import React, { useState } from 'react'

function StudentScreen() {
  const [studens, setStudents] = useState(

    [
      {
        "id": 1,
        "name": "Rahul Sharma",
        "age": 20,
        "course": "BCA",
        "semester": 3,
        "city": "Jodhpur",
        "marks": 85,
        "isActive": true
      },
      {
        "id": 2,
        "name": "Aman Khan",
        "age": 21,
        "course": "BCA",
        "semester": 5,
        "city": "Jaipur",
        "marks": 78,
        "isActive": true
      },
      {
        "id": 3,
        "name": "Priya Verma",
        "age": 19,
        "course": "BBA",
        "semester": 2,
        "city": "Udaipur",
        "marks": 92,
        "isActive": true
      },
      {
        "id": 4,
        "name": "Rohit Singh",
        "age": 22,
        "course": "BCA",
        "semester": 6,
        "city": "Jodhpur",
        "marks": 67,
        "isActive": false
      },
      {
        "id": 5,
        "name": "Neha Patel",
        "age": 20,
        "course": "BSc IT",
        "semester": 4,
        "city": "Ahmedabad",
        "marks": 88,
        "isActive": true
      },
      {
        "id": 6,
        "name": "Mohit Joshi",
        "age": 21,
        "course": "BCA",
        "semester": 5,
        "city": "Kota",
        "marks": 74,
        "isActive": true
      },
      {
        "id": 7,
        "name": "Sneha Gupta",
        "age": 19,
        "course": "BBA",
        "semester": 2,
        "city": "Delhi",
        "marks": 95,
        "isActive": true
      },
      {
        "id": 8,
        "name": "Arjun Mehta",
        "age": 22,
        "course": "BSc IT",
        "semester": 6,
        "city": "Mumbai",
        "marks": 81,
        "isActive": false
      },
      {
        "id": 9,
        "name": "Pooja Kumari",
        "age": 20,
        "course": "BCA",
        "semester": 4,
        "city": "Bikaner",
        "marks": 89,
        "isActive": true
      },
      {
        "id": 10,
        "name": "Vikas Yadav",
        "age": 21,
        "course": "BCom",
        "semester": 5,
        "city": "Ajmer",
        "marks": 72,
        "isActive": true
      }
    ]

  )
  return (
    <div>
      <table border="1" className='w-300'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>Semester</th>
            <th>City</th>
            <th>Marks</th>

          </tr>
        </thead>
        <tbody>
          {
            studens.map((obj) => {
              return (
                <tr className='text-center'>
                  <td>{obj.name}</td>
                  <td>{obj.age}</td>
                  <td>{obj.course}</td>
                  <td>{obj.semester}</td>
                  <td>{obj.city}</td>
                  <td>{obj.marks}</td>

                </tr>
              )
            })
          }
        </tbody>
      </table>

    </div>
  )
}

export default StudentScreen
