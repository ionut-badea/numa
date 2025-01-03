import Text from "@/components/text";

export default function Header() {
  return (
    <header className="bg-teal-800 h-28">
      <div className="container mx-auto flex items-center h-full">
        <div className="text-white flex items-center space-x-2">
          <Text as="span" vSize="4xl" vWeight="light" className='cursor-pointer'>
            &#8592;
          </Text>
          <Text as="span" vSize="4xl" vWeight="bold">
            INVOICE OPTIONS
          </Text>
        </div>
      </div>
    </header>
  );
}
