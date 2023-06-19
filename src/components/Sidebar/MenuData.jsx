import {BsChatSquareDots,BsPeople} from 'react-icons/bs';
import {CiGrid41} from 'react-icons/ci';
import {FcTodoList} from 'react-icons/fc';
import {IoSettingsOutline} from 'react-icons/io5'
import {HiOutlineChatBubbleLeftEllipsis} from 'react-icons/hi2'

export const MenuData = [ 
    {
        id: 1,
        icons: <CiGrid41 size={24}/>,
        value: 'Home'
    },
    {
        id: 2,
        icons: <HiOutlineChatBubbleLeftEllipsis size={24}/>,
        value: 'Message'
    },
    {
        id: 3,
        icons: <FcTodoList size={24}/>,
        value: 'Tasks'
    },
    {
        id: 4,
        icons: <BsPeople size={24}/>,
        value: 'Members'
    },
    {
        id: 5,
        icons: <IoSettingsOutline size={24}/>,
        value: 'Settings'
    },
]

export const Myproject = ['Mobile App', 'Website Redesign', 'Design System', 'Wireframes']