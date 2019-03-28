import React, { Component } from 'react';
import styled from 'styled-components';


const List = styled.ul`
  padding: 0;
  list-style: none;
`;

const ListItem = styled.li`
  padding: 15px 25px;
`;

const Anchor = styled.a`
  color: #FFE5D5;
  text-decoration: none;
  font-size: 20px;
  font-weight: 600;
  display: flex;
  justify-content: space-between;

  &:hover {
    color: #FFFFFF
  }

  @media (min-width: 1000px) {
    font-size: 25px
  }
`

const Title = styled.span`
  width: 85%
`;

// const Menu = ({ titles, selectTopic }) => {
//   return (
//     <List>
//       {titles.map(title =>
//         <li
//           key={title.id}
//           onClick={(event) => selectTopic(title.id)}
//           >
//           {title.topic}
//         </li>
//       )}
//     </List>
//   )
// };

class Menu extends Component {
  handleClick = (id) => {
    this.props.selectTopic(id);
    if (this.props.closeStartPage) {
      this.props.closeStartPage()
    }
  }

  render() {
    return (
      <List>
        {this.props.titles.map(title =>
          <ListItem
            key={title.id}
            onClick={() => this.handleClick(title.id)}>
              <Anchor href="#">
                <Title>{title.topic}</Title>
                <span>0%</span>
              </Anchor>
          </ListItem>
        )}
      </List>
    );
  }
};

export default Menu;
