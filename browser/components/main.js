import React from 'react'
import axios from 'axios';

class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            allStudents: []
        }
    }

    async componentDidMount() {
        const response = await axios.get('/student')
        const students = response.data
        this.setState({ allStudents: students })
    }

    render() {
        return (
            <div>
                <h1>Students</h1>
                <h3>Name</h3>
                <ul>
                    {this.state.allStudents.map(student => <li key={student.id}>{student.fullName}</li>)}
                </ul>
            </div>
        )
    }

}

module.exports = Main