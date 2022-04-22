
import { Component } from "react";
import {ListGroup} from 'react-bootstrap'


class CommentList extends Component {

    state = {
        commentsArray: []
        
    }

    componentDidMount = () => {
        
        this.fetchData()

    }

    fetchData = async () => {
        try {

            const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.asin}`, {
                headers: {
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU2YmQxZGE5MDIzOTAwMTVkOTY1YzgiLCJpYXQiOjE2NTA2MzM2MDQsImV4cCI6MTY1MTg0MzIwNH0.f_pAW-6v_gZNed-ErZFdbjco3Bd-YIoERJJcFpj_7Q8'
                }
            })
            const body = await response.json()
            this.setState({
                commentsArray: body
            })
            console.log(this.state.commentsArray)

            
        } catch (error) {
            console.log(error, "error")
        }
    }


    render() {
        return (
            <ListGroup>
                {this.state.commentsArray.map(c => (
                    <ListGroup.Item key={c._id} style={{color: 'black', fontSize: '.5em'}}>{c.comment}</ListGroup.Item>

                ))}

            </ListGroup>
        )
    }
}

export default CommentList