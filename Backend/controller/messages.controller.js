import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async(req, res) =>{
   try {
    const {message} = req.body;
    const {id : receiverId} = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
        participants : {$all : [senderId,receiverId]},
    })

    if(!conversation){
        conversation = await Conversation.create({
            participants : [senderId,receiverId],
        })
    }

    const newMessage = new Message({
        senderId,
        receiverId,
        message,
    })

    conversation.messages.push(newMessage._id);
    res.status(201).json(newMessage);

    //conversation.save()    it it require 2 sec then next saving process will start after 2sec
    //newMessage.save()       

    await Promise.all([conversation.save(), newMessage.save()]);  //here both saving start at parallel didnt
                                                                  // didnt need to stop for conversation.save()


   } catch (error) {
    console.log("error while sending the message", error.message);
    res.status(500).json({error : "Internal server error"});
   }
}

export const getMessage = async (req, res) => {

    try {
        const {id : userToChatId} = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants : {$all : [senderId, userToChatId]},
        }).populate("messages");

        if(!conversation)
            res.status(201).json([]);

        const messages = conversation.messages;
        res.status(200).json(messages);


    } catch (error) {
        console.log("error while getting the message", error.message);
        res.status(500).json({error : "Internal server error"});
    }
}