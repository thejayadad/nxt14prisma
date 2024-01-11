import React from 'react';
import {
  FiTwitter,
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiGithub,
} from 'react-icons/fi';
import Divider from '../Divider';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-grey text-gray-800 w-full py-8">
      <div className="max-w-screen-xl px-4 mx-auto ">
        <Divider />
        <ul className="flex flex-wrap justify-between max-w-screen-md mx-auto text-lg font-light">
          <li className="my-2">
            <a
              className=" hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
              href="#"
            >
              FAQ
            </a>
          </li>
          <li className="my-2">
            <a
              className=" hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
              href="#"
            >
              Configuration
            </a>
          </li>
          <li className="my-2">
            <a
              className=" hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
              href="#"
            >
              Github
            </a>
          </li>
          <li className="my-2">
            <a
              className=" hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
              href="#"
            >
              LinkedIn
            </a>
          </li>
        </ul>
        <div className="pt-8 flex max-w-xs mx-auto items-center justify-between">
          <a
            href="#"
            className="transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
          >
            <FiTwitter size={20} />
          </a>
          <a
            href="#"
            className=" transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
          >
            <FiFacebook size={20} />
          </a>
          <a
            href="#"
            className=" transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
          >
            <FiInstagram size={20} />
          </a>
          <a
            href="#"
            className=" transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
          >
            <FiLinkedin size={20} />
          </a>
          <a
            href="#"
            className="transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
          >
            <FiGithub size={20} />
          </a>
        </div>
        <div className="text-center text-gray-500 dark:text-gray-200 pt-10 sm:pt-12 font-light flex items-center justify-center">
          By Thejayadad
        </div>
      </div>
    </footer>
  );
};

export default Footer;
