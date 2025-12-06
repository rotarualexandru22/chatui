import React from 'react'

const ChatRoom = () => {
  return (
    <div className='flex flex-col bg-white w-[410px] rounded-xl
    shadow-xl h-[735px]'>
        
        {/* Top Section*/}
        <section className='flex justify-between p-3 mb-5 h-[70px] shadow-lg'>
            <div className='flex items-center space-x-3'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="size-5 cursor-pointer hover:bg-gray-200 hover:rounded-full duration-200" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                </svg>
                <h3 className="font-black text-slate-700">Sasha</h3>
            </div>
            <div className='flex items-center justify-center space-x-3
            text-blue-700'>
                {/* Phone Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="size-5 cursor-pointer hover:text-blue-500 duration-200" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                </svg>
                {/* Video Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="size-5 cursor-pointer hover:text-blue-500 duration-200" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2z"/>
                </svg>
                {/* Info Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="size-5 cursor-pointer hover:text-blue-500 duration-200" viewBox="0 0 16 16">
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>
                </svg>
            </div>
        </section>

        {/* Body Section + Scroll */}
        <section className='flex flex-col space-y-3 mx-5 grow 
        overflow-y-auto pr-2 scroll-smooth'>

            {/* Sender message */}
            <div className='mb-3'>
                <h4 className='text-gray-500 text-center mb-2'>12:41</h4>
                {/* Text message */}
                <div className='flex space-x-3'>
                    <img src="/person2.jpg" alt="" className='size-12 rounded-full'/>
                    <p className='p-2 text-justify bg-gray-200 text-black rounded-tr-lg rounded-b-lg'>How are you today?</p>
                </div>
            </div>

            {/* Responder message */}
            <div className='mb-3'>
                <h4 className='text-gray-500 text-center mb-2'>12:43</h4>
                {/* Text message */}
                <div className='flex justify-end space-x-3'>
                    <p className='p-2 text-justify bg-blue-700 text-white rounded-tr-lg rounded-b-lg'>Doing great. How about you?</p>
                </div>
            </div>

            {/* Responder message 2 */}
            <div className='mb-3'>
                <h4 className='text-gray-500 text-center mb-2'>13:45</h4>
                {/* Text message */}
                <div className='flex justify-end space-x-3'>
                    <p className='p-2 text-justify bg-blue-700 text-white rounded-tr-lg rounded-b-lg'>Everything all right? It's been an hour since you texted me.</p>
                </div>
            </div>
           

            {/* Sender message 2 */}
            <div className='mb-3'>
                <h4 className='text-gray-500 text-center mb-2'>13:55</h4>
                {/* Text message */}
                <div className='flex space-x-3'>
                    <img src="/person2.jpg" alt="" className='size-12 rounded-full'/>
                    <p className='p-2 text-justify bg-gray-200 text-black rounded-tr-lg rounded-b-lg'>Yeah, sorry I got busy at work. 
                        I was checking up on you, I heard you were sick the last few days
                        but it seems you got better by your response.</p>
                </div>
            </div>

            {/* Responder message 2 */}
            <div className='mb-3'>
                <h4 className='text-gray-500 text-center mb-2'>13:57</h4>
                {/* Text message */}
                <div className='flex justify-end space-x-3'>
                    <p className='p-2 text-justify bg-blue-700 text-white rounded-tr-lg rounded-b-lg'>No problem. 
                        Thanks for checking up on me. Maybe we'll hang out this weekend if that works for you.</p>
                </div>
            </div>

            {/* Sender typing message */}
            <section>

                <div className='mb-3 flex space-x-2 items-start'>
                    <img src="/person2.jpg" alt="" className='size-12 rounded-full'/>
                    {/* Text message */}
                    <div className='flex items-center justify-start space-x-3
                    bg-gray-200 rounded-xl p-2'>
                        <div className='size-2 p-1 bg-gray-300 rounded-full animate-typing-bounce delay-0'></div>
                        <div className='size-2 p-1 bg-gray-400 rounded-full animate-typing-bounce delay-200'></div>
                        <div className='size-2 p-1 bg-gray-300 rounded-full animate-typing-bounce delay-400'></div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className='m-7'>
                {/* Input background container */}
                <div className='flex items-center bg-gray-200 w-full rounded-xl p-2'>
                    {/* Clip Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="size-8 rotate-45 p-1 shrink-0 cursor-pointer hover:bg-gray-300 rounded-full" viewBox="0 0 16 16">
                        <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0z"/>
                    </svg>
                        {/* Text Input */}
                        <input type="text" placeholder='type a message' className='w-full bg-transparent outline-0 px-2'/>
                        {/* Send Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="size-8 text-blue-700 p-1 shrink-0 hover:text-blue-500 cursor-pointer active:scale-90 duration-300 ease-in-out" viewBox="0 0 16 16">
                            <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z"/>
                        </svg>
                </div>
            </footer>
        </section>
    </div>
  )
}

export default ChatRoom