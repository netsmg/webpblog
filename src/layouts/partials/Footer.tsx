"use client";

import Social from "@/components/Social";
import config from "@/config/config.json";
import menu from "@/config/menu.json";
import social from "@/config/social.json";
import { markdownify } from "@/lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const { copyright } = config.params;

  return (
    <footer className="bg-footer text-white ">
      <div className="container pt-32">
        <div className="row gx-4 justify-center">
          <div className="col-10 lg:col-4">
            {/* logo */}
            <div className="mb-10 lg:mb-8">
              <Image
                src="/images/logo-light.png"
                className="mb-4"
                width={144}
                height={40}
                alt="banner image"
                priority
              />
              <p className="mb-4 text-white lg:mb-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis, consequuntur!
              </p>
              <div>
                <h5 className="mb-4 text-white">Follow Us</h5>
                <div>
                  <Social source={social.main} className="social-icons" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-10 lg:col-4">
            {/* quick link */}
            <div className="mb-10 lg:mb-8">
              <div className="row justify-center">
                {menu.footer.map((menu) => (
                  <div key={menu.name} className="col">
                    <h5 className="mb-5 font-bold text-white lg:mb-6">
                      {menu.name}
                    </h5>
                    <ul>
                      {menu.children.map((child, index) => (
                        <li key={index} className="mb-3 hover:text-primary">
                          <Link href={child.url}>{child.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-10 lg:col-4">
            {/* sub */}
            <div className="mb-10 lg:mb-8">
              <h3 className="mb-2 font-extrabold text-white">
                Subscribe to the latest news
              </h3>
              <p className="mb-7 text-white">
                Stay in the loop and never miss out on the latest updates
                insights, and trends by subscribing to our newsletter!
              </p>
              <div className="flex flex-nowrap">
                <input
                  className="form-input rounded-l-[8px] rounded-r-none border-r-0 border-transparent px-4"
                  placeholder="Your email adress"
                  type="subscribe"
                  name="subscribe"
                  // value={inputVal}
                  // onChange={handleChange}
                  autoComplete="off"
                  // autoFocus
                  // ref={inputRef}
                />
                <button
                  className="btn btn-primary rounded-l-none rounded-r-[8px] "
                  type="submit"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-light py-7">
          <div className="container text-center ">
            <p
              className="copyright"
              dangerouslySetInnerHTML={markdownify(copyright)}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
