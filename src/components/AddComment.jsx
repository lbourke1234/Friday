import { Component } from "react"
import { Form, Button, } from "react-bootstrap"




class AddComment extends Component {

    state = {
        review: {
            comment: '',
            rate: '',
            elementId: this.props.asin
        }
    }


        


    fetchData = async () => {
        try {

            const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.asin}`, {
                method: 'POST',
                body: JSON.stringify(this.state.review),
                headers: {
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU2YmQxZGE5MDIzOTAwMTVkOTY1YzgiLCJpYXQiOjE2NTA2MzM2MDQsImV4cCI6MTY1MTg0MzIwNH0.f_pAW-6v_gZNed-ErZFdbjco3Bd-YIoERJJcFpj_7Q8',
                    "Content-type": "application/json"
                }
            })
            const body = await response.json()
            this.setState({
                commentsArray: body
            })
            alert('Added review successfully')
            // console.log(this.state.commentsArray)

            
        } catch (error) {
            console.log(error, "error")
        }
    }

    render() {
return (

    <Form>
       <Form.Group controlId="exampleForm.ControlInput1">
    
    </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Comment</Form.Label>
    <Form.Control
      as="textarea"
      placeholder="Leave a comment here"
      onChange={e => (this.setState({
          review: {
              ...this.state.review,
            comment: e.target.value
          }
          
      }))}
    />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Rating</Form.Label>
    <Form.Control as="select" 
        onChange={e => {
            this.setState({
                review: {
                    ...this.state.review,
                    rate: e.target.value
                }
            })
        }}
    >
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
  <Button onClick={this.fetchData} className="mb-3" variant="secondary">Post Review</Button>{' '}
</Form>
)
    }
}




export default AddComment