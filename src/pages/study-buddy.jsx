import React, { useEffect, useState } from "react";
import { apiLink } from "../data";
import useToken from "../components/useToken";
import axios from "axios";

const StudyBuddy = () => {
   const [loading, setLoading] = useState(true);
   const [data, setData] = useState(0);
   const [error, setError] = useState(0);
   const userId = useToken().getUserId();

   const fetchData = () => {
      fetch(`${apiLink}/buddies`)
         .then((data) => data.json())
         .then((data) => {
            setLoading(false);
            setData(data);
         })
         .catch((err) => {
            console.log(err);
            setError(1);
         });
   };

   const callBuddy = (contact) => {
      alert(contact);
   };

   const removeBuddy = (id) => {
      if (confirm("Jsi si jist, že chceš inzerát odstranit?")) {
         axios
            .put(`${apiLink}/buddy/${id}`, { state: "removed" })
            .then((response) => setData(data.filter((item) => item.id != id)))
            .catch((err) => console.log(err));
      } else return;
   };

   const editBuddy = ({ message, name, contact, id }) => {
      const newName = window.prompt("Jak se jmenuješ?", name);
      const newMessage = window.prompt("Co chceš světu o sobě říct?", message);
      const newContact = window.prompt(
         "Jak tě mají buddíci kontaktovat?",
         contact
      );

      if (!newName || !newMessage || !newContact)
         return alert("Je nutno vyplnit všechna pole!");

      axios
         .put(`${apiLink}/buddy/${id}`, {
            message: newMessage,
            name: newName,
            contact: newContact,
         })
         .then((response) => {
            const newItem = data.find((item) => item.id == id);
            newItem.contact = newContact;
            newItem.message = newMessage;
            newItem.name = newName;
            setData([newItem, ...data.filter((item) => item.id != id)]);
         })
         .catch((err) => console.log(err));
   };

   const addBuddy = () => {
      const name = window.prompt("Jak se jmenuješ?");
      const message = window.prompt("Co chceš světu o sobě říct?");
      const contact = window.prompt("Jak tě mají buddíci kontaktovat?");
      if (!name || !message || !contact)
         return alert("Vyplň prosím všechna pole!");

      const body = {
         name,
         message,
         contact,
         state: "active",
         userId,
      };

      axios
         .post(`${apiLink}/buddies`, { ...body })
         .then((x) => {
            alert("Úspěšně přidáno!");
            setData([...data, body]);
            window.scrollTo(0, document.body.scrollHeight);
         })
         .catch((err) => {
            console.log(err);
            setError(1);
         });
   };

   const printDataFromTo = (from, to) => {
      return data
         .slice(from, to)
         .map(
            (
               { message, name, contact, userId: currentQuestionUserId, id },
               i
            ) => {
               const isEditable = userId == currentQuestionUserId;
               if (isEditable)
                  return (
                     <div className="all-questions__item is-editable" key={i}>
                        <h3 className="question__content">{name}</h3>
                        <div>{message}</div>
                        <div className="container-two-btns">
                           <a
                              href="#"
                              className="btn btn-primary w-button"
                              onClick={() =>
                                 editBuddy({ message, name, contact, id })
                              }
                           >
                              Upravit
                           </a>
                           <a
                              href="#"
                              className="btn btn-secondary btn-critical w-button"
                              onClick={() => removeBuddy(id)}
                           >
                              Odstranit
                           </a>
                        </div>
                     </div>
                  );
               return (
                  <div className="all-questions__item" key={i}>
                     <h3 className="question__content">{name}</h3>
                     <div>{message}</div>
                     <a
                        href="#"
                        onClick={() => callBuddy(contact)}
                        className="btn btn-secondary w-button"
                     >
                        Poslat zprávu
                     </a>
                  </div>
               );
            }
         );
   };

   useEffect(() => {
      fetchData();
   }, []);
   return (
      <div>
         <div className="section wf-section">
            <div className="container w-container">
               <div className="study-buddy__header">
                  <h1 className="study-buddy__heading">
                     <span className="inline-icon is-big">people</span> Hledám
                     studybuddyho
                  </h1>
                  <a
                     href="#"
                     onClick={() => addBuddy()}
                     className="btn btn-primary is-small w-button"
                  >
                     <span className="inline-icon">add</span>Přidat inzerát
                  </a>
               </div>
               <div className="main w-row" id="content">
                  {loading ? (
                     <div className="loading-jozo">
                        <img src="images/webclip.png" alt="Načítání" />
                        Načítání...
                     </div>
                  ) : error || !data ? (
                     <h1>Nepodařilo se načíst data</h1>
                  ) : data.length == 0 ? (
                     <div className="text-center">
                        <h2>Zatím tu žádný inzerátek není</h2>
                        <p>
                           Můžeš být úplně úplně úplně první kdo inzerát přidá
                           🥵
                        </p>
                     </div>
                  ) : (
                     <>
                        <div className="w-col w-col-6">
                           {printDataFromTo(0, data.length / 2)}
                        </div>
                        <div className="w-col w-col-6">
                           {printDataFromTo(data.length / 2, data.length)}
                        </div>
                     </>
                  )}
               </div>
            </div>
         </div>
      </div>
   );
};

export default StudyBuddy;
