import { MotionDiv } from "../(client)/MotionDiv"

export function Skeleton () {
    return(
        <MotionDiv className="h-[250px] w-[120px] galaxy-folded:w-[165px] sm:w-[230px] p-2 rounded-xl border-4 border-gray-500/50">
            <div className="h-[60%] w-full bg-gray-500/50 rounded-md">
            </div>
            <div className="h-[10%] w-full"></div>
            <div className="h-[30%] w-full bg-gray-500/50 rounded-sm">
            </div>
        </MotionDiv>)
}



