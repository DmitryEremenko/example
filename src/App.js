import { Layout } from 'antd';
import styled from 'styled-components';
import { UtilizationWidget } from './components/UtilizationWIdget/index';
import { WidgetContainer } from './components/WidgetContainer';

const StyledLayout = styled(Layout)`
  height: 100vh;
  flex: 1;
  background: white;
`;

const StyledSider = styled(Layout.Sider)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: #edf0f5;
`;

const widgets = [<UtilizationWidget />];

function App() {
  return (
    <Layout>
      <Layout.Sider collapsedWidth='60' collapsed>
        <div className='logo' />
      </Layout.Sider>
      <StyledLayout></StyledLayout>
      <StyledSider breakpoint='lg' width={340} collapsedWidth='340'>
        <WidgetContainer>{widgets}</WidgetContainer>
      </StyledSider>
    </Layout>
  );
}

export default App;
