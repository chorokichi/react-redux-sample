//@flow
import React, { Component } from "react";
import "./Main.css";
import Add from "./Add";
import TaskList from "./TaskList";

export default class Main extends Component<{}> {
    render() {
        return (
            <div className="Main">
                <Add />
                <TaskList tasks={[
                    {
                        id: 1,
                        open: false,
                        title: "a"
                    },
                    {
                        id: 2,
                        open: false,
                        title: "b"
                    }]
                } />
            </div>
        );
    }
}