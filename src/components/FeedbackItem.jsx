import Card from "./shared/Card"
import {FaTimes,FaEdit} from 'react-icons/fa'
import PropTypes from "prop-types"
import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackItem({item}){
    const {deleteFeedback,editFeedback} = useContext(FeedbackContext)
    // const [rating,setRating] = useState(7)
    // const [text] = useState('This is an example of feedback item')

    // const handleClick = () =>{
    //     setRating((prev)=>{
    //         return prev+1;
    //     })
    // } 
    // const handleClick = (id) =>{
    //     console.log(id)
    // }
    return (
        <Card >
            <div className="num-display">{item.rating}</div>
            <button  onClick = {()=> deleteFeedback(item.id)} className="close"><FaTimes color="purple"/></button>
            <button onClick={()=>editFeedback(item)} className="edit">
                <FaEdit color='purple'/>
            </button>
            <div className="text-display"> {item.text}</div>
            {/* <button onClick={handleClick}>Click</button> */}

        </Card>

    )
}
FeedbackItem.propTypes = {
    item : PropTypes.object.isRequired,
}

export default FeedbackItem