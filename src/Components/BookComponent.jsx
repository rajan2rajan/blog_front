import React from "react";
import ButtonComponent from "./ButtonComponent";

function BookComponent(props) {
    return (
        <>
            <div className="col-4 my-3">
                <div className="card">
                    <img src={props.src} className="card-img-top rajan" alt={props.alt} />
                    <div className="card-body">
                        <p className="card-text">Name: {props.name}</p>
                        <p className="card-text">
                            Price {props.price} | isbn: {props.isbn}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BookComponent;
