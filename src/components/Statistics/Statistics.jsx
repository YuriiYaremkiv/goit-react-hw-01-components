import PropTypes from 'prop-types';
import {
  Section,
  Title,
  List,
  ListItem,
  Label,
  Percentage,
} from './Statistics.styled';

export const Statistics = ({ title, data }) => {
  const arrayLength = data.length;
  return (
    <Section>
      {title ? <Title>{title}</Title> : null}
      <List>
        {data.map(({ id, label, percentage }) => {
          return (
            <ListItem key={id} value={arrayLength}>
              <Label>{label}</Label>
              <Percentage>{percentage}%</Percentage>
            </ListItem>
          );
        })}
      </List>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
