export function ComponenteCarrusel({urlProp}) {

    return (
    <>
    <img style={
        {
            maxHeight: "200px",
            maxWidth: "200px"
        }
    } src={urlProp} />
    </>
    )
}