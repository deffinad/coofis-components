import React from 'react'
import { Stack } from '@mui/material'
import PropTypes from 'prop-types'
import { SPACING } from '@/shared/AppConst'

const Card = ({ padding, bgColor, children, sx, ...props }) => {
  return (
    <Stack
      sx={{
        padding: padding ? padding : SPACING,
        backgroundColor: bgColor ? bgColor : '#ffffff',
        borderRadius: SPACING,
        ...sx
      }}
      {...props}
    >
      {children}
    </Stack>
  )
}

Card.propTypes = {
  padding: PropTypes.number,
  bgColor: PropTypes.string,
  children: PropTypes.node,
  props: PropTypes.any,
  sx: PropTypes.object
}

export default Card