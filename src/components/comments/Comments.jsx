// datos
import * as data from './comments.json'

import './comments.css'

const Comments = () => {
    const comments = data.data

    return (
        <div id="comments">
            <div id="comments-title">
                <h1>Porque el público lo dice!</h1>
            </div>

            <div className="comments-content">
                {
                    comments.map( c => (
                        <div className="comment" key={c.id}>
                            &ldquo;{c.comment}&rdquo;
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Comments
