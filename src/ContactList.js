import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ContactCard from './ContactCard'; // استيراد مكون بطاقة الاتصال

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/?results=10');
        setContacts(response.data.results);
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    };
    fetchContacts();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center">Contact List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {contacts.map((contact) => (
          <ContactCard key={contact.login.uuid} contact={contact} />
        ))}
      </div>
    </div>
  );
};

export default ContactList;
