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
  return (
    <Section>
      {title ? <Title>{title}</Title> : null}
      <List>
        {data.map(statistic => {
          return (
            <ListItem key={statistic.id} value={data.length}>
              <Label>{statistic.label}</Label>
              <Percentage>{statistic.percentage}%</Percentage>
            </ListItem>
          );
        })}
      </List>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array.isRequired,
};