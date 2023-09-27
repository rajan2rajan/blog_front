import React from "react";

function InputComponent(props) {
    return (
        <>
            <label for="exampleFormControlInput1" className="form-label">
                {props.label}
            </label>
            <input
                type={props.type}
                className="form-control"
                id={props.id}
                name={props.name}
                value={props.value}
                placeholder={props.placeholder}
                onChange={props.onChange}
            />
        </>
    );
}

export default InputComponent;
