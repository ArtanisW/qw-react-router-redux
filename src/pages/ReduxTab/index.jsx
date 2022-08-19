import React from 'react';
import { PageHeader, Button, Input } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from '../../redux/slice/counterSlice';
import styles from './index.less';

const ReduxTab = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <PageHeader
        className="site-page-header"
        title="React-Redux"
        subTitle={
          <>
            Use{' '}
            <a href="https://github.com/reduxjs/redux-toolkit">
              @reduxjs/toolkit
            </a>{' '}
            to start quickly
          </>
        }
        onBack={() => {
          history.go(-1);
        }}
      />
      <div className={styles['page-container']}>
        <Button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
          type="primary"
        >
          Increment
        </Button>
        <Button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </Button>
        <Button
          aria-label="IncrementByAmount value"
          onClick={() => dispatch(incrementByAmount(10))}
          type="primary"
        >
          IncrementByAmount=10
        </Button>
        <Button aria-label="Reset value" onClick={() => dispatch(reset())}>
          Reset
        </Button>
        <div>
          <label>Computed count = </label>
          <Input
            style={{ marginTop: 30, width: 100, marginBottom: 20 }}
            value={count}
            readOnly
          />
        </div>
        <p style={{ marginBottom: 20 }}>
          Now, have a look at <a href="#/router">React-Router</a> tab and see
          the count value
        </p>
        <p>
          Tips: We add{' '}
          <a href="https://www.npmjs.com/package/redux-logger">redux-logger</a>{' '}
          in development mode
        </p>
      </div>
    </div>
  );
};

export default ReduxTab;
