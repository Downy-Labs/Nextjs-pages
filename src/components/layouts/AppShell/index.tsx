import React from 'react';
import Navabar from '@/components/layouts/Navbars';

type AppshellProps = {
  children: React.ReactNode;
};
const Appshell = (props: AppshellProps) => {
  const { children } = props;

  return (
    <div>
      <Navabar />
      {children}
    </div>
  );
};

export default Appshell;
