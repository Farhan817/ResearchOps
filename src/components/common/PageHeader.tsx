import React from "react";

const PageHeader = ({ title, subText }: { title: string; subText: string }) => {
  return (
    <div>
      <h1 className='text-2xl font-bold tracking-tight text-foreground'>
        {title}
      </h1>
      <p className='mt-1 text-sm text-muted-foreground'>{subText}</p>
    </div>
  );
};

export default PageHeader;
