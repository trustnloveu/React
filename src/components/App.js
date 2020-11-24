import React, { Component } from 'react';
import ToDoListTemplate from './ToDoListTemplate';
import Form from './Form';
import ItemListFormat from './ItemListFormat';
import Palette from './Palette';

const colors = ['#343a40', '#f03e3e', '#12b886', '#228ae6'];

class App extends Component {
  id = 3  // 초기 3개 값(0, 1, 2) 있음
  state = {
    input: '',
    tasks: [
      { id: 0, text: 'Introduction of React', checked: false },
      { id: 1, text: 'Introduction of React', checked: true },
      { id: 2, text: 'Introduction of React', checked: false }
    ],
    color: '#343a40'
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value // input의 다음 변경 값
    });
  }

  handleCreate = () => {
    const { input, tasks, color } = this.state;
    this.setState({
      input: '',  // input 초기값 = 공백
      tasks: tasks.concat({ // 리액트 state 에서 배열을 다룰 때 절대 push 사용 X (주소값, 내부값, 최적화 등 이유)
        id: this.id++,
        text: input,
        checked: false,
        color
      })
    });
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleCreate();
    }
  }
  handleToggle = (id) => {
    const { tasks } = this.state;
    // 파라미터로 받은 id로 몇 번째 아이템인지 찾음
    const index = tasks.findIndex(tasks => tasks.id === id);
    // 선택한 객체
    const selected = tasks[index];
    // 배열 복사
    const nextTasks = [...tasks];
    // 기존 값 복사 > checked 값 덮어쓰기
    nextTasks[index] = {
      ...selected,
      checked: !selected.checked
    };

    this.setState({
      tasks: nextTasks
    });

    // ## 참고 ##
    // this.setState({
    //   tasks: [
    //     ...tasks.slice(0, index),
    //     {
    //       ...selected,
    //       checked: !selected.checked
    //     },
    //     ...tasks.slice(index + 1, tasks.length)
    //   ]
    // });
  }
  handleRemove = (id) => {
    const { tasks } = this.state;
    this.setState({
      tasks: tasks.filter(singleTask => singleTask.id !== id)   // filter > 파라미터로 받아온 id를 갖지 않는 배열을 새로 생성
    });
  }

  handleSelectColor = (color) => {
    this.setState({
      color
    })
  }

  render() {
    const { input, tasks, color } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove,
      handleSelectColor
    } = this;   // 비구조화 할당 > this.name 작업 생략 가능(개인 취향)
    
    return (
      <ToDoListTemplate 
        form={(
          <Form
            value={input}
            onKeyPress={handleKeyPress}
            onChange={handleChange}
            onCreate={handleCreate}
            color={color}
          />
        )}
        palette={(
          <Palette colors={colors} selected={color} onSelect={handleSelectColor}/>
        )}
      >

        <ItemListFormat tasks={tasks} onToggle={handleToggle} onRemove={handleRemove}/>

      </ToDoListTemplate>
    );
  }
}

export default App;

/*
  # 작업 가이드라인(원문)
    https://velopert.com/3480

  # 리액트 개발자 도구
    https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi
  
  # concat
    - 두 개의 문자열을 하나의 문자열로 만들어주는 역활을 하는 함수
    - 입력값을 문자열 대신 배열을 사용하면 두 개의 배열을 하나의 배열로 만들어주는 역활도 하는 함수

  # filter() 
    -주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환

*/