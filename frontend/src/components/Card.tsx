import { DeleteIcon } from "../Icons/DeleteIcon"
import { PlusIcon } from "../Icons/PlusIcon"
import { ShareIcon } from "../Icons/ShareIcon"
import { TwitterIcon } from "../Icons/TwitterIcon"
import { YoutubeIcon } from "../Icons/YoutubeIcon"

interface CardInterface {
    title :  string,
    link : string,
    type : 'youtube' | 'tweet'
} 



export const Card = (props : CardInterface) => {
    return <div className="border w-fit border-gray-200 flex gap-5 p-3  rounded-md h-fit flex flex-col">
        <div className="flex items-center gap-10 justify-between px-5">
            <div className="flex items-center gap-5">
                {props.type === 'youtube' && <YoutubeIcon/>}
                {props.type === 'tweet' && <TwitterIcon/>}
                <h1 className="text-xl font-bold">{props.title}</h1>
            </div>
            <div className="flex  gap-4">
                <button><ShareIcon/></button>
                <button><DeleteIcon/></button>
            </div>
        </div>
        <div>
        { props.type === 'youtube' && <iframe className="w-full rounded-xl" src={props.link.replace('watch?v=', 'embed/')} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}

        {
            props.type === 'tweet' && <blockquote className="twitter-tweet">
            <a href={props.link.replace('x.com', 'twitter.com')}></a> 
        </blockquote>
        } 
        </div>
    </div>
}

// https://youtu.be/RMd2hXlVEQg?si=gyAPDW1-giy-aFC1
// https://www.youtube.com/watch?v=RMd2hXlVEQg&list=RDMMkcvDPUZer7I&index=4

// <iframe width="560" height="315" src="https://www.youtube.com/embed/RMd2hXlVEQg?si=8uIzLV9BVWRsQxPX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>