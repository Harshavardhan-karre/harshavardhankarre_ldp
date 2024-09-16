import { Box } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../themes/index.tsx';

interface InputProps {
  children: string;
  FontSize?: number;
  FontWeight?: number;
}

const StyledTypography = styled(Box)<{ FontSize: string | number; FontWeight: number }>`
  font-size: ${(props) => (typeof props.FontSize === 'number' ? `${props.FontSize}px` : props.FontSize)};
  font-weight: ${(props) => props.FontWeight};
`;

export default function Index({
  children,
  FontSize = theme.typography.h2.fontSize as number, // Make sure it's a number here
  FontWeight = theme.typography.h2.fontWeight as number,
}: InputProps) {
  return (
    <Box>
      <StyledTypography FontSize={FontSize} FontWeight={FontWeight}>
        {children}
      </StyledTypography>
    </Box>
  );
}
