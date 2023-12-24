import './tag.css'

const Tag = ({ icon, description }) => {
    return (
        <div id="tag">
            <div id="tag-icon">
                { icon }
            </div>

            <div id="tag-description">
                { description }
            </div>
        </div>
    )
}

export default Tag