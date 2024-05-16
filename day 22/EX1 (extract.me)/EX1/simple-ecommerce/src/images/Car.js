function Car(pros){
   const {brand}=pros
    const text=`hi i ma a ${brand}car`;
    return(
        <h2>{text}</h2>
    )
}
export default Car;