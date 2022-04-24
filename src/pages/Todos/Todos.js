import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useInjectReducer, useInjectSaga } from "redux-injectors";
import { LIST_STATUS_ACTION } from "../../redux/rootConstant";

import { getTodoRequest } from "./../../redux/Todo/actions";

import TodoReducer from "./../../redux/Todo/reducer";
import TodoSaga from "./../../redux/Todo/saga";

const key = "todos";

const Todos = () => {
  const dispatch = useDispatch();
  const listTodos = useSelector((state) => state.todos);

  useInjectReducer({ key: key, reducer: TodoReducer });
  useInjectSaga({ key: key, saga: TodoSaga });

  useEffect(() => {
    dispatch(getTodoRequest());
  }, [dispatch]);

  // console.log(listTodos);
  if (listTodos?.list?.status === LIST_STATUS_ACTION.LOADING)
    return <p>Loading</p>;

  console.log(listTodos);
  return (
    <div>
      {listTodos?.list.data.map((todo) => {
        return <p key={todo.id}>{todo.title}</p>;
      })}
    </div>
  );
};

export default Todos;
