import Modal from "@/app/Shop/@modal/(..)Shop/[painting]/Modal";
import { getPainting } from "../../../../../../sanity/sanity.utils";
import ShopCard from "@/app/Shop/ShopCard";




const PhotoModal = async({params} : {
    params: {painting : string}
}) => {
    const slug = params.painting
    const paintings = await getPainting(slug)

    return (
        <Modal>
            <div className="h-full w-full grid place-content-center z-99">
                <ShopCard image={paintings}/>
            </div>
        </Modal>
    )

}
export default PhotoModal;

