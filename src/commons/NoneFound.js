import React from "react";

export default function NoneFound({ message = "None Found" }) {
    return <div className="none-found">{message}</div>;
}
