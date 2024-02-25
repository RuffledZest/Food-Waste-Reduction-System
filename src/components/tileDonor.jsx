import React, { useState } from 'react';

const AddItemModal = ({ closeModal }) => {
    const handleSubmit = (e) => {
      e.preventDefault();
      
      // Add your form submission logic here
      // You may want to send the form data to your server or perform other actions
      closeModal(); // Close the modal after submission
    };
  
    return (
      <div style={styles.modalOverlay}>
        <div style={styles.modalContainer}>
          <span style={styles.close} onClick={closeModal}>&times;</span>
          <h2>Add Item Form</h2>
          <form onSubmit={handleSubmit}>
            <div style={styles.formGroup}>
              <label htmlFor="itemName">Item Name:</label>
              <input type="text" id="itemName" name="itemName" style={styles.input} required />
            </div>
  
            <div style={styles.formGroup}>
              <label htmlFor="itemType">Item Type:</label>
              <input type="text" id="itemType" name="itemType" style={styles.input} required />
            </div>
  
            <div style={styles.formGroup}>
              <label htmlFor="itemQuantity">Item Quantity:</label>
              <input type="number" id="itemQuantity" name="itemQuantity" style={styles.input} required />
            </div>
  
            <div style={styles.formGroup}>
              <label htmlFor="itemExpiry">Item Expiry Date:</label>
              <input type="date" id="itemExpiry" name="itemExpiry" style={styles.input} required />
            </div>
  
            <button type="submit" style={styles.submitButton}>Submit</button>
          </form>
          <button style={styles.closeButton} onClick={closeModal}>Close</button>
        </div>
      </div>
    );
  };
  
  // Styles
  const styles = {
    modalOverlay: {
      width: '450px',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex:"800",
      
    },
    modalContainer: {
        border: '3px solid',
      background: '#fff',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      width: '500px',
      maxWidth: '400px',
      zIndex:"10" // Added for close button positioning
    },
    close: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      cursor: 'pointer',
    },
    formGroup: {
      marginBottom: '15px',
    },
    input: {
      width: '100%',
      padding: '8px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      boxSizing: 'border-box',
    },
    submitButton: {
      padding: '8px 12px',
      background: '#007BFF',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      marginRight: '5px',
    },
    closeButton: {
      padding: '8px 12px',
      background: '#ddd',
      color: '#333',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
  };
  
  
function TileDonor() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return <div className="px-5 py-10 gap-20 grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3  sm:grid-cols-1">
        {/* tile 1 */}

        <div
            className="group flex flex-col justify-start items-start gap-2 w-80 h-56 bg-gradient-to-br from-blue-800 to-black duration-500 relative rounded-lg p-4 hover:-translate-y-2 hover:shadow-xl shadow-purple-400"
        >
            <div
                style={{
                    // transform: "translateZ(75px)",
                    // transformStyle: "preserve-3d",
                    backgroundImage: "url('src/assets/wheat-and-flour-g2k-57bb87385f9b58cdfd6ab04b.jpg')",
                    backgroundPosition: "center",
                    // backdropFilter: "blur(100px)",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    // backdropFilter: "blur(20px)",
                }}
                className="flex flex-col items-center justify-center absolute duration-700 shadow-md group-hover:-translate-y-10 group-hover:-translate-x-1/4 hover:scale-[1.9] -bottom-10 -right-10 w-1/2 h-1/2 rounded-lg bg-purple-100 hover:cursor-pointer"
                alt="image here "
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <p className="text-1xl text-black" onClick={openModal}>
                    ADD ITEM</p></div>

            <div className="">
                <h2 className="text-2xl font-bold mb-2 text-white -bottom-10 -right-10 w-1/2 h-1/2">Make a new post</h2>
                <p className="text-gray-200 line-clamp-3">
                </p>
            </div>
            {isModalOpen && <AddItemModal closeModal={closeModal} />}
        </div>


        {/* tile 2 */}
        <div
            className="group z-1 flex flex-col justify-start items-start gap-2 w-80 h-56 duration-500 relative rounded-lg p-4 bg-gradient-to-br from-blue-800 to-black hover:-translate-y-2 hover:shadow-xl shadow-purple-400"
        >
            <div


                style={{
                    // transform: "translateZ(75px)",
                    // transformStyle: "preserve-3d",
                    backgroundImage: "url('src/assets/basmati-rice-recipe.jpg')",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    // backdropFilter: "blur(20px)",
                }}
                className="absolute duration-700 shadow-md group-hover:-translate-y-4 group-hover:-translate-x-4 -bottom-10 -right-10 w-1/2 h-1/2 rounded-lg bg-purple-400"
                alt="image here"
            ></div>

            <div className="">
                <h2 className="text-2xl font-bold mb-2 text-white">Rice</h2>
                <p className="text-gray-200 line-clamp-3">
                    Type: Grains
                    <br />
                    Quantity: 20kg
                    <br />
                    Expiry: 20/10/2022
                </p>
            </div>
            <button
                className="hover:bg-purple-400 bg-purple-600 text-white mt-6 rounded p-2 px-6"
            >
                Explore
            </button>
        </div>


        {/* tile 3 */}
        <div

            className="group flex flex-col justify-start items-start gap-2 w-80 h-56 duration-500 relative rounded-lg p-4 bg-gradient-to-br from-blue-800 to-black hover:-translate-y-2 hover:shadow-xl shadow-purple-400"
        >
            <div

                style={{
                    // transform: "translateZ(75px)",
                    // transformStyle: "preserve-3d",
                    backgroundImage: "url('src/assets/wheat-and-flour-g2k-57bb87385f9b58cdfd6ab04b.jpg')",
                    backgroundPosition: "center",
                    // backdropFilter: "blur(100px)",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    // backdropFilter: "blur(20px)",
                }}
                className="absolute duration-700 shadow-md group-hover:-translate-y-4 group-hover:-translate-x-4 -bottom-10 -right-10 w-1/2 h-1/2 rounded-lg bg-purple-400"
                alt="image here"
            ></div>

            <div className="">
                <h2 className="text-2xl font-bold mb-2 text-white">Wheat</h2>
                <p className="text-gray-200 line-clamp-3">
                    Type: Grains
                    <br />
                    Quantity: 20kg
                    <br />
                    Expiry: 20/10/2022
                </p>
            </div>
            <button
                className="hover:bg-purple-400 bg-purple-600 text-white mt-6 rounded p-2 px-6 "
            >
                Explore
            </button>
        </div>

    </div>
}


export default TileDonor;



