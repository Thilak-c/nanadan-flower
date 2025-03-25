// // pages/services.js
// "use client"
// import React from 'react';
// import { CheckCircleIcon } from '@heroicons/react/solid';
// import ChoiceButton from '@/components/ChoiceButton';

// const ServicePage = () => {
//   return (
//     <div className="bg-gray-900 text-white">
//       {/* Hero Section */}
//       <section className="bg-indigo-800 bg-opacity-0 text-white text-center py-16">
//         <h1 className="text-4xl font-bold">Welcome to <br />  Nandan Flower</h1>
//         <p className="mt-4 text-lg">Your perfect getaway in 254, Patliputra Colony, Patna 800013, Bihar.</p>
//         <button className="animate-bounce mt-6 bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg hover:bg-yellow-300">
//           Book Your Stay
//         </button>
//       </section>
//       <div className='h-1 bg-white w-full bg-opacity-15'></div>

//       <div className="max-w-4xl mx-auto p-0">
//         <h2 className="text-center text-3xl mt-6 font-bold text-gray-400 mb-8">Our Prices</h2>

//         {/* Basic Package */}
//         <div className="p-4">
//           <div className="border border-gray-300 rounded-2xl bg-opacity-90 bg-white shadow-lg p-6 hover:shadow-2xl transition-all duration-300 ease-in-out">
//             <h3 className="text-center font-semibold text-xl lg:text-2xl bg-gray-800 text-white py-4 rounded-xl mb-6">Basic <br /> (But Good Enough)</h3>
//             <div className="flex justify-between mb-6">
//               <div className="w-full">
//                 <ul className="flex flex-col gap-4 text-lg text-gray-700">
//                   <li className="flex items-start">
//                     <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
//                     <div className="flex flex-col">
//                       <span>Event Venue</span>
//                       <p className="text-sm text-gray-500 mt-1">A spacious and elegant venue for your event.</p>
//                     </div>
//                   </li>
//                   <li className="flex items-start">
//                     <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
//                     <div className="flex flex-col">
//                       <span>1 Event Hall</span>
//                       <p className="text-sm text-gray-500 mt-1">A Enough space for your event.</p>
//                     </div>
//                   </li>
//                   <li className="flex items-start">
//                     <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
//                     <div className="flex flex-col">
//                       <span>Seating Arrangement</span>
//                       <p className="text-sm text-gray-500 mt-1">Comfortable seating for all your guests.</p>
//                     </div>
//                   </li>
//                   <li className="flex items-start">
//                     <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
//                     <div className="flex flex-col">
//                       <span>Flower Decoration</span>
//                       <p className="text-sm text-gray-500 mt-1">Beautiful floral arrangements to enhance the ambiance.</p>
//                     </div>
//                   </li>
//                   <li className="flex items-start">
//                     <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
//                     <div className="flex flex-col">
//                       <span>Basic Decoration</span>
//                       <p className="text-sm text-gray-500 mt-1">Minimalist decor to suit all types of events.</p>
//                     </div>
//                   </li>
//                   <li className="flex items-start">
//                     <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
//                     <div className="flex flex-col">
//                       <span>1 Whole Floor</span>
//                       <p className="text-sm text-gray-500 mt-1">Complete access to a dedicated floor for your event.</p>
//                     </div>
//                   </li>
//                   <li className="flex items-start">
//                     <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
//                     <div className="flex flex-col">
//                       <span>Light Decoration</span>
//                       <p className="text-sm text-gray-500 mt-1">Subtle lighting to set the right mood for your event.</p>
//                     </div>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             {/* <h4 className="text-center text-3xl font-bold text-green-600 mt-4">Rs. 44,436</h4> */}
//             <ChoiceButton />
//           </div>
//         </div>

