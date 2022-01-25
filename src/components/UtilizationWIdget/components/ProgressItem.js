import { Progress, Typography } from 'antd';
import PropTypes from 'prop-types';
import styled from 'styled-components';
const { Title } = Typography;

const StyledTitle = styled(Title)`
  text-transform: capitalize;
`;

export const LabelCollection = {
  available: 'Available',
  regular: 'Regular Rides',
  carpool: 'Carpool',
};

export const ProgressItem = ({ value, title = 'default' }) => {
  return (
    <>
      <StyledTitle level={5}>{LabelCollection[title]}</StyledTitle>
      <Progress percent={value} />
    </>
  );
};

ProgressItem.propTypes = {
  value: PropTypes.number,
  title: PropTypes.string,
};
