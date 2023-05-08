import Car from "./Car";

const List = ({ cars, save }) => {
    return ( 
        <div className="list">
            {cars && cars.map((car) => (
                <Car car={car} key={car.id} save={save}/>
            ))}
        </div>
     );
}
 
export default List;