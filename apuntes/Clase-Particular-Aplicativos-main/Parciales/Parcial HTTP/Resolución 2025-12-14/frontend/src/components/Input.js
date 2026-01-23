export function Input({ onChange, placeholder }) {


    return (
        <div>
            <input
                type={"text"}
                onChange={ onChange }
                placeholder={ placeholder }
            ></input>
        </div>
    )
}