/**
 * A minimal definition
 * See more: https://github.com/nextapps-de/flexsearch
 */

declare module "flexsearch" {
    function create(): FlexSearch;
}

declare class FlexSearch {
    add(id: number | string, keyword: string): void;

    search(keyword: string, limit?: number): Promise<number[]>;
}
