// dateformat.js

// Function to format a date object to a desired format
exports.formatDate = (date, format = 'YYYY-MM-DD HH:mm:ss') => {
    const options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    };
  
    const formattedDate = date.toLocaleDateString('en-US', options).replace(/(\d+)\/(\d+)\/(\d+),/g, '$3-$1-$2')
    return formattedDate;
  };
  