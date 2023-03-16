import {FaRegCircle,FaTimes,FaPen} from "react-icons/fa";

const Icon = ({user_icon}) => {
    
    switch(user_icon){
        case "circle":
            return <FaRegCircle /> 
        case "cross":
            return <FaTimes />
        default:
            return <FaPen />
    }
}

export default Icon;