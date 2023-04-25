const asyncHandler = require("express-async-handler");
const Chat = require('../models/chatModel')

const accesChat = asyncHandler(async (req,res)=>{
    const { userId } = req.body

    if(userId) {
        console.log("UserId param not sent with request");
        return res.sendStatus(400)
    }

    let isChat = await Chat.find({
        isGroupChat: false,
        $and: [
            {users:{$eleMatch:{$eq: req.user._id}}},
            {users:{$eleMatch:{$eq: userId}}}
        ]
    }).populate("users","-password").populate("lastestMesage")

    isChat = await User.populate(isChat, {
        path: 'latestMessage.sender',
        select: "name pic email"
    })

    if(isChat.length > 0){
        res.send(isChat[0])
    }else{
        let chatData = {
            chatName:  "sender",
            isGroupChat: false,
            users: [req.user._id, userId]
        }

        try {
            const createdChat = await Chat.create(chatData);
            const FullChat = await Chat.findOne({_id: createdChat._id}).populate(
                "users",
                "-password"
            )

            res.status(200).send(FullChat)
        } catch (error) {
            res.status(400)
            throw new Error(error.message);
        }
    }
})

module.exports - accesChat