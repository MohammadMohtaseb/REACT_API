import React, { useState } from 'react';

const ContactCard = ({ contact }) => {
  const [showAge, setShowAge] = useState(false);

  const handleToggleAge = () => {
    setShowAge(!showAge);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg  overflow-hidden">
      <img
        src={contact.picture.large}
        alt={`${contact.name.first} ${contact.name.last}`}
        className="w-full h-60 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">
          {contact.name.first} {contact.name.last}
        </h2>
        <p className="text-sm text-gray-600">{contact.email}</p>
        <p className="text-sm text-gray-600">{contact.location.city}</p>
        {showAge && (
          <p className="text-sm text-gray-600 mt-2">Age: {contact.dob.age}</p>
        )}
        <button
          onClick={handleToggleAge}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          {showAge ? 'Hide Age' : 'Show Age'}
        </button>
      </div>
    </div>
  );
};

export default ContactCard;
