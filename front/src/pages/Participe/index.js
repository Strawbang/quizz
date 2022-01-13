import NewQuizz from "../../components/NewQuizz";
import { useLocation } from 'react-router-dom'

const Participe = () => {
    const location = useLocation();
    return(
        <>
            <NewQuizz question_id={location.state}/>
        </>
    )
}

export default Participe;