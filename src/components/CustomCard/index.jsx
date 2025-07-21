import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";

const CustomCard = ({
  mainTitle,
  description,
  buttonText,
}) => {
  return (
    <Card 
      sx={{ 
        minWidth: 275, 
        height: "100%",
        borderRadius: 2, // Rounded corners yang lebih modern
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)', // Subtle shadow
        border: '1px solid rgba(0,0,0,0.08)', // Very light border
        transition: 'all 0.3s ease-in-out', // Smooth transitions
        '&:hover': {
          boxShadow: '0 4px 16px rgba(0,0,0,0.15)', // Enhanced shadow on hover
          transform: 'translateY(-2px)', // Subtle lift effect
        }
      }}
    >
      <CardContent sx={{ pb: 2 }}> 
        <Typography 
          variant="h6" 
          component="div" 
          sx={{ 
            fontWeight: 600, //
            mb: 1.5, 
            color: 'text.primary'
          }}
        >
          {mainTitle}
        </Typography>
        <Typography 
          variant="body2" 
          sx={{ 
            color: 'text.secondary',
            lineHeight: 1.6, 
          }}
        >
          {description}
        </Typography>
      </CardContent>
      
      <CardActions sx={{ pt: 0, pb: 2, px: 2 }}> 
        <Button 
          size="small" 
          sx={{ 
            borderRadius: 1.5,
            textTransform: 'none',
            fontWeight: 500,
            px: 2,
            '&:hover': {
              backgroundColor: 'primary.main',
              color: 'white',
            }
          }}
        >
          {buttonText}
        </Button>
      </CardActions>
    </Card>
  );
};

CustomCard.propTypes = {
  mainTitle: PropTypes.string,
  description: PropTypes.string,
  buttonText: PropTypes.string,
};

CustomCard.defaultProps = {
  mainTitle: "Card Title",
  description: "This is the card description.",
  buttonText: "Learn More",
};

export default CustomCard;