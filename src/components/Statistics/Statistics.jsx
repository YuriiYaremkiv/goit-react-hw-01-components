import { Section, Title, List, ListItem, Label, Percentage  } from './Statistics.styled';

export const Statistics = ({ title, data  }) => {
  return (
    <Section>
      <Title>{title}</Title>
      <List>  
        
        {data.map((statistic) => {
          return (
             <ListItem  key={data.id}>
               <Label>{statistic.label}</Label>
               <Percentage>{statistic.percentage}</Percentage>
             </ListItem>
          )
        })}

      </List>
    </Section>
  )
};