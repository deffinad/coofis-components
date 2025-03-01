/* eslint-disable no-unused-vars */
import React from 'react';
import clsx from 'clsx'; 
import PropTypes from 'prop-types';
import {Search} from '@mui/icons-material'
import { Box, colors, InputBase, inputBaseClasses } from '@mui/material';
import { lighten, styled } from '@mui/material/styles';

const InputSearchBar = ({
  placeholder,
  iconPosition,
  align,
  overlap,
  onlyIcon,
  disableFocus,
  iconStyle,
  ...rest
}) => {
  return (
    <SearchWrapper sx={{ ...rest.sx }} iconPosition={iconPosition}>
      <SearchIconBox
        align={align}
        className={clsx(
          'searchRoot',
          { 'hs-search': overlap },
          { 'hs-disableFocus': disableFocus },
          { searchIconBox: onlyIcon },
        )}
      >
        <SearchIconWrapper
          className={clsx({
            right: iconPosition === 'right',
          })}
          style={iconStyle}
        >
          <Search fontSize='small' sx={{color: '#b1b1b1'}} />
        </SearchIconWrapper>
        <SearchInputBase
          {...rest}
          placeholder={placeholder || 'Search…'}
          inputProps={{ 'aria-label': 'search' }}
        />
      </SearchIconBox>
    </SearchWrapper>
  );
};

export default InputSearchBar;

const SearchWrapper = ({ iconPosition, children, ...rest }) => {
  return (
    <Box
      sx={{
        borderRadius: (theme) => theme.cardRadius,
        display: 'block',
        cursor: 'pointer',
        color: 'white',
        '& .searchRoot .MuiInputBase-input': {
          paddingLeft: iconPosition === 'right' ? 20 : 'calc(1em + 28px)',
          paddingRight: '',
        },
        ...rest.sx,
      }}
    >
      {children}
    </Box>
  );
};

const SearchInputBase = styled(InputBase)(({ theme }) => ({
  fontWeight: 500,

  [`& .${inputBaseClasses.root}`]: {
    color: 'inherit',
    width: '100%',
    backgroundColor: 'black'
  },
  [`& .${inputBaseClasses.input}`]: {
    border: '0 none',
    backgroundColor: '#333232a1',
    color: 'white',
    borderRadius: 30,
    padding: theme.spacing(2, 2, 2, 0),
    paddingLeft: `calc(1em + ${theme.spacing(6)})`,
    transition: theme.transitions.create('width'),
    width: 200,
    height: 40,
    boxSizing: 'border-box',
    [theme.breakpoints.down('md')]: {
      width: 110,
    },
    '&:focus': {
      backgroundColor: '#333232a1',
      width: 240,
      [theme.breakpoints.down('md')]: {
        width: 162,
      },
    },
    '&:hover': {
      backgroundColor: '#333232a1',
    },
  },
}));

const SearchIconBox = styled('div')((props) => ({
  position: 'relative',
  marginLeft: props.align === 'right' ? 'auto' : 0,
  '& .searchIconBox': {
    position: 'relative',
    '& $inputInput': {
      width: 220,
      borderRadius: 50,
      paddingLeft: 27,
      '&:focus': {
        width: 235,
        borderRadius: 50,
        paddingLeft: `calc(1em + ${props.theme.spacing(4)})`,
      },
    },
  },
  '&.hs-disableFocus': {
    '& .MuiInputBase-root': {
      width: '100%',
    },
    '& .MuiInputBase-input': {
      width: '100%',
      '&:focus': {
        width: '100%',
      },
    },
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 12,
  zIndex: 1,
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&.right': {
    left: 'auto',
    right: 12,
    '& + $inputRoot $inputInput': {
      paddingLeft: theme.spacing(5),
      paddingRight: `calc(1em + ${theme.spacing(7)})`,
    },
  },
}));

SearchWrapper.propTypes = {
  iconPosition: PropTypes.string,
  children: PropTypes.node,
};

InputSearchBar.propTypes = {
  iconPosition: PropTypes.string,
  align: PropTypes.string,
  placeholder: PropTypes.string,
  overlap: PropTypes.bool,
  borderLight: PropTypes.bool,
  className: PropTypes.string,
  onlyIcon: PropTypes.bool,
  disableFocus: PropTypes.bool,
  iconStyle: PropTypes.object,
};

InputSearchBar.defaultProps = {
  onlyIcon: false,
  overlap: true,
  iconPosition: 'left',
  align: 'left',
  iconStyle: {
    color: 'grey',
  },
};
