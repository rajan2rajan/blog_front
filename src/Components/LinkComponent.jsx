import React from "react";
import { Link } from "react-router-dom";

function LinkComponent(props) {
    return (
        <Link className={props.style} to={props.to}>
            {props.name}
        </Link>
    );
}

export default LinkComponent;
