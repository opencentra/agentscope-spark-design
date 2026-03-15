import { Alert } from '@agentscope-ai/design';
import { Flex } from 'antd';

export default () => {
  return (
    <>
      <Alert
        type="info"
        message="This alert is used for banner."
        banner
      ></Alert>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Flex justify="center">
        <div style={{ width: 512 }}>
          <Alert
            type="info"
            showIcon
            message="This alert is used for non-banner scenarios."
            style={{ borderRadius: 4 }}
          ></Alert>
        </div>
      </Flex>
    </>
  );
};
