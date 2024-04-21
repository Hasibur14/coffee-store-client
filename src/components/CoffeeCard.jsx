import editImage from '../assets/images/Frame (8).png';
import viewImage from '../assets/images/Frame (9).png';
import deleteImage from '../assets/images/delete 1.png';


const CoffeeCard = ({ coffee }) => {

    const { name, quantity, supplier, taste, category, details, photo } = coffee;
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img className="p-8  h-96 w-96" src={photo} alt="Movie" /></figure>
                <div className=" flex justify-between w-full pr-4 p-10">
                   <div>
                   <h2 className="card-title">Name:{name}</h2>
                    <p> Quantity: {quantity}</p>
                    <p>Chef: {supplier}</p>
                    <p>Taste: {taste}</p>
                   </div>
                    <div className="card-actions justify-end">
                        <div className="join join-vertical space-y-4">
                            <button className="btn join-item bg-yellow-600 text-white"><img src={viewImage} alt="" /> View</button>
                            <button className="btn join-item bg-black text-white" ><img src={editImage} alt="" /> Edit</button>
                            <button className="btn join-item bg-red-500 text-white"><img src={deleteImage} alt="" /> Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;

