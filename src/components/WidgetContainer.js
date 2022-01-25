import React, { createContext, useCallback, useEffect, useReducer } from 'react';
import { Col, Radio, Row } from 'antd';
import styled from 'styled-components';
import { useInterval } from '../hooks/useInterval';

const StyledRow = styled(Row)`
  margin: 20px 0 0;
`;

const initialState = { activeTab: 'bars', utilizations: [] };

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case 'setActiveTab':
      return { ...state, activeTab: action.payload };
    case 'setUtilizations':
      return { ...state, utilizations: action.payload };
    default:
      throw new Error();
  }
}

export const Context = createContext('Default Value');

export const WidgetContainer = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { activeTab } = state;

  const fetchData = useCallback(async () => {
    const res = await fetch('http://localhost:5000/vehicles').then((res) => res.json());
    dispatch({ type: 'setUtilizations', payload: Object.entries(res) });
  }, []);

  useInterval(() => fetchData(), 5000);

  useEffect(() => fetchData(), [fetchData]);

  const changeTabPosition = (e) => {
    dispatch({ type: 'setActiveTab', payload: e.target.value });
  };
  return (
    <Col>
      <StyledRow justify='center' align='center'>
        <Radio.Group value={activeTab} onChange={changeTabPosition} buttonStyle='solid'>
          <Radio.Button value='bars'>Utilization Bars</Radio.Button>
          <Radio.Button value='text'>Utilization Text</Radio.Button>
        </Radio.Group>
      </StyledRow>
      <Context.Provider value={state}>
        <Row>{children}</Row>
      </Context.Provider>
    </Col>
  );
};
