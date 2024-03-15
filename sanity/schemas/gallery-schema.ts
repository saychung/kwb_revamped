

const works = {
    name: 'works',
    title: 'Works',
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
            name: 'description',
            title: 'Description',
            type: 'text',
            description:
              'A brief description of the painting, including the subject matter, and any other relevant information.',
          },
        {
            name: 'location',
            title: 'Location',
            type: 'text',
            decripttion:
                'Share the location of the image subject'
        }
    ]
}

export default works;