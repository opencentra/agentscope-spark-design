import {
  autocompletion,
  Completion,
  CompletionContext,
} from '@codemirror/autocomplete';
import { Extension } from '@codemirror/state';

export default function (
  data: Completion[] = [],
  config: {
    onCreate?: () => void;
    createBtnText?: string;
  },
): Extension {
  const { onCreate, createBtnText } = config;
  return autocompletion({
    override: [
      (context: CompletionContext) => {
        let word = context.matchBefore(/\/(\w+)?/);
        if (!word) return null;
        if (word && word.from === word.to && !context.explicit) {
          return null;
        }
        return {
          from: word?.from ?? 0,
          options: (onCreate
            ? [...data, { label: '/NEW_VAR', boost: -99 }]
            : data
          ).map((item) => ({
            ...item,
            displayLabel:
              item.label === '/NEW_VAR' ? createBtnText : item.label.slice(1),
            apply: (view: any, completion: any, from: number, to: number) => {
              if (completion.label === '/NEW_VAR') {
                view.dispatch({
                  changes: {
                    from: from,
                    to: to,
                    insert: '',
                  },
                });
                return onCreate?.();
              }
              const variableName = completion.label.slice(1);
              const variableText = `\${${variableName}}`;
              view.dispatch({
                changes: {
                  from: from,
                  to: to,
                  insert: variableText,
                },
              });
            },
          })),
        };
      },
    ],
  });
}
