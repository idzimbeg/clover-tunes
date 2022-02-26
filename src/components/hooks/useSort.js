import React, {useState, useMemo} from "react";

const useSort = (items, config = null) => {
    const [sortConfig, setSortConfig] = useState(config);
  
    const sortedSongs = useMemo(() => {
      let sortableSongs = [...items];
      if (sortConfig !== null) {
        sortableSongs.sort((a, b) => {
          if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? -1 : 1;
          }
          if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? 1 : -1;
          }
          return 0;
        });
      }
      return sortableSongs;
    }, [items, sortConfig]);
  
    const requestSort = (key) => {
      let direction = 'ascending';
      if (
        sortConfig &&
        sortConfig.key === key &&
        sortConfig.direction === 'ascending'
      ) {
        direction = 'descending';
      }
      setSortConfig({ key, direction });
    };
  
    return { items: sortedSongs, requestSort, sortConfig };
  };
  export default useSort;