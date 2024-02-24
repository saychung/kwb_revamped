

const painting = {
    name: 'painting',
    title: 'Paintings',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (rule: any) => rule.required(),    
          },
        {
        name: "image",
        title: "Image",
        type: "image",
        options: {
            hotspot: true,
          },
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'name' }, 
        },
        {
            name: "price",
            title: "Price",
            type: "number",
            validation: (rule: any) => rule.required(),
          },
        
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            description:
              'A detailed description of the painting, including the artist, style, subject matter, and any other relevant information.',
          },
        {
            name: 'size',
            title: 'Size',
            type: 'string',
            description:
              'Format: Width x Height (e.g., 30 x 20 cm or 12 x 8 inches). Include units.',
            validation: (rule: any) => rule.required(),
          },
    ]
}

export default painting;