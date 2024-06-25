const CLIENT_ID = 'n7h14ka0ix';
const CLIENT_SECRET = 'qGnt3rKB394WJYvRBV70tO1YVhAQ92DuhXl5pIOc';

const GCAPI = async (lat, lon) => {
    const res = await fetch(`https://naveropenapi.apigw.ntruss.com/map-reversegeocode/v2/gc?request=coordsToaddr&coords=${lon},${lat}&sourcecrs=epsg:4326&output=json&orders=addr,admcode`, {
        headers: {
            'X-NCP-APIGW-API-KEY-ID': CLIENT_ID,
            'X-NCP-APIGW-API-KEY': CLIENT_SECRET,
            'Accept' : 'application/json',
        },
    })
    const json = await res.json();
    if (json.results && json.results.length > 0) {
        const pickLocation = Object.keys(json.results[1].region)
        .filter(key => key.startsWith('area') && key !== 'area0') 
        .map(key => json.results[1].region[key].name) 
        .filter(name => name.trim() !== '') 
        .join(' ');
        
        // console.log('pickLocation ======> ', pickLocation);
        return pickLocation
    } else {
        console.error('no results');
    }

};

export default GCAPI