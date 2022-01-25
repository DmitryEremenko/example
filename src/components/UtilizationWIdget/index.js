import React, { useContext } from 'react';
import { Card, Row, Typography, Col } from 'antd';
import styled from 'styled-components';
import { Context } from '../WidgetContainer';
import { LabelCollection, ProgressItem } from './components/ProgressItem';

const StyledCard = styled(Card)`
  width: 100%;
  max-width: 298px;
  margin: 20px;
`;

export const UtilizationWidget = () => {
  const { activeTab, utilizations } = useContext(Context);

  const utilization = utilizations.reduce((acc, [, value]) => acc + Number(value), 0);
  return (
    <StyledCard title={`UTILIZATION (${utilization})`} bordered>
      {activeTab === 'bars' ? (
        utilizations.map(([label, value]) => (
          <ProgressItem value={value} title={label} key={label} />
        ))
      ) : (
        <>
          {utilizations.map(([name, value]) => {
            return (
              <Row justify='center'>
                <Col span={14}>
                  <Typography.Title level={5}>{LabelCollection[name]}</Typography.Title>
                </Col>
                <Col span={10}>
                  <Typography.Text>{value}</Typography.Text>
                </Col>
              </Row>
            );
          })}
        </>
      )}
    </StyledCard>
  );
};
