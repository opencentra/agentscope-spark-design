import { CodeBlock, CollapsePanel, message } from '@agentscope-ai/design';
import { SparkCode01Line, SparkCopyLine } from '@agentscope-ai/icons';
import { Flex } from 'antd';
import React from 'react';

const App: React.FC = () => {
  const value = `function main(params) {    
    const ret = {        
    "result": {           
        "key0": params.city + params.date,            
        "key1": ["hello", "world"],            
        "key2": {      
        // json_string是json格式的字符串          
        "key21": JSON.parse(params.json_string)          
        },        
    },    
    }    
    return ret
}`;
  return (
    <Flex vertical gap={16} style={{ width: 720 }}>
      <CollapsePanel
        title={
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            <SparkCode01Line style={{ fontSize: '20px' }} />
            <span style={{ fontSize: '14px' }}>Code demo</span>
          </div>
        }
        collapsedHeight={64}
        expandedHeight={200}
        expandOnPanelClick={true}
        extra={
          <SparkCopyLine
            style={{ fontSize: '18px' }}
            onClick={() => {
              navigator.clipboard.writeText(value);
              message.success('复制成功!');
            }}
          />
        }
      >
        <CodeBlock language={'javascript'} value={value} />
      </CollapsePanel>
    </Flex>
  );
};

export default App;
