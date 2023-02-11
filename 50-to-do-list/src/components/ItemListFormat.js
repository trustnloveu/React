import React, { Component } from 'react';
import ItemList from './ItemList';

class ItemListFormat extends Component {

    // 컴포넌트 최적화
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.tasks !== nextProps.tasks;
    }

    render() {
        const { tasks, onToggle, onRemove} = this.props;
        
        const todoList = tasks.map( // map에서 key값 활용 > 최적화(index는 비권장)
            ({id, text, checked, color}) => (
                <ItemList
                    id={id}
                    text={text}
                    checked={checked}
                    color={color}
                    onToggle={onToggle}
                    onRemove={onRemove}
                    key={id}
                />
            )
            // ## 참고 ##
            // (tasks) => (
            //     <ItemList
            //         {...tasks}
            //         onToggle={onToggle}
            //         onRemove={onRemove}
            //         key={tasks.id}
            //     />
            // )
        );

        return (
            <div>
                {todoList}
            </div>
        );
    }
}

export default ItemListFormat;