/* eslint-disable no-undef */
const storeForm = document.getElementById('store-form');
const storeId = document.getElementById('store-id');
const storeAddress = document.getElementById('store-address');

// Send POST to API to add Store
async function addStore(e) {
  e.preventDefault();
  if (storeAddress === '' || storeId === '') {
    alert('Please fill the blank fields');
  }

  const sendBody = {
    storeId: storeId.value,
    address: storeAddress.value,
  };

  try {
    const res = await fetch('/api/v1/stores', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sendBody),
    });

    if (res.status === 400) {
      throw Error('Store already exist');
    }
    alert('Store added!');

    window.location.href = '/index.html';
  } catch (error) {
    alert(error);
  }
}

storeForm.addEventListener('submit', addStore);
