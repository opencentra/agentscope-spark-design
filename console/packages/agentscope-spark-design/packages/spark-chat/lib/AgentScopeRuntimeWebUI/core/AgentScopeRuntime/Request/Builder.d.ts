import { IAgentScopeRuntimeWebUIInputData } from "../../../..";
import { IAgentScopeRuntimeWebUIMessage } from "../../../..";
import { IAgentScopeRuntimeRequest, IFileContent, IImageContent, ITextContent } from "../types";
declare class AgentScopeRuntimeRequestBuilder {
    data: IAgentScopeRuntimeRequest;
    static getHistoryMessages(messages: IAgentScopeRuntimeWebUIMessage[]): any[];
    isImageFile(file: IAgentScopeRuntimeWebUIInputData['fileList'][number]): boolean;
    buildImageContent(imageFile: IAgentScopeRuntimeWebUIInputData['fileList'][number]): IImageContent;
    buildTextContent(text: string): ITextContent;
    buildFileContent(file: IAgentScopeRuntimeWebUIInputData['fileList'][number]): IFileContent;
    constructor();
    handle(data: IAgentScopeRuntimeWebUIInputData): IAgentScopeRuntimeRequest;
    handleApproval(input: any): IAgentScopeRuntimeRequest;
}
export default AgentScopeRuntimeRequestBuilder;
