import Text from "@/components/text";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white py-12">
      <div className="w-full lg:w-3/4 xl:w-2/3 mx-auto">
        <div className="flex flex-col space-y-6 lg:space-y-0 lg:flex-row justify-between items-center lg:items-start">
          {/* Contact Section */}
          <div className="text-center lg:text-left space-y-1">
            <Text as="h4" vSize="lg" vWeight="bold" className="mb-4">
              Contact our help center
            </Text>
            <Text>We've got you covered, 24/7.</Text>
            <Text>+49 (0) 30 311 961 17</Text>
            <Text>info@numa-group.com</Text>
          </div>

          {/* Useful Links Section */}
          <div className="text-center lg:text-left space-y-1">
            <Text as="h4" vSize="lg" vWeight="bold" className="mb-4">
              Useful Links
            </Text>
            <ul>
              <li className="mb-1">
                <Link href="#" className="hover:underline">
                  Terms & Conditions
                </Link>
              </li>
              <li className="mb-1">
                <Link href="#" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Imprint
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="text-center lg:text-left space-y-1">
            <Text as="h4" vSize="lg" vWeight="bold" className="mb-4">
              Stay Social
            </Text>
            <div className="flex justify-center lg:justify-start space-x-2">
              <Link href="#" className="p-6 bg-neutral-300 hover:bg-neutral-400">
                <Image src="/icons/instagram.svg" width={28} height={28} alt="instagram" />
              </Link>
              <Link href="#" className="p-6 bg-neutral-300 hover:bg-neutral-400">
                <Image src="/icons/linkedin.svg" width={28} height={28} alt="LinkedIn" />
              </Link>
              <Link href="#" className="p-6 bg-neutral-300 hover:bg-neutral-400">
                <Image src="/icons/facebook.svg" width={28} height={28} alt="Facebook" />
              </Link>
            </div>
          </div>

          {/* Language Selection */}
          <div className="text-center lg:text-left space-y-1">
            <div className="flex">
              <Text as="h4" vSize="lg" vWeight="bold" className="mb-4">
                EN
              </Text>
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/material-sharp/24/expand-arrow--v1.png"
                alt="expand-arrow--v1"
                className="size-6 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
