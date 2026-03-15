import { FunctionComponent } from 'react';
import { BaseEditor, Descendant, Point, Range } from 'slate';
import { HistoryEditor } from 'slate-history';
import { ReactEditor, RenderElementProps } from 'slate-react';

// 默认
export type DefaultElement = { type: 's'; children: Descendant[] };

export type CustomEditor = BaseEditor & ReactEditor & HistoryEditor;

export type CustomElement = Record<string, any> & {
  type: string;
  children: Descendant[];
};

export type CustomText = { text: string };

export interface BizRenderElementProps extends RenderElementProps {
  editor?: CustomEditor;
  renderVarLabel?: (val: string) => React.ReactNode;
}

export interface ILoading {
  message: string;
  loading: boolean;
}

export interface InsertNodesOptions {
  /** 插入节点位置 */
  at?: Point;
  rules?: Record<string, ITagRule>;
  /* 是否删除前缀一个字符，用于变量编辑器 */
  deletePrefix?: boolean;
}

export interface WrapNodesOptions {
  /** 包裹节点选区范围 */
  selection?: Range;
  /** 未选中内容提示 */
  tip?: string;
  rules?: Record<string, ITagRule>;
}

export type TagType = 'single' | 'double';

export type ISerializeFunction = (
  value: Descendant[],
  options: { tagRules: Record<string, ITagRule> },
) => string;

export interface ITagRule {
  code: string; // 标签code <vh-action />
  out: string[]; // 允许被哪些标签包裹
  inner: string[]; // 允许包裹哪些标签
  name: string; // 标签名称
  isParagraph?: boolean; // 是否是段落标签，允许嵌套所有标签；
  render:
    | FunctionComponent
    | ((eleProps: BizRenderElementProps) => JSX.Element);
  isInline?: boolean; // 行内元素
  isVoid?: boolean; // 独立元素
  type: TagType;
  serialize?: (
    node: Descendant,
    options?: { tagRules: Record<string, ITagRule> },
    serialize?: ISerializeFunction,
  ) => string;
  extOpts?: Record<string, any>;
}
