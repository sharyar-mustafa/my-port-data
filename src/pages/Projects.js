import React from 'react'
import Footer from '../componets/Footer/Foot'
import wali from "../componets/Pic/wali.PNG"
import salt from "../componets/Pic/salt.PNG"

export default function project() {
  return (
    <div>
      <section className="text-gray-400 body-font bg-gray-900">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">Lates Project's</h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-400 text-opacity-90">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={wali} alt="content" />
                <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">A.SM LAB</h3>
                <h2 className="text-lg text-white font-medium title-font mb-4">Wali-fashion</h2>
                <p className="leading-relaxed text-base">Wali faction was started with the raise of 2021 in the online shopping sector of Pakistan</p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={salt} alt="content" />
                <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">A.SM LAB</h3>
                <h2 className="text-lg text-white font-medium title-font mb-4">Salt n pepper</h2>
                <p className="leading-relaxed text-base">Salt'n Pepper Restaurants of gracious dinning, the ultimate dinning destinations</p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://source.unsplash.com/web/723x403" alt="content" />
                <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">A.SM LAB</h3>
                <h2 className="text-lg text-white font-medium title-font mb-4">The fashion stock</h2>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/723x403" alt="content" />
                <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">A.SM LAB</h3>
                <h2 className="text-lg text-white font-medium title-font mb-4">San Francisco</h2>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