//         {/* Premium Package */}
//         <div className="p-4 mt-8">
//           <div className="border border-gray-300 bg-opacity-90 rounded-2xl bg-white shadow-lg p-6 hover:shadow-2xl transition-all duration-300 ease-in-out">
//             <h3 className="text-center font-semibold text-xl lg:text-2xl bg-yellow-800 text-white py-4 rounded-xl mb-6">Premium <br /> (The Ultimate Experience)</h3>
//             <div className="flex justify-between mb-6">
//               <div className="w-full">
//                 <ul className="flex flex-col gap-4 text-lg text-gray-700">
//                   <li className="flex items-start">
//                     <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
//                     <div className="flex flex-col">
//                       <span>Event Venue</span>
//                       <p className="text-sm text-gray-500 mt-1">A spacious, luxurious venue for your exclusive event.</p>
//                     </div>
//                   </li>
//                   <li className="flex items-start">
//                     <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
//                     <div className="flex flex-col">
//                       <span>2 Event Hall</span>
//                       <p className="text-sm text-gray-500 mt-1">A Enough space for your event.</p>
//                     </div>
//                   </li>
//                   <li className="flex items-start">
//                     <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
//                     <div className="flex flex-col">
//                       <span>Seating Arrangement</span>
//                       <p className="text-sm text-gray-500 mt-1">Comfortable and premium seating for up to 200 guests.</p>
//                     </div>
//                   </li>
//                   <li className="flex items-start">
//                     <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
//                     <div className="flex flex-col">
//                       <span>Premium Decoration</span>
//                       <p className="text-sm text-gray-500 mt-1">Exquisite decor that adds elegance and style to your event.</p>
//                     </div>
//                   </li>
//                   <li className="flex items-start">
//                     <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
//                     <div className="flex flex-col">
//                       <span>Catering for 100 People</span>
//                       <p className="text-sm text-gray-500 mt-1">Delicious meals for up to 100 guests, prepared by top chefs.</p>
//                     </div>
//                   </li>
//                   <li className="flex items-start">
//                     <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
//                     <div className="flex flex-col">
//                       <span>Premium Decoration</span>
//                       <p className="text-sm text-gray-500 mt-1">Detailed and luxurious decoration for a grand atmosphere.</p>
//                     </div>
//                   </li>
//                   <li className="flex items-start">
//                     <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
//                     <div className="flex flex-col">
//                       <span>2 Floors</span>
//                       <p className="text-sm text-gray-500 mt-1">Full access to two floors for your event.</p>
//                     </div>
//                   </li>
//                   <li className="flex items-start">
//                     <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
//                     <div className="flex flex-col">
//                       <span>Exclusive Add-Ons</span>
//                       <p className="text-sm text-gray-500 mt-1">Access to exclusive add-ons like live music and VIP lounge.</p>
//                     </div>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             {/* <h4 className="text-center text-3xl font-bold text-green-600 mt-4">Rs. 99,452</h4> */}
//             <ChoiceButton />
//           </div>
//         </div>

//         {/* Luxury Package */}
//         <div className="p-4 mt-8">
//           <div className="border border-gray-300 bg-opacity-90 rounded-2xl bg-white shadow-lg p-6 hover:shadow-2xl transition-all duration-300 ease-in-out">
//             <h3 className="text-center  font-semibold text-xl lg:text-2xl bg-purple-800 text-white py-4 rounded-xl mb-6">Luxury <br />(The Grand Experience)</h3>
//             <div className="flex justify-between mb-6">
//               <div className="w-full">
//                 <ul className="flex flex-col gap-4 text-lg text-gray-700">
//                   <li className="flex items-start">
//                     <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
//                     <div className="flex flex-col">
//                       <span>Event Venue</span>
//                       <p className="text-sm text-gray-500 mt-1">A grand, luxurious venue for your ultimate event experience.</p>
//                     </div>
//                   </li>
//                   <li className="flex items-start">
//                     <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
//                     <div className="flex flex-col">
//                       <span>Seating Arrangement</span>
//                       <p className="text-sm text-gray-500 mt-1">Custom seating arrangements for up to 500 guests.</p>
//                     </div>
//                   </li>
//                   <li className='flex items-start'>
//                   <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />

//                     <div className="flex flex-col">
//                       <span>3 Event Hall</span>
//                       <p className="text-sm text-gray-500 mt-1">A Enough space for your event.</p>
//                     </div>
//                   </li>
//                   <li className="flex items-start">
//                     <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
//                     <div className="flex flex-col">
//                       <span>Luxury Decoration</span>
//                       <p className="text-sm text-gray-500 mt-1">Elegant and extravagant decoration, with unique themes.</p>
//                     </div>
//                   </li>
//                   <li className="flex items-start">
//                     <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
//                     <div className="flex flex-col">
//                       <span>Catering for 250 People</span>
//                       <p className="text-sm text-gray-500 mt-1">Gourmet catering for up to 250 guests, featuring a wide selection of cuisines.</p>
//                     </div>
//                   </li>
//                   <li className="flex items-start">
//                     <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
//                     <div className="flex flex-col">
//                       <span>Manager On-site</span>
//                       <p className="text-sm text-gray-500 mt-1">A dedicated event manager to handle all logistics and coordination.</p>
//                     </div>
//                   </li>
//                   <li className="flex items-start">
//                     <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
//                     <div className="flex flex-col">
//                       <span>Professional Photography</span>
//                       <p className="text-sm text-gray-500 mt-1">Professional photographers to capture every memorable moment.</p>
//                     </div>
//                   </li>
//                   <li className="flex items-start">
//                     <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
//                     <div className="flex flex-col">
//                       <span>3 Floors</span>
//                       <p className="text-sm text-gray-500 mt-1">Access to three full floors for your event, with multiple venue setups.</p>
//                     </div>
//                   </li>
//                   <li className="flex items-start">
//                     <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
//                     <div className="flex flex-col">
//                       <span>Exclusive Entertainment</span>
//                       <p className="text-sm text-gray-500 mt-1">Premium entertainment options such as live performances and DJs.</p>
//                     </div>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             {/* <h4 className="text-center text-3xl font-bold text-green-600 mt-4">Rs. 2,99,175</h4> */}
//             <ChoiceButton />
//           </div>
//         </div>
//       </div>

//     </div>
//   );
// };

// export default ServicePage;
import React from 'react'

const page = () => {
  return (
    <div className='bg-gray-100 min-h-screen text-black'>
      <div className='animate-bounce text-center pt-64'>Under maintenance</div>
    </div>
  )
}

export default page