import React, { Component } from 'react';
import '../css/ItemList.css';

class ItemList extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.checked !== nextProps.checked;
    }

    render() {
        const { text, checked, id, color, onToggle, onRemove } = this.props;

        console.log(id);

        return (
            <div className="todo-item" onClick={() => onToggle(id)}>
                <div className="remove" onClick={(e) => {
                    e.stopPropagation();    // onToggle 실행 방지
                    onRemove(id)
                }
                }>
                    &times;
                </div>
                <div style={{color}} className={`todo-text ${checked && 'checked'}`}>
                    <div>{text}</div>
                </div>
                {
                    checked && (<div className="check-mark">✓</div>)
                }
            </div>
        );
    }
}

export default ItemList;

/*
    todos: todo 객체들이 들어있는 배열
    onToggle: 체크박스를 키고 끄는 함수
    onRemove: 아이템을 삭제시키는 함수
    text: todo 내용
    checked: 체크박스 상태
    id: todo 의 고유 아이디

    Template Literals = ``
    - 템플릿 리터럴은 내장된 표현식을 허용하는 문자열 리터럴
    - 여러 줄로 이뤄진 문자열과 문자 보간기능을 사용할 수 있음
*/