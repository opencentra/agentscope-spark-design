import { type RefObject } from "react";
import { BubbleDataType } from "../BubbleList";
export interface UsePaginationItemsOptions {
    enable: boolean;
}
export declare const usePaginationItems: (items: (BubbleDataType & {
    history?: boolean;
})[], options: UsePaginationItemsOptions) => {
    items: any[];
    noMore: boolean;
    loadMore: (scrollRef?: RefObject<HTMLElement | null>) => Promise<void>;
};
