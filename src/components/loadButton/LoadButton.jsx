import React from 'react';
import { Button } from 'semantic-ui-react';

const LoadButton = ({
  isLoading,
  text,
  loadingText,
  disabled = false,
  ...props
}) => (
  <Button primary disabled={disabled || isLoading} {...props}>
    {isLoading ? loadingText : text}
  </Button>
);

export default LoadButton;
