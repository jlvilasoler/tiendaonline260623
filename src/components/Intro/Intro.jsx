import "/src/components/Intro/Intro.scss"

const Intro = ({mensaje}) => {

    return (
        <div className="introduccion">
                <h1> Bienvenidos al primer supermercado on-line del Uruguay </h1>
                <p>{mensaje}</p>
                <hr/>
        </div>
    )}

export default Intro