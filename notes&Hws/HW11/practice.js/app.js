
    async function getData() {
        const response = await fetch('data.csv');
        const data = await response.text();
        //console.log(data);


        const table = data.split('\n').slice(1);

        table.forEach(curr => {
            const columns = curr.split(',').splice(1);
            country = ([curr[0] + curr[1] + curr[2]]);
           

            console.log(country, columns);
            

        })


    }

getData();