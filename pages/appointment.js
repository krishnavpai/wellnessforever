import React from 'react'

const Appointment = () => {
  return (
    <div className="px-20">
        
<form>
    <div className="grid gap-6 mb-6 md:grid-cols-2 pt-20">
        <div>
            <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 light:text-white">First name</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500" placeholder="John" required/>
        </div>
        <div>
            <label for="last_name" className="block mb-2 text-sm font-medium text-gray-900 light:text-white">Last name</label>
            <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500" placeholder="Doe" required/>
        </div>
        
        <div>
            <label for="website" className="block mb-2 text-sm font-medium text-gray-900 light:text-white">Doctor name</label>
            <input type="url" id="website" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500" placeholder="Dr. P Mehta" required/>
        </div>
        <div>
            <label placeholder='DDMMYYY' className="block mb-2 text-sm font-medium text-gray-900 light:text-white">Date</label>
            <input type="Date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500" placeholder='DDMMYYY' required/>
        </div>
    </div>
    <div className="mb-6">
        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 light:text-white">Email address</label>
        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500" placeholder="john.doe@company.com" required/>
    </div> 
 
    <div className="flex items-start mb-6">
        <div className="flex items-center h-5">
        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 light:bg-gray-700 light:border-gray-600 light:focus:ring-blue-600 light:ring-offset-gray-800" required/>
        </div>
        <label for="remember" className="ml-2 text-sm font-medium text-gray-900 light:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline light:text-blue-500">terms and conditions</a>.</label>
    </div>
    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center light:bg-blue-600 light:hover:bg-blue-700 light:focus:ring-blue-800">Submit</button>
</form>

      
    </div>
  )
}

export default Appointment
