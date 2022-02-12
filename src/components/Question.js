import React from "react";
import Button from "./Button";

export default function Question(props) {
    return (
        <div className="question-container">
            <p className="question" dangerouslySetInnerHTML={{ __html:props.question}}/>
            <Button answer={props.answer[0]}/>
            <Button answer={props.answer[1]}/>
            <Button answer={props.answer[2]}/>
            <Button answer={props.answer[3]}/>
            <hr/>
        </div>
    )
}