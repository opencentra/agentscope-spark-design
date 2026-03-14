import { IAgentScopeRuntimeWebUISenderAttachmentsOptions } from "../../../..";
import React from "react";
export default function useAttachments(attachments: IAgentScopeRuntimeWebUISenderAttachmentsOptions, options?: {
    disabled?: boolean;
}): {
    fileList: any[];
    getFileList: () => any[];
    setFileList: React.Dispatch<React.SetStateAction<any[]>>;
    uploadIconButton: import("react/jsx-runtime").JSX.Element;
    uploadFileListHeader: import("react/jsx-runtime").JSX.Element;
    enabled?: undefined;
} | {
    enabled: boolean;
    fileList?: undefined;
    getFileList?: undefined;
    setFileList?: undefined;
    uploadIconButton?: undefined;
    uploadFileListHeader?: undefined;
};
