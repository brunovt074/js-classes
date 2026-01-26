export function Input(props) {

    // Recibe por props onChange y placeholder

    return(
    <>
        <input 
            onChange={props.onChange}
            placeholder={props.placeholder}
            type="text"
        >
        </input>
    </>
    )
}