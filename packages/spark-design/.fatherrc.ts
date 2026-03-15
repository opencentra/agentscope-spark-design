import { defineConfig } from 'father';

export default defineConfig({
  // more father config: https://github.com/umijs/father/blob/master/docs/config.md
  esm: { output: 'lib' },
  alias: {
    '@ant-design/icons': '@agentscope-ai/icons-override-antd',
    '@ant-design/icons-svg': '@agentscope-ai/icons-svg-override-antd',
  },
});
