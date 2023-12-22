/* eslint-disable react/no-unescaped-entities */
import { SolitoImage } from 'solito/image';
//@ts-ignore
import Logo from '../../../apps/expo/assets/images/5thgalx-ver.png';

import { Footer, Div, A, Span } from '@expo/html-elements';
import { View } from 'react-native';

const WebFooter = () => {
  return (
    <Footer className="min-w-full flex-col pt-[40px]  border-t-[0.5px] border-black   bg-violet-300    ">
      <Div className="items-center flex-wrap flex-row py-6 w-full mx-auto max-w-7xl  px-10 md:flex justify-between">
        <Div className=" mb-6 md:mb-0">
          <A href="https://www.dynamicphlebotomycpr.org" className="justify-start items-start">
            <SolitoImage
              unoptimized
              alt='logo'
              src={Logo}
              contentFit='contain'
              width={200} height={250}
              style={{
                marginTop: 0,
                marginBottom: 50,
                marginLeft: -10,
                height: 230,
                width: 260
              }
              }
            />
          </A>
        </Div>
        <Div className="grid  md:pb-[100px] pb-[50px] grid-cols-1 gap-[50px] sm:gap-8 sm:mt-0 mt-8">



          {/* Connect Section */}
          <Div>
            <h2 className="mb-6  md:text-3xl text-2xl font-semibold font-[BebasNeue-Bold] uppercase text-purple-950 tracking-wide">Let's Connect</h2>
            <ul className="text-gray-800 ">
              <li className="mb-4">
                <a href="mailto:dynamicphlebotomycpr@gmail.com" className="hover:underline break-all ">dynamicphlebotomycpr@gmail.com</a>
              </li>

            </ul>
          </Div>

          {/* Socials Section */}
          <Div>
            <h2 className="mb-6 md:text-3xl text-2xl font-semibold font-[BebasNeue-Bold] tracking-wide uppercase text-purple-950">Socials</h2>
            <ul className="text-gray-800 ">
              <li className="mb-4">
                <a href="https://www.facebook.com/Dynamic-PhlebotomyCPR-733562010164615" className="hover:underline">Facebook</a>
              </li>
              <li className="mb-4">
                <a href="http://www.instagram.com/dynamic_phlebotomy" className="hover:underline">Instagram</a>
              </li>
            </ul>
          </Div>
        </Div>
      </Div >

      <hr className="my-0 border-red-700 sm:mx-auto  lg:my-8" />

      <Div className="px-4 py-3 text-center bg-violet-900 flex  w-full items-center justify-center  flex-wrap ">
        <Span className="font-bold flex-wrap text-sm text-gray-300 px-6 sm:text-center">© 2024  <a href="https://www.dynamicphlebotomycpr.org" className="mx-2 tracking-wider ">Dynamic Phlebotomy & CPR. </a> <br className='sm:hidden' /><a> All Rights Reserved.</a>
        </Span>
      </Div>

    </Footer >
  )
}

export default WebFooter