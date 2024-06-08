import { Trash, DeviceMobileCamera, Envelope } from "@phosphor-icons/react";

function HaveContacts({
  contact: { firstName, lastName, email, number },
  contact,
  deleteHandler,
}) {
  return (
    <>
      <ul className="flex flex-col gap-2 ">
        <li className="flex flex-col gap-2 p-4 bg-gray-100 rounded-lg shadow-md md:items-center md:flex-row ">
          <span className="w-full text-lg font-semibold text-center md:text-left">{`${firstName}  ${lastName}`}</span>
          <span className="icon-flex">
            <Envelope size={24} weight="light" className="icon" />
            <span>{email}</span>
          </span>
          <span className="icon-flex ">
            <DeviceMobileCamera size={24} weight="light" className="icon" />
            <span>{number}</span>
          </span>
          <span className=" md:flex md:justify-end">
            <Trash
              size={24}
              weight="light"
              onClick={() => deleteHandler(contact)}
              className="transition-all duration-200 cursor-pointer hover:fill-red-700 icon hover:scale-105"
            />
          </span>
        </li>
      </ul>
    </>
  );
}

export default HaveContacts;

{
}
