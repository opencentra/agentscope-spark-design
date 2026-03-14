import { IAgentScopeRuntimeWebUISessionsContext } from '../types/ISessions';
import { IAgentScopeRuntimeWebUISession } from '../types/ISessions';
import React from "react";
export declare const ChatAnywhereSessionsContext: import("use-context-selector").Context<IAgentScopeRuntimeWebUISessionsContext>;
export declare function ChatAnywhereSessionsContextProvider(props: {
    children: React.ReactNode | React.ReactNode[];
}): import("react/jsx-runtime").JSX.Element;
export declare const useChatAnywhereSessions: () => {
    changeCurrentSessionId: (sessionId: string) => void;
    getCurrentSessionId: () => string;
    getSessions: () => IAgentScopeRuntimeWebUISession[];
    removeSession: (session: Partial<IAgentScopeRuntimeWebUISession> & {
        id: string;
    }) => Promise<void>;
    updateSession: (session: Partial<IAgentScopeRuntimeWebUISession>) => Promise<Partial<IAgentScopeRuntimeWebUISession>>;
    createSession: (data?: {
        name?: string;
    }) => Promise<string>;
    createTemporarySession: () => Promise<string>;
    clearAllSessions: () => Promise<void>;
};
