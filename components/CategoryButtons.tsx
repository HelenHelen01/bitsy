import { Button } from "./Button";

export function CategoryButtons()  {
    return(
    <div className="overflow-x-hidden relative">
        <div className="flex whitespace-nowrap gap-3 transition-transform w-[max-content]">

            <Button 
            variant="dark" 
            className="py-1 px-3 rounded-lg whitespace-nowrap">All</Button>
            <Button className="py-1 px-3 rounded-lg whitespace-nowrap">Videos</Button>
            <Button className="py-1 px-3 rounded-lg whitespace-nowrap">Photos</Button>
            <Button className="py-1 px-3 rounded-lg whitespace-nowrap">TiktokVideos</Button>
            <Button className="py-1 px-3 rounded-lg whitespace-nowrap">MonkeyBar</Button>
            <Button className="py-1 px-3 rounded-lg whitespace-nowrap">Mothers Day</Button>
            <Button className="py-1 px-3 rounded-lg whitespace-nowrap">Fathers Day</Button>
        </div>
    </div>
    )
}