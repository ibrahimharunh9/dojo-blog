import { Link } from "react-router-dom";

const NoteFound = () => {
    return (
        <div className="note-found">
            <h1>SORRY</h1>
            <p>That can be found</p>
            <Link to="/"> Back to the page</Link>
        </div>
    );
}
 
export default NoteFound;