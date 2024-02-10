import * as data from './text.json'
import './mv.css'

const Mv = () => {
    return (
        <div id="objetivos">
            <div id="mision">
                <div className="left">
                    <img src="mision.webp" alt="innovacion gastronomica" />
                </div>

                <div className="right mv-text">
                    <div className="mv-title">
                        Misión
                    </div>

                    <div className="mv-description">
                        { <div>{ data.data[0] }</div> }
                    </div>
                </div>
            </div>

            <div id="vision">
                <div className="left mv-text">
                    <img src="vision.webp" alt="imagen de vision para comida rapida" />
                </div>
                <div className="right">
                    <div className="mv-title">
                        Visión
                    </div>

                    <div className="mv-description">
                        { <div>{ data.data[1] }</div> }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mv