import React, { Component } from 'react'
import firebase from 'firebase'

class ClassMessage extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             studentlist : []
        }
    }
    

    componentDidMount(){
        firebase.database().ref("students").on("value",snapshot=>{
            let students=[];
            snapshot.forEach(snapshot=>{
                students.push(snapshot.val());
            })
            this.setState({studentlist : students})
        })
    }

    render() {
        return (
            <div>
                Hello
                {
                    this.state.studentlist.map(data=>{
                        return (
                            <tr>
                            <td>{data.name} </td>
                            <td>{data.age} </td>
                            <td>{data.contact} </td>
                            </tr>
                        );
                    })
                }
            </div>
        )
    }
}

export default ClassMessage
