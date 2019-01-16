import React from 'react';
import { Button } from 'semantic-ui-react';

const LoadButton = ({
  isLoading,
  text,
  LoadingText,
  disabled = false,
  ...props
}) => (
  <Button disabled={disabled || isLoading} {...props}>{isLoading ? 'Logging in...' : 'Login'}</Button>
);

export default LoadButton;
