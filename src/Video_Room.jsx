import React from 'react'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from 'react-router-dom';

function Video_Room() {
    const {id} = useParams();

    const meeting =(Element) =>{
         // generate Kit Token
      const appID = 332069412;
      const serverSecret = "e45586b028bb530ddde9d5a21b7057e9";
      const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, id, Date.now().toString(), "swarnima");

      // Create instance object from Kit Token.
      const zp = ZegoUIKitPrebuilt.create(kitToken);

      zp.joinRoom({
        container:Element,
        sharedLinks: [
            {
              name: 'Personal link',
              url:`http://localhost:5173/${id}`
               
            },
          ],
        scenario: {
            mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
          },
      })

    }
  return (
    <>
    <div ref={meeting}/>
    </>
  )
}

export default Video_Room