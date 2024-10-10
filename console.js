
const noOp = () => {}
const log = (message) => {
    console.log(message);
}

const generateContent = (contentType, size) => {
    const lorem = [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
    ];
    const templates = [
        {
            "fruit": "",
            "vegetable": "",
            "fungus": ""
        },
        {
            "category": "",
            "subcategory": {
                "solid": ""
            },
            "liquid": {
                "gas": "",
                "plasma": "",
                "degenerate": {
                    "condensate": ""
                }
            }
        },
        {
            "top": {
                "middle": {
                    "bottom": ""
                }
            }
        },
        {
            "sinister": "",
            "dexter": ""
        }
    ];

    const getNextLorem = () => {
        let loremIndex = 0;
        return () => {
            let next = lorem[loremIndex % lorem.length];
            loremIndex++;
            return next;
        };
    };

    const nextLorem = getNextLorem();

    const hydrateItem = (item) => {
        const replace = (obj) => {
            for (const key in obj) {
                if(!obj.hasOwnProperty(key)) {
                    continue;
                }
                if(typeof obj[key] === 'object' && obj[key] !== null) {
                    replace(obj[key])
                } else {
                    obj[key] = nextLorem();
                }
            }
        };
        replace(item);
    };

    let content = [];
    for (let i = 0; i < size; i++) {
        if (contentType == 'OBJECTS') {
            let item = templates[i % templates.length];
            hydrateItem(item);
            content.push(item);
        } else if (contentType == 'STRINGS') {
            let item = lorem[i % lorem.length];
            content.push(item);
        }
    }

    return content;
}

const timeFunction = (f) => {
    const t0 = performance.now();
    f();
    const t1 = performance.now();
    return (t1 - t0);
}

const logAll = (logger, contentType, items) => {
    const content = generateContent(contentType, items);
    const logImpl = () => {
        for (let i = 0; i < content.length; i++) {
            logger(content);
        } 
    }; 
    return timeFunction(logImpl);
};

const logAllToConsole = (contentType, items) => {
    return logAll(log, contentType, items);
};

const logAllToNowhere = (contentType, items) => {
    return logAll(noOp, contentType, items);  
};

