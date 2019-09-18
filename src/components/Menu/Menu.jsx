import React from 'react';
import { connect } from 'react-redux';
import { bool, func } from 'prop-types';

import { Link } from 'gatsby';

import { Drawer } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import FavoriteIcon from '@material-ui/icons/Favorite';

import mapDispatchToProps from './state/mapDispatchToProps';
import menuSelector from './state/selector';

export const Menu = ({ isMenuOpen, toggleMenu, styles }) =>
  <div>
    <Drawer 
      variant="persistent"
      anchor="left"
      open={isMenuOpen}
    >
      <div style={{
        display: 'flex',
        alignItems: 'center',
        padding: '0 1rem',
        justifyContent: 'flex-end',
      }}>
        <IconButton onClick={toggleMenu}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List style={{width: 240}}>
        <Link to="/thoughts">
          <ListItem button key="Thoughts">
            <ListItemIcon><LibraryBooksIcon /></ListItemIcon>
            <ListItemText primary="Thoughts" />
          </ListItem>
        </Link>
        <Link to="/feelings">
          <ListItem button key="Feelings">
            <ListItemIcon><FavoriteIcon /></ListItemIcon>
            <ListItemText primary="Feelings" />
          </ListItem>
        </Link>
      </List>
    </Drawer>
    <IconButton style={styles} onClick={toggleMenu}>
      <MenuIcon />
    </IconButton>
  </div>;

const mapStateToProps = (state) => ({
  isMenuOpen: menuSelector(state).isMenuOpen,
});

Menu.propTypes = {
  isMenuOpen: bool,
  toggleMenu: func,
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
