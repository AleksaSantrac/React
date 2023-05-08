const Car = ({ car, save }) => {
    return ( 
        <div className="Container">
            <div className="car">
            <div className="image"/>
            <div className="details">
                Model: {car.model} <br />
                Price: {car.price} $ <br />
                Manufacturer: {car.make}
            </div> 
            <button className="btn" onClick={() => save(car)}>Save</button>
            </div>
        </div>
        
     );
}
 
export default Car;