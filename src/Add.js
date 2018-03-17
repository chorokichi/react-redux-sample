//@flow
import React, { Component } from "react";
import "./Add.css";


export default class Add extends Component<{}> {
    render() {
        return (
            <div className="Add">
                <p className="TextField">テキストフィールド</p>
                <p className="Button"> ボタン</p>
            </div>
        );
    }
}