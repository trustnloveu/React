import React from 'react';
import '../css/Form.css';

const Form = ({value, onChange, onCreate, onKeyPress, color}) => {
    return (
        <div className="form">
            <input value={value} onChange={onChange} onKeyPress={onKeyPress} style={{color}}/>
            <div className="create-button" onClick={onCreate}>
                Add
            </div>
        </div>
    );
};

export default Form;

/*
    value: 인풋의 내용
    onCreate: 버튼이 클릭 될 때 실행 될 함수
    onChange: 인풋 내용이 변경 될 때 실행되는 함수
    onKeyPress: 인풋에서 키를 입력 할 때 실행되는 함수. 이 함수는 나중에 Enter 가 눌렸을 때 onCreate 를 한 것과 동일한 작업을 하기 위해서 사용합니다.

    1. 텍스트 내용 바뀌면 state 업데이트
    2. 버튼이 클릭되면 새로운 todo 생성 후 todos 업데이트
    3. input에서 Enter 누르면 버튼을 클릭한것과 동일한 작업진행
*/