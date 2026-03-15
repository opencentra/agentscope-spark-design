import { memo } from 'react';
import { useStyle } from './index.style';

export const Var = memo((props: any) => {
  const { attributes, renderVarLabel } = props;
  const Style = useStyle();
  return (
    <>
      <Style />
      <span {...attributes}>
        {props.children}
        <span className={'spark-editor-var-tag'}>
          {renderVarLabel
            ? renderVarLabel(props.element.code)
            : props.element.label}
        </span>
      </span>
    </>
  );
});
