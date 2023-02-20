export const getIpData = async (ip) => {
    const url = `https://ip-api.com/json/${ip}`
    const res = await fetch(url, {
        method:'GET',
        headers: {
            'Content-Type': 'application/json',
          },
    })

    let data = await res.json()
    return data;
}