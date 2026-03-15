import $i18n from '@/i18n';
import { S, Var } from '../elements';
import { ITagRule } from '../types';

export const transformList = (
  target: Record<string, Record<string, string>>,
) => {
  return Object.keys(target).map((key) => ({
    label: target[key].label,
    desc: target[key].desc,
    value: key,
  }));
};

export const DEFAULT_TAGS: ITagRule[] = [
  {
    code: 's',
    isParagraph: true,
    out: [],
    inner: [],
    name: $i18n.get({
      id: 'components.SlateEditor.utils.constant.Paragraph',
      dm: '段落',
    }),
    render: S,
    type: 'double',
  },
  {
    code: 'var',
    isParagraph: false,
    out: ['s'],
    inner: [],
    name: $i18n.get({
      id: 'components.SlateEditor.utils.constant.Variable',
      dm: '变量',
    }),
    render: Var,
    isInline: true,
    isVoid: true,
    type: 'single',
  },
];
