

const shop = {
    name: 'shop',
    title: 'Shop-Order-queries',
    type: 'document',
    fields: [
        {
            name: 'itemname',
            title: 'Item-Name',
            type: 'string',
            validation: (rule: any) => rule.required(),    
          },
        {
            name: "buyer",
            title: "Potential-Buyer",
            type: "string",
            validation: (rule: any) => rule.required(),
        },
        {
            name: 'comment',
            title: 'Comment',
            type: 'text',
            validation: (rule : any) => rule.required()
          },
        {
            name: 'email',
            title: 'Email',
            type: 'string',
            validation: (rule: any) => rule.required(),
          },
    ]
}

export default shop;