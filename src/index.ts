import * as FlexSearch from "flexsearch";

/**
 * Search from flexsearch and return the keys
 *
 * @param keyword The searching keyword
 * @param flexsearch The flexsearch object that stores the keywords
 *
 * @returns The key array that matches the searching keyword
 */
const searchAndLog = async (keyword: string, flexsearch: FlexSearch) => {
    const result = await flexsearch.search(keyword);

    console.log(`Searching result of ${keyword}:\t`, result);
};

/**
 * A basic usage demo
 */
const usage = async () => {
    const flexSearch = FlexSearch.create();

    const docs = [
        { key: "key1", doc: "this is the first document" },
        { key: "key2", doc: "this is the second document" },
    ];

    docs.forEach(document => {
        flexSearch.add(document.key, document.doc);
        console.log("Stored:\t", document);
    });

    searchAndLog("document", flexSearch); // [ 'key1', 'key2' ]
    searchAndLog("first", flexSearch); // [ 'key1' ]
    searchAndLog("is the sec", flexSearch); // [ 'key2' ]
    searchAndLog("not exist", flexSearch); // []
};

usage();
