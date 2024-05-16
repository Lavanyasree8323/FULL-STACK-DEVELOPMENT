
function Car(props) {
    const { brand } = props
    const text = `Hi, Im a ${brand} Car`;
    return (

    <h2>{text}</h2>
    );    
}
    
export default Car;