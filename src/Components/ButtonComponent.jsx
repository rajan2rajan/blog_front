import React from "react";

function ButtonComponent(props) {
    if (props.type === "submit") {
        return (
            <button className={`btn btn-${props.style}`} type={props.type}>
                {props.name}
            </button>
        );
    } else
        return (
            <button className={`btn btn-${props.style}`} type="button" onClick={props.operation}>
                {props.name}
            </button>
        );
}

export default ButtonComponent;
