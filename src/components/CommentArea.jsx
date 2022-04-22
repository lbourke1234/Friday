import AddComment from "./AddComment";
import CommentList from "./CommentsList";


/*

props = {
    name:"leon"
}

*/


const CommentArea = (props) => (
    <>
    <AddComment asin={props.asin} />
    <CommentList asin={props.asin} />
    </>
    
)

export default CommentArea