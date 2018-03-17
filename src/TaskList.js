//@flow
import React, { Component } from "react";
import "./TaskList.css";

type Props = {
    tasks: {
        id: number,
        open: bool,
        title: string
    }[]
}

export default class TaskList extends Component<Props> {

    render() {
        console.log(this.props.tasks);
        return (
            <div className="TaskList">
                <ul>
                    {this.props.tasks.map((task, num) =>
                        < li key={task.id}> {task.title} </li>
                    )}
                </ul>
            </div>
        );
    }
}