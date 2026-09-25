/* export async function fetchMetalRates() {

    const apiUrl = import.meta.env.VITE_API_URL;
    const analyticsId = import.meta.env.VITE_API_ID;
    const url = `${apiUrl}?api_key=${analyticsId}&currency=USD&unit=toz`;

    const response = await fetch(url, {
        headers: {
            'Accept': 'application/json',
        },
    });

    const result = await response.json();
    const goldRate = result?.rates?.XAU?.price
    console.log(result);
}
 */