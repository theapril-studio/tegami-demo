import { AiOutlineLineChart, AiOutlineBell } from "react-icons/ai";
import {IoBookmarkOutline, IoBulbOutline,IoLibraryOutline} from "react-icons/io5";


const menuiconsize = 'w-full h-full '
export const MenuList = [
    {name: "Library",icon: <IoLibraryOutline className={menuiconsize} />},
    {name: "Notification",icon: <AiOutlineBell className={menuiconsize} />},
    {name: "Analytics",icon: <AiOutlineLineChart className={menuiconsize} />},
    {name: "Bookmarks",icon: <IoBookmarkOutline className={menuiconsize} />},
    {name: "Explore",icon: <IoBulbOutline className={menuiconsize} />},
]