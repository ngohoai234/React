import React, { useState, useEffect } from 'react';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import '../LoginForm/LoginForm.css';
import UserReducer from './../../redux/user/reducer';
import UserSaga from './../../redux/user/saga';
import { loginRequest } from './../../redux/user/actions';
import { LIST_STATUS_ACTION } from '../../redux/rootConstant';
import Loading from '../../Component/Loading/Loading';

import { useNavigate } from 'react-router-dom';
import { Form, Input, Button } from 'antd';

const key = 'user';

function Login() {
  const [isLoading, setIsLoading] = useState(false);

  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();
  let navigate = useNavigate();

  const onFinish = useCallback(
    (values) => {
      console.log(values);
      setIsLoading(true);
      dispatch(loginRequest(values.username, values.password));
    },
    [dispatch]
  );

  useEffect(() => {
    if (user.status === LIST_STATUS_ACTION.SUCCESS) {
      setIsLoading(false);
      navigate('/profile');
    }

    if (user.status === LIST_STATUS_ACTION.FAILED) {
      setIsLoading(false);
    }
  }, [user, navigate]);

  useInjectReducer({ key: key, reducer: UserReducer });
  useInjectSaga({ key: key, saga: UserSaga });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="container form-login">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Tên đăng nhập"
          name="username"
          rules={[{ required: true, message: 'Nhập mật Tên Đăng nhập' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Mật khẩu"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Đăng nhập
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Login;
