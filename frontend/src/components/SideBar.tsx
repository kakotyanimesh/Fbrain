import { Brain } from "../Icons/Brain"
import { TwitterIcon } from "../Icons/TwitterIcon"
import { YoutubeIcon } from "../Icons/YoutubeIcon"

export const SideBar = () => {
    return (
        <div className="border-r  min-h-screen flex flex-col gap-4 items-center text-center p-6 w-72">
            <h1 className="font-black text-2xl flex items-center gap-4">
                <Brain/>    
                Fbrain
            </h1> 
            <ul className="space-y-5 w-full">
                {SideBarItesm.map((icon, index) => (
                    <li key={index} className="flex items-center gap-2  text-xl hover:bg-slate-300 justify-center rounded-md py-1 transition delay-20">
                        {icon.icon}
                        {icon.title}
                    </li>
                ))}
            </ul> 
        </div>
    )
}


const SideBarItesm = [
    {title  : 'Youtube' , icon:<YoutubeIcon/>},
    {title  : 'Twitter' , icon: <TwitterIcon/>}
]