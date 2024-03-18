

export type Works = {
    [x: string]: any;
    _type: 'works';
    _id: string;
    _createdAt: Date;
    name: string;
    slug: string;
    description: Text;
    image: string;
    location: Text;
    dimensions: {
        height: number;
        width: number;
    }
    
}