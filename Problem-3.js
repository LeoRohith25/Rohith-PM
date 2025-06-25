function oddSeries(a){
      let result = [];

      for(let i=1; i <= a; i = i + 2){
        result.push(i);
      }

      console.log(result.join(","))
}

oddSeries(1);
oddSeries(2);
oddSeries(3);
oddSeries(4);
oddSeries(5);