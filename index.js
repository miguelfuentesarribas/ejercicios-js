//ejercicio 1
const arrNames = [
    {id: 1, name: 'Pepe'},
    {id: 2, name: 'Juan'},
    {id: 3, name: 'Alba'},
    {id: 4, name: 'Toby'},
    {id: 5, name: 'Lala'}
  ];
  
  const sol1 = arrNames.find((item) => item.id === 3);
  
  console.log('ejercicio 1');
  console.log(sol1);
  
  
  
  
  
  
  //ejercicio 2
  const arrDirty = [NaN, 0, 5, false, -1, '',undefined, 3, null, 'test'];
  
  const sol2 = arrDirty.filter(item => item);
  
  console.log('ejercicio 2');
  console.log(sol2);
  
  
  
  
  
  
  
  //ejercicio 3
  const arrCities = [
    {city: 'Logroño', country: 'Spain', capital: false},
    {city: 'Paris', country: 'France', capital: true},
    {city: 'Madrid', country: 'Spain', capital: true},
    {city: 'Rome', country: 'Italy', capital: true},
    {city: 'Oslo', country: 'Norway', capital: true},
    {city: 'Jaén', country: 'Spain', capital: false}
  ];
  
  const sol3 = arrCities.filter((item) => !(item.country == 'Spain' && item.capital == false));
  
  
  console.log('ejercicio 3');
  console.log(sol3);
  
  
  
  
  
  
  
  
  
  
  
  
  //ejercicio 4
  const arrNumber1 = [1,2,3,'a'];
  const arrNumber2 = [1,2,3,4,5,'a'];
  const arrNumber3 = [1,4,7,2,'a'];
  
  const sol4 = arrNumber3.filter(
    item => (arrNumber1.filter(
      item => arrNumber2.includes(item))
    ).includes(item)
  );
  
  console.log('ejercicio 4');
  console.log(sol4);
  
  
  //ejercicio 5
  const arrCities2 = [
    {city: 'Logroño', country: 'Spain', capital: false},
    {city: 'Bordeaux', country: 'France', capital: false},
    {city: 'Madrid', country: 'Spain', capital: true},
    {city: 'Florence', country: 'Italy', capital: true},
    {city: 'Oslo', country: 'Norway', capital: true},
    {city: 'Jaén', country: 'Spain', capital: false}
  ];
  
  const noCapitales = arrCities2.filter((item) => item.capital == false);
  const sol5 = noCapitales.map(function(obj) {
                                                                let city = obj.city;
                                                                let isSpain;
                                                                if (obj.country == 'Spain') {
                                    isSpain = true;
                                  } else {
                                    isSpain = false;
                                  }
                                       return {city, isSpain};
                               });
  console.log('ejercicio 5');
  console.log(sol5);
  
  
  
  
  
  //ejercicio 6
  function roundTo(fValue, decimals) {
    var nDec = 1;
    for (var i = 0; i < decimals; i++) {
      nDec = nDec * 10;
    };
    fValue = Math.round(fValue * nDec) / nDec;
    return fValue;
  }
  
  console.log('ejercicio 6');
  roundTo(2.4554656645645, 7);
  roundTo(2.4554656645645, 3);
  roundTo(2.4554656645645, 2);
  
  
  //ejercicio 7
  function returnFalsyValues(obj, func) {
    let finalObject = {};
    for ( let value in obj) {
          if (!func(obj[value])) {
        finalObject[value] = obj[value];
      };
    };
    return finalObject;
  }
  console.log('ejercicio 7');
  console.log(returnFalsyValues({ a: 1, b: '2', c: 3 }, x => typeof x === 'string'));
  console.log(returnFalsyValues({ a: 1, b: '2', c: 3, d: 10 }, x => x > 2 && x < 9));
  
  
  //ejercicio 8
  function fromBytesToFormattedSizeUnits(bytes, precision = 3) {
    const units = [' B', ' KB', ' MB', ' GB', ' TB', ' PB', ' EB', ' ZB', ' YB'];
    var index = 0;
    do {
      bytes = bytes / 1024;
      index++;
    } while (bytes > 1024 || bytes < -1024);
    if (units[index] === undefined) {
      return 'valor demasiado grande';
    };
    return bytes.toPrecision(precision) + units[index];
  }
  console.log('ejercicio 8');
  console.log(fromBytesToFormattedSizeUnits(1024));
  console.log(fromBytesToFormattedSizeUnits(23423552));
  console.log(fromBytesToFormattedSizeUnits(123456789));
  console.log(fromBytesToFormattedSizeUnits(-12145489451.5932, 5));
  console.log(fromBytesToFormattedSizeUnits(634645654644654563465365646.45645546, 10));
  console.log(fromBytesToFormattedSizeUnits(6346456546446545635465365646.45645546, 7));
  
  
  // ejercico 9
  function toLowercadseKeys(obj) {
    let finalObject = {};
    for ( let value in obj) {
      finalObject[value.toLowerCase()] = obj[value];
    };
    return finalObject;
  }
  console.log('ejercicio 9');
  console.log(toLowercadseKeys({ NamE: 'Charles', ADDress: 'Home Street' }));
  
  
  // ejercico 10
  function removeHTMLTags(html_xml) {
       var regex = /(<.[^(><.)]+>)/g;
      html_xml = html_xml.replace(regex, '');
    return html_xml	  
  }
  
  console.log('ejercicio 10');
  console.log(removeHTMLTags('<div><span>lorem</span> <strong>ipsum</strong></div>'));
  console.log(removeHTMLTags('<ul id="nav-access" class="a11y-nav"><li><a id="skip-main" href="#content">Skip to main content</a></li><li><a id="skip-search" href="#top-nav-search-q">Skip to search</a></li><li><a id="skip-select-language" href="#languages-switcher-button">Skip to select language</a></li></ul>'));
  
  
  // ejercico 11
  const splitArrayIntoChunks = (arr, leng) => {
    var arrSave = [...arr];
    var arr1d = []
    var arrFinal = [];
    
    do {
        for (let j = 0; j < leng ; j++){
        if(arrSave[0] !== undefined){
            arr1d.push(arrSave[0]);
                arrSave.shift();  
        }
        };
        arrFinal.push([...arr1d]);
        arr1d = [];
    } while (arrSave.length > 0);
    
    return arrFinal;
  }
  console.log('ejercicio 11');
  console.log(splitArrayIntoChunks([1, 2, 3, 4, 5, 6, 7], 6));