

export type Shop = {
    [x: string]: any;
    _type: 'shop';
    _id: string;
    _createdAt: Date;
    itemname: string;
    buyer: string;
    comment: Text;
    email: string;
    /* countrycode: number;
    contact: number;  */
}