

export type Painting = {
    [x: string]: any;
    _type: 'painting';
    _id: string;
    _createdAt: Date;
    name: string;
    slug: string;
    description: Text;
    size: string,
    price: number, 
    image: string,
    dimensions: {
        height: number;
        width: number;
    }
}