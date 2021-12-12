export default {
    name: "tarif",
    title: "Tarif",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name",
                maxLength: 96,
            },
        },
        {
            name: "value",
            title: "Value",
            type: "string",
        },
        {
            name: "tarifCategories",
            title: "tarifCategories",
            type: "array",
            of: [
                {
                    type: "reference",
                    to: [{ type: "tarifCategory" }],
                },
            ],
        },
        {
            name: "description",
            title: "Description",
            type: "array",
            of: [
                {
                    title: "Block",
                    type: "block",
                    styles: [{ title: "Normal", value: "normal" }],
                    lists: [],
                },
            ],
        },
    ],
    preview: {
        select: {
            title: "name",
            media: "image",
        },
    },
};
