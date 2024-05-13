export function detectLocalStorageUsage() {
  // Check if local storage is available
  if (typeof Storage !== "undefined") {
    console.log("Local Storage is available.");

    // Function to monitor changes in local storage
    const monitorLocalStorage = () => {
      const originalSetItem = Storage.prototype.setItem;
      Storage.prototype.setItem = function(key, value) {
        console.log(`Detected setting item in local storage: ${key}: ${value}`);
        originalSetItem.apply(this, arguments);
      };

      const originalGetItem = Storage.prototype.getItem;
      Storage.prototype.getItem = function(key) {
        console.log(`Detected accessing item in local storage: ${key}`);
        return originalGetItem.apply(this, arguments);
      };

      const originalRemoveItem = Storage.prototype.removeItem;
      Storage.prototype.removeItem = function(key) {
        console.log(`Detected removal of item in local storage: ${key}`);
        originalRemoveItem.apply(this, arguments);
      };

      const originalClear = Storage.prototype.clear;
      Storage.prototype.clear = function() {
        console.log("Detected clearing of all local storage items");
        originalClear.apply(this, arguments);
      };
    };

    // Start monitoring local storage
    monitorLocalStorage();
  } else {
    console.log("Local Storage is not available.");
  }
}