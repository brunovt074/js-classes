"use client"; 

export default function CampoTexto({ label, onChange, value, type }) {
    return (
        <div style={{ margin: "10px 0" }}>
            <label>{label}: </label>
            <input 
                type={type} 
                onChange={onChange} 
                value={value}
            />
        </div>
    );
}