
      // fetch data
      const dataFetch = async () => {
        const data = await (
          await fetch(
            "http://localhost:3003/employee"
          )
        ).json();
            console.log(data);
            
        // set state when the data received
       return data;
      };
      export default dataFetch;
