import * as React from 'react';

import { Button } from '@mui/material';

interface ContainedIconButtonProps {
  isMobile: boolean;
  link: string;
  ml: number | undefined;
  mr: number;
  startIcon: React.ReactNode;
}

export const ContainedIconButton = (props: ContainedIconButtonProps) => {
  return (
    <Button
      variant="contained"
      href={props.link}
      target="_blank"
      size="medium"
      startIcon={props.startIcon}
      sx={{
        borderRadius: '8px',
        p: 0,
        ml: props.ml,
        mr: props.mr,
        textAlign: 'center',
        minWidth: '48px',
        '& .MuiButton-startIcon': {
          margin: 0,
        },
        '& .MuiSvgIcon-root': {
          fontSize: '24px',
          margin: '12px',
        },
      }}
    />
  );
};
