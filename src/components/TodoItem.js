import React, { Component } from 'react'

export default class TodoItem extends Component {
    render() {
        const {title,handleDelete,handleEdit}= this.props;
        return (
            <li className="list-group-item text-capitaize justify-content-between d-flex my-1">
                <h6>{title}</h6>
                <div className="todo-icon">
                    <span className="mx-1 text-success" onClick={handleEdit}>
                        <i className="fas fa-pen" />
                    </span>
                    <span className="mx-2 text-danger" onClick={handleDelete}>
                        <i className="fas fa-trash" />
                    </span>
                </div>
            </li>
        )
    }
}
