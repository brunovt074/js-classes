"use client"; // Obligatorio porque recibe onClick

export default function Boton({ text, onClick }) {
    return (
        <button 
            onClick={onClick} 
            style={{ 
                padding: "10px 20px", 
                backgroundColor: "#0070f3", 
                color: "white", 
                border: "none", 
                borderRadius: "5px",
                cursor: "pointer"
            }}
        >
            {text}
        </button>
    );
}