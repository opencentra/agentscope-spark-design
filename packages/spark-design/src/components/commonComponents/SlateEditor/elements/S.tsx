import { memo } from 'react';

export const S = memo((props: any) => {
  const { attributes, children } = props;
  return (
    <div {...attributes} style={{ marginTop: '8px' }}>
      {children}
    </div>
  );
});
