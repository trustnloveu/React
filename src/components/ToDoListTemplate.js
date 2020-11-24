import React from 'react';
import '../css/ToDoListTemplate.css';

const ToDoListTemplate = ({form, palette, children}) => {
    return (
        <main className = "list-template">
            <div className = "title">
                Things I should do today.
            </div>
            <section className="palette-wrapper">
                {palette}
            </section>
            <section className = "form-wrapper">
                {form}
            </section>
            <section className = "list-wrapper">
                {children}
            </section>
        </main>
    );
};

export default ToDoListTemplate;