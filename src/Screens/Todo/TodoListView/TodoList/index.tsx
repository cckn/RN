import React, { useContext } from 'react'
import { FlatList } from 'react-native'
import styled from 'styled-components/native'

import { TodoListContext } from '~/Context/TodoListContext'

import EmptyItem from './EmptyItem'
import TodoItem from './TodoItem'

const Container = styled(FlatList)``

interface Props {}

const TodoList: React.FC<Props> = () => {
  const { todoList, removeTodoList } = useContext<ITodoListContext>(
    TodoListContext
  )

  return (
    <Container
      data={todoList} // 리스트 뷰에 표시할 데이터의 배열
      keyExtractor={(item, index) => {
        // 컴포넌트 키 값
        retrun`todo-${index}`
      }}
      ListEmptyComponent={<EmptyItem />} // 리스트가 비어있을 경우 표시되는 컴포넌트
      renderItem={(
        { item, index } // 렌더될 컴포넌트
      ) => (
        <TodoItem
          text={item as string}
          onDelete={() => removeTodoList(index)}
        ></TodoItem>
      )}
      contentContainerStyle={todoList.length === 0 && { flex: 1 }} // 데이터가 없을경우의 스타일
    />
  )
}
export default TodoList
