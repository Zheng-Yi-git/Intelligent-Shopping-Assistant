'use strict';

import './popup.css';
import { AI21 } from 'langchain/llms/ai21';

(function () {
  // We will make use of Storage API to get and store `count` value
  // More information on Storage API can we found at
  // https://developer.chrome.com/extensions/storage

  // To get storage access, we have to mention it in `permissions` property of manifest.json file
  // More information on Permissions can we found at
  // https://developer.chrome.com/extensions/declare_permissions
  const counterStorage = {
    get: (cb) => {
      chrome.storage.sync.get(['count'], (result) => {
        cb(result.count);
      });
    },
    set: (value, cb) => {
      chrome.storage.sync.set(
        {
          count: value,
        },
        () => {
          cb();
        }
      );
    },
  };

  function setupAppListeners() {
    document.getElementById('searchBtn').addEventListener('click', () => {
      printModelResults();
    });
  }

  async function printModelResults() {
    document.getElementById('searchResult').innerHTML = 'Searching product';
    const model = new AI21({
      ai21ApiKey: 'WhI969toJeRihGIt9FQZBOG0gGdCnFxh',
    });
    const input = document.getElementById('searchText').value;
    const res = await model.call(`${input}`);
    document.getElementById('searchResult').innerHTML = res;
  }

  document.addEventListener('DOMContentLoaded', setupAppListeners);

  // Communicate with background file by sending a message
  chrome.runtime.sendMessage(
    {
      type: 'GREETINGS',
      payload: {
        message: 'Hello, my name is Pop. I am from Popup.',
      },
    },
    (response) => {
      console.log(response.message);
    }
  );
})();
