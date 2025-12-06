import React from 'react'

const ContactList = () => {
  return (
    <div>

      {/* First chat card */}
      <div className="flex flex-col bg-white w-[410px] h-[735px] rounded-xl shadow-xl">

        {/* Top */}
        <section id='top1' className='flex justify-between items-center p-3 mb-5 shadow-lg h-[70px]'>
          {/* Avatar */}
          <div className="flex space-x-3 items-center">
            <img src="/person1.jpg" alt="" className='rounded-full size-12' />
            <div className="font-bold">Inbox</div>
          </div>
          {/* Icon */}
          <div className="rounded-full bg-gray-300 p-1 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="size-6 hover:text-gray-600 duration-200" viewBox="0 0 16 16">
              <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
              <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0" />
            </svg>
          </div>
        </section>

        {/* Body */}
        <section id='body1'>

          {/* Search Control */}
          <div className="flex justify-center bg-gray-200 rounded-3xl px-2 my-5 mx-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="self-center size-5" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
            <input type="text" className='w-full border-0 outline-0 bg-transparent p-1' />
          </div>

          {/* Avatar List */}
          <div className="flex items-center space-x-3 overflow-hidden mb-7 mx-auto cursor-pointer">

            {/* Avatar 1 */}
            <div className='rounded-full size-12 bg-gray-300 m-3 p-1 flex items-center flex-shrink-0'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="size-9 text-gray-700" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
              </svg>
            </div>

            {/* Avatar 2 */}
            <div className='bg-gray-300 rounded-full my-3 p-1 shrink-0 relative group'>
              <img src="/person2.jpg" alt="" className='size-12 rounded-full border border-white' />
              <div className="absolute bottom-1 right-0 bg-green-500 size-3 p-1 rounded-full group-hover:animate-pulse"></div>
            </div>

            {/* Avatar 3 */}
            <div className='bg-gray-300 rounded-full my-3 p-1 shrink-0 relative group'>
              <img src="/person3.jpg" alt="" className='size-12 rounded-full border border-white' />
              <div className="absolute bottom-1 right-0 bg-green-500 size-3 p-1 rounded-full group-hover:animate-pulse"></div>
            </div>

            {/* Avatar 4 */}
            <div className='bg-gray-300 rounded-full my-3 p-1 shrink-0 relative group'>
              <img src="/person4.jpg" alt="" className='size-12 rounded-full border border-white' />
              <div className="absolute bottom-1 right-0 bg-green-500 size-3 p-1 rounded-full group-hover:animate-pulse"></div>
            </div>

            {/* Avatar 5 */}
            <div className='bg-gray-300 rounded-full my-3 p-1 shrink-0 relative group'>
              <img src="/person5.jpg" alt="" className='size-12 rounded-full border border-white' />
              <div className="absolute bottom-1 right-0 bg-green-500 size-3 p-1 rounded-full group-hover:animate-pulse"></div>
            </div>

            {/* Avatar 6 */}
            <div className='bg-gray-300 rounded-full my-3 p-1 shrink-0 relative group'>
              <img src="/person6.jpg" alt="" className='size-12 rounded-full border border-white' />
              <div className="absolute bottom-1 right-0 bg-green-500 size-3 p-1 rounded-full group-hover:animate-pulse"></div>
            </div>

          </div>

          {/* Contact List */}
            <div className="flex flex-col overflow-y-hidden space-y-1 h-[410px]">
                
                {/* Contact 1 */}
                <div className='flex justify-between items-center p-3 mb-5 ml-2
                hover:bg-gray-100 duration-100 hover:rounded-l-2xl cursor-pointer'>
                    {/* Avatar */}
                    <div className="flex space-x-3 items-center">
                        <img src="/person2.jpg" alt="" className='rounded-full size-12' />
                        <div>
                            <div className="">Sasha</div>
                            <div className="">How are you today?</div>
                        </div>
                    </div>

                    {/* Time */}
                    <div className="font-bold">
                        12:41
                    </div>
                </div>

                {/* Contact 2 */}
                <div className='flex justify-between items-center p-3 mb-5 ml-2
                hover:bg-gray-100 duration-100 hover:rounded-l-2xl cursor-pointer'>
                    {/* Avatar */}
                    <div className="flex space-x-3 items-center">
                        <img src="/person3.jpg" alt="" className='rounded-full size-12' />
                        <div>
                            <div className="font-bold">John</div>
                            <div className="font-bold">Hi friend! How's it going?</div>
                        </div>
                    </div>

                    {/* Time */}
                    <div className="font-bold">
                        14:23
                    </div>
                </div>

                {/* Contact 3 */}
                <div className='flex justify-between items-center p-3 mb-5 ml-2
                hover:bg-gray-100 duration-100 hover:rounded-l-2xl cursor-pointer'>
                    {/* Avatar */}
                    <div className="flex space-x-3 items-center">
                        <img src="/person4.jpg" alt="" className='rounded-full size-12' />
                        <div>
                            <div className="">Michael</div>
                            <div className="line-clamp-1">Are you interested in participating in this </div>
                        </div>
                    </div>

                    {/* Time */}
                    <div className="font-bold">
                        15:28
                    </div>
                </div>

                {/* Contact 4 */}
                <div className='flex justify-between items-center p-3 mb-5 ml-2
                hover:bg-gray-100 duration-100 hover:rounded-l-2xl cursor-pointer'>
                    {/* Avatar */}
                    <div className="flex space-x-3 items-center">
                        <img src="/person5.jpg" alt="" className='rounded-full size-12' />
                        <div>
                            <div className="font-bold">Joshua</div>
                            <div className="font-bold">Do you work tomorrow?</div>
                        </div>
                    </div>

                    {/* Time */}
                    <div className="font-bold">
                        11:14
                    </div>
                </div>

                {/* Contact 5 */}
                <div className='flex justify-between items-center p-3 mb-5 ml-2
                hover:bg-gray-100 duration-100 hover:rounded-l-2xl cursor-pointer'>
                    {/* Avatar */}
                    <div className="flex space-x-3 items-center">
                        <img src="/person6.jpg" alt="" className='rounded-full size-12' />
                        <div>
                            <div className="font-bold">Ben</div>
                            <div className="font-bold">How are you today?</div>
                        </div>
                    </div>

                    {/* Time */}
                    <div className="font-bold">
                        17:25
                    </div>
                </div>

            </div>
               
        </section>

        {/* Footer */}
        <footer id='footer1' className='flex item-center justify-between px-5 
        py-3 border-t-2 border-slate-100'>

            {/* Icon 1 */}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="size-6 cursor-pointer" viewBox="0 0 16 16">
                <path d="M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
            </svg>

            {/* Icon 2 */}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="size-6 text-gray-400 hover:text-black cursor-pointer" viewBox="0 0 16 16">
                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
            </svg>
            
            {/* Icon 3*/}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="size-6 text-gray-400 hover:text-black cursor-pointer" viewBox="0 0 16 16">
                <path d="M15.5 8.516a7.5 7.5 0 1 1-9.462-7.24A1 1 0 0 1 7 0h2a1 1 0 0 1 .962 1.276 7.5 7.5 0 0 1 5.538 7.24m-3.61-3.905L6.94 7.439 4.11 12.39l4.95-2.828 2.828-4.95z"/>
            </svg>

        </footer>

      </div>

    </div>
  )
}

export default ContactList
