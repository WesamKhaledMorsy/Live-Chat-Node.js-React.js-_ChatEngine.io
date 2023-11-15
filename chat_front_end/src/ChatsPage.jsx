// import {MultiChatSocket , MultiChatWindow ,useMultiChatLogic}  from 'react-chat-engine-advanced'
import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage = (props) => {
    /** use this chat logic when use this lib => react-chat-engine-advanced */
    /* project Id => that the user belongs to        ,  username            , user secret  */
    // const chatProps = useMultiChatLogic(
    //                 '030ec622-2f9c-443e-b153-7e78a1906cbd', 
    //                 props.user.username , 
    //                 props.user.secret);

    return (
        /** use this chat logic when use this lib => react-chat-engine-advanced */
        // <div style={{ height: '100vh' }}>
        //     <MultiChatSocket {...chatProps} />
        //     <MultiChatWindow {...chatProps} style={{ height :'100%'}} />
        // </div>
        /** use this => react-chat-engine-pretty */
        <div style={{height:'100vh'}}>
            <PrettyChatWindow
                    projectId="030ec622-2f9c-443e-b153-7e78a1906cbd"
                    username={props.user.username}
                    secret={props.user.secret}
                    style={{ height: '100%' }}
                />
        </div>
        
    )
    
}
export default ChatsPage    